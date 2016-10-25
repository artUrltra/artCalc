$( function() {
    var countEl = $( '#minbeds' ).children().length;
    var select = $( "#minbeds" );
    var slider = $( "<div id='slider'></div>" ).insertAfter( select ).slider({
        min: 1,
        max: countEl,
        range: "min",
        value: select[ 0 ].selectedIndex + 1,
        slide: function( event, ui ) {
            select[ 0 ].selectedIndex = ui.value - 1;
            var stateName = $( '#minbeds :nth-child(' + ui.value + ')' ).text();
            $( ".ui-slider-handle" ).html("<span class='showStageName'>" + stateName + "</span>");
            changeState(ui.value);
        }
    });
    $( "#minbeds" ).on( "change", function() {
        slider.slider( "value", this.selectedIndex + 1 );
    });
    $( ".ui-slider-handle" ).html("<span class='showStageName'>Текущее состояние</span>");
    for ( i = 1; i <= countEl; i++ ){
        var left = 100/(countEl - 1);
        $('#slider').append('<span class="possibleState" style="left: ' + (left)*(i-1) + '%;"></span>')
    }
    function changeState(e) {
        var stateName = '#state' + e;
        $( '#allStates > *' ).fadeOut(100);
        $( '#allStates > ' + stateName ).delay( 100 ).fadeIn(100);
    }
    $( '#allStates > *' ).fadeOut(0);
    $( '#allStates > #state1' ).fadeIn(0);
} );

