// Убираем прилоадер
$('iframe').on("load", function() {
    $( '.preloade-wrapper' ).fadeOut( 500 );
    $( 'body' ).css('overflow', 'auto');
});
// Убираем прилоадер//

// Получение высоты фрейма 1 и установка высоты
$('iframe').on("load", function() {
    var iframe = document.getElementsByTagName('iframe')[0];
    var iframeDoc = iframe.contentWindow.document;
    var iframeHeigth = $( iframeDoc ).height();
    $( 'iframe' ).height( iframeHeigth  );
});
// Получение высоты фрейма 1 и установка высоты//

// Установка переключателя стейтов
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
// Установка переключателя стейтов//