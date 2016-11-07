$('#PAINTING-DIAGRAMMA').on( "click resize", ".PAINTING-DIAGRAMMA-EL", function(event,ui) {
    var id = parseInt( $( this ).data()['id'] );
    $('.PAINTING-DIAGRAMMA-EL').css({'z-index':'0'});
    $('*[data-id="' + id + '"]').css({'z-index':'1000'});
    $('.BAFFLE_SEKECTOR_CLASS').val(id);
    $(".BAFFLE_SEKECTOR_CLASS option[value=" + id + "]").trigger('change');

    var heightEvent = event['currentTarget']['clientHeight'];
    $('#tab-profil-vyisota').val(heightEvent*10);
    $("#tab-profil-vyisota").trigger('change');

    var widthEvent = event['currentTarget']['clientWidth'];
    $('#tab-profil-shirina').val(widthEvent*10);
    $("#tab-profil-shirina").trigger('change');

    $( '*' ).removeClass( 'used' );
    $( this ).addClass( 'used' );

    $('.resizeY').remove();
    $(this).append('<div class="resizeY">');
    $('.resizeY').append('<div class="arrowTop" onclick="arrowTop(' + id + ')">');
    $('.resizeY').append('<div class="arrowBottom" onclick="arrowBottom(' + id + ')">');
    $('.resizeY').append('<div class="arrowY1">');
    $('.resizeY').append('<div class="arrowY2">');
    $('.resizeY').append('<div class="indicatorY">' + parseInt($('.resizeY').height() + 2) );

    $('.resizeX').remove();
    $(this).append('<div class="resizeX">');
    $('.resizeX').append('<div class="arrowLeft" onclick="arrowLeft(' + id + ')">');
    $('.resizeX').append('<div class="arrowRight" onclick="arrowRight(' + id + ')">');
    $('.resizeX').append('<div class="arrowX1">');
    $('.resizeX').append('<div class="arrowX2">');
    $('.resizeX').append('<div class="indicatorX">' + parseInt($('.resizeX').width() + 2) );
});

// Изменение размеров диаграммы кликом по стрелке
function arrowBottom(id) {
    var heightDiagramma = $('*[data-id="' + id + '"]').height();
    $('*[data-id="' + id + '"]').height(heightDiagramma + 50);
}

function arrowTop(id) {
    var heightDiagramma = $('*[data-id="' + id + '"]').height();
    $('*[data-id="' + id + '"]').height(heightDiagramma - 50);
}

function arrowRight(id) {
    var heightDiagramma = $('*[data-id="' + id + '"]').width();
    $('*[data-id="' + id + '"]').width(heightDiagramma + 50);
}

function arrowLeft(id) {
    var heightDiagramma = $('*[data-id="' + id + '"]').width();
    $('*[data-id="' + id + '"]').width(heightDiagramma - 50);
}

function DandDStart(st) {
    $( ".PAINTING-DIAGRAMMA-EL").resizable({
        containment:'#PAINTING-DIAGRAMMA',
        handles:'n,e,s,w,se',
        maxHeight: parseInt( $( '#HIGHT_SETS_ID').val() / 10 ),
        maxWidth: parseInt( $( '#WIDTH_SETS_ID').val() ) / 10,
        resize: function( event, ui ) {
            calcNow();
            setHeightDandDEl();
            setWidthDandDEl();
        }
    });
    $(".drag").draggable({
        containment: "#PAINTING-DIAGRAMMA",
        snap: true,
        snapMode: "both"
    });
    paintingInDiadramma();
    setHeightDandDEl();
    setWidthDandDEl();
}
function setHeightDandDEl() {
    var p = parseInt( $('#TOTAL_PAINTING_ID').val() );
    for ( i=0; i<=p; i++){
        var wi = parseFloat( $('*[data-id="' + i + '"]').attr( 'data-height' ) );
        $('*[data-id="' + i + '"]').css('height', wi/10 );
    }

}
function setWidthDandDEl() {
    var p = parseInt( $('#TOTAL_PAINTING_ID').val() );
    for ( i=0; i<=p; i++){
        var wi = parseFloat( $('*[data-id="' + i + '"]').attr( 'data-width' ) );
        $('*[data-id="' + i + '"]').css('width', wi/10 );
    }
}

$( '#PAINTING-DIAGRAMMA-BLOCK-HS' ).click(function () {
    $( "#PAINTING-DIAGRAMMA-BLOCK" ).slideToggle( "slow" );
});