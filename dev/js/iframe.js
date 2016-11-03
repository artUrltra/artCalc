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
    //$('iframe').contents().find("#addons").click(function() {
        //var el = $('iframe').contents().find("#addon-v-niz");
        //var eh = el.height();
        //var fh = $('iframe').contents().height();
        //if (!el.attr('aria-expanded') || el.attr('aria-expanded') == 'false') {
            //$('iframe').height(fh + eh);
        //}
        //else {
            //$('iframe').height(fh - eh);
        //}
    //});
    //$('iframe').contents().find("#decors").click(function() {
        //var el = $('iframe').contents().find("#decor-v-niz");
        //var eh = el.height();
        //var fh = $('iframe').contents().height();
        //if (!el.attr('aria-expanded') || el.attr('aria-expanded') == 'false') {
            //$('iframe').height(fh + eh);
        //}
        //else {
            //$('iframe').height(fh - eh);
        //}
    //});
});
// Получение высоты фрейма 1 и установка высоты//

// Установка режима "Только чтение" для фрейма 2
$('iframe').on("load", function() {
    document.getElementsByTagName('iframe')[1].style.pointerEvents = 'none';
});
// Установка режима "Только чтение" для фрейма 2//

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
        state1 = $('iframe#state1').get(0).contentWindow.$;
        if (e == 2) {
            state2 = $('iframe#state2').get(0).contentWindow.$;
            if (state1("#TOTAL_PAINTING_ID").val()) state2("#TOTAL_PAINTING_ID").val(state1("#TOTAL_PAINTING_ID").val()).trigger('change');
            if (state1("#MOVABLE_PAINTING_ID").val()) state2("#MOVABLE_PAINTING_ID").val(state1("#MOVABLE_PAINTING_ID").val()).trigger('change');
            if (state1("#TYPE_BAFFLE_ID").val()) state2("#TYPE_BAFFLE_ID").val(state1("#TYPE_BAFFLE_ID").val()).trigger('change');
            if (state1(".BAFFLE_SEKECTOR_CLASS").val()) state2(".BAFFLE_SEKECTOR_CLASS").val(state1(".BAFFLE_SEKECTOR_CLASS").val()).trigger('change');
            if (state1("#NUMBER_OF_DUPLICATOR_ID").val()) state2("#NUMBER_OF_DUPLICATOR_ID").val(state1("#NUMBER_OF_DUPLICATOR_ID").val()).trigger('change');
            if (state1("#NUMBER_SETS_ID").val()) state2("#NUMBER_SETS_ID").val(state1("#NUMBER_SETS_ID").val()).trigger('change');
            if (state1("#HIGHT_SETS_ID").val()) state2("#HIGHT_SETS_ID").val(state1("#HIGHT_SETS_ID").val()).trigger('change');
            if (state1("#WIDTH_SETS_ID").val()) state2("#WIDTH_SETS_ID").val(state1("#WIDTH_SETS_ID").val()).trigger('change');
            if (state2("#TOTAL_PAINTING_ID").val() && state2("#MOVABLE_PAINTING_ID").val() && state2("#HIGHT_SETS_ID").val() && state2("#WIDTH_SETS_ID").val()) {
                window.frames[1].minimalPriceContent();
            }
        }
        if (e == 3) {
            state3 = $('iframe#state3').get(0).contentWindow.$;
            if (state1("#TOTAL_PAINTING_ID").val()) state3("#TOTAL_PAINTING_ID").val(state1("#TOTAL_PAINTING_ID").val()).trigger('change');
            if (state1("#MOVABLE_PAINTING_ID").val()) state3("#MOVABLE_PAINTING_ID").val(state1("#MOVABLE_PAINTING_ID").val()).trigger('change');
            if (state1("#TYPE_BAFFLE_ID").val()) state3("#TYPE_BAFFLE_ID").val(state1("#TYPE_BAFFLE_ID").val()).trigger('change');
            if (state1(".BAFFLE_SEKECTOR_CLASS").val()) state3(".BAFFLE_SEKECTOR_CLASS").val(state1(".BAFFLE_SEKECTOR_CLASS").val()).trigger('change');
            if (state1("#NUMBER_OF_DUPLICATOR_ID").val()) state3("#NUMBER_OF_DUPLICATOR_ID").val(state1("#NUMBER_OF_DUPLICATOR_ID").val()).trigger('change');
            if (state1("#NUMBER_SETS_ID").val()) state3("#NUMBER_SETS_ID").val(state1("#NUMBER_SETS_ID").val()).trigger('change');
            if (state1("#HIGHT_SETS_ID").val()) state3("#HIGHT_SETS_ID").val(state1("#HIGHT_SETS_ID").val()).trigger('change');
            if (state1("#WIDTH_SETS_ID").val()) state3("#WIDTH_SETS_ID").val(state1("#WIDTH_SETS_ID").val()).trigger('change');
        }
        var stateName = '#state' + e;
        $( '#allStates > *' ).fadeOut(100);
        $( '#allStates > ' + stateName ).delay( 100 ).fadeIn(100);
    }
    $( '#allStates > *' ).fadeOut(0);
    $( '#allStates > #state1' ).fadeIn(0);
} );
// Установка переключателя стейтов//