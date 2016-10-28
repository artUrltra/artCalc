$( function() {
    if (window.s === undefined) window.s = '';
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
        if (e == 1) {
            window.s = '';
        }
        if (e == 2) {
            window.s = '-2';
            if ($('#TOTAL_PAINTING_ID-2').val() <= 0 && $('#TOTAL_PAINTING_ID').val() > 0) {
                $('#TOTAL_PAINTING_ID-2').val($('#TOTAL_PAINTING_ID').val());
                $('#TOTAL_PAINTING_ID-2').change();
            }
            if ($('#MOVABLE_PAINTING_ID-2').val() <= 0 && $('#MOVABLE_PAINTING_ID').val() > 0) {
                $('#MOVABLE_PAINTING_ID-2').val($('#MOVABLE_PAINTING_ID').val());
                $('#MOVABLE_PAINTING_ID-2').change();
            }
            if ($('#TYPE_BAFFLE_ID-2').val() <= 0 && $('#TYPE_BAFFLE_ID').val() > 0) {
                $('#TYPE_BAFFLE_ID-2').val($('#TYPE_BAFFLE_ID').val());
                $('#TYPE_BAFFLE_ID-2').change();
            }
            if ($('.BAFFLE_SEKECTOR_CLASS-2').val() <= 0 && $('.BAFFLE_SEKECTOR_CLASS').val() > 0) {
                $('.BAFFLE_SEKECTOR_CLASS-2').val($('.BAFFLE_SEKECTOR_CLASS').val());
                $('.BAFFLE_SEKECTOR_CLASS-2').change();
            }
            if ($('#NUMBER_SETS_ID-2').val() <= 0 && $('#NUMBER_SETS_ID').val() > 0) {
                $('#NUMBER_SETS_ID-2').val($('#NUMBER_SETS_ID').val());
                $('#NUMBER_SETS_ID-2').change();
            }
            if ($('#NUMBER_OF_DUPLICATOR_ID-2').val() <= 0 && $('#NUMBER_OF_DUPLICATOR_ID').val() > 0) {
                $('#NUMBER_OF_DUPLICATOR_ID-2').val($('#NUMBER_OF_DUPLICATOR_ID').val());
                $('#NUMBER_OF_DUPLICATOR_ID-2').change();
            }
            if ($('#HIGHT_SETS_ID-2').val() <= 0 && $('#HIGHT_SETS_ID').val() > 0) {
                $('#HIGHT_SETS_ID-2').val($('#HIGHT_SETS_ID').val());
                $('#HIGHT_SETS_ID-2').change();
            }
            if ($('#WIDTH_SETS_ID-2').val() <= 0 && $('#WIDTH_SETS_ID').val() > 0) {
                $('#WIDTH_SETS_ID-2').val($('#WIDTH_SETS_ID').val());
                $('#WIDTH_SETS_ID-2').change();
            }
        }
        if (e == 3) {
            window.s = '-3';
            if ($('#TOTAL_PAINTING_ID-3').val() <= 0 && $('#TOTAL_PAINTING_ID').val() > 0) {
                $('#TOTAL_PAINTING_ID-3').val($('#TOTAL_PAINTING_ID').val());
                $('#TOTAL_PAINTING_ID-3').change();
            }
            if ($('#MOVABLE_PAINTING_ID-3').val() <= 0 && $('#MOVABLE_PAINTING_ID').val() > 0) {
                $('#MOVABLE_PAINTING_ID-3').val($('#MOVABLE_PAINTING_ID').val());
                $('#MOVABLE_PAINTING_ID-3').change();
            }
            if ($('#TYPE_BAFFLE_ID-3').val() <= 0 && $('#TYPE_BAFFLE_ID').val() > 0) {
                $('#TYPE_BAFFLE_ID-3').val($('#TYPE_BAFFLE_ID').val());
                $('#TYPE_BAFFLE_ID-3').change();
            }
            if ($('.BAFFLE_SEKECTOR_CLASS-3').val() <= 0 && $('.BAFFLE_SEKECTOR_CLASS').val() > 0) {
                $('.BAFFLE_SEKECTOR_CLASS-3').val($('.BAFFLE_SEKECTOR_CLASS').val());
                $('.BAFFLE_SEKECTOR_CLASS-3').change();
            }
            if ($('#NUMBER_SETS_ID-3').val() <= 0 && $('#NUMBER_SETS_ID').val() > 0) {
                $('#NUMBER_SETS_ID-3').val($('#NUMBER_SETS_ID').val());
                $('#NUMBER_SETS_ID-3').change();
            }
            if ($('#NUMBER_OF_DUPLICATOR_ID-3').val() <= 0 && $('#NUMBER_OF_DUPLICATOR_ID').val() > 0) {
                $('#NUMBER_OF_DUPLICATOR_ID-3').val($('#NUMBER_OF_DUPLICATOR_ID').val());
                $('#NUMBER_OF_DUPLICATOR_ID-3').change();
            }
            if ($('#HIGHT_SETS_ID-3').val() <= 0 && $('#HIGHT_SETS_ID').val() > 0) {
                $('#HIGHT_SETS_ID-3').val($('#HIGHT_SETS_ID').val());
                $('#HIGHT_SETS_ID-3').change();
            }
            if ($('#WIDTH_SETS_ID-3').val() <= 0 && $('#WIDTH_SETS_ID').val() > 0) {
                $('#WIDTH_SETS_ID-3').val($('#WIDTH_SETS_ID').val());
                $('#WIDTH_SETS_ID-3').change();
            }
        }
        var stateName = '#state' + e;
        $( '#allStates > *' ).fadeOut(100);
        $( '#allStates > ' + stateName ).delay( 100 ).fadeIn(100);
    }
    $( '#allStates > *' ).fadeOut(0);
    $( '#allStates > #state1' ).fadeIn(0);
} );

