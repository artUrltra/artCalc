
function fPaintingDiagramma(event,ui) {
    var id = parseInt( $( this ).data()['id'] );
    $('.PAINTING-DIAGRAMMA-EL'+window.s).css({'z-index':'0'});
    $('*[data-id="' + id + '"]').css({'z-index':'1000'});
    $('.BAFFLE_SEKECTOR_CLASS'+window.s).val(id);
    $(".BAFFLE_SEKECTOR_CLASS"+window.s+" option[value=" + id + "]").trigger('change');

    var heightEvent = event['currentTarget']['clientHeight'];
    $('#tab-profil-vyisota'+window.s).val(heightEvent*10);
    $("#tab-profil-vyisota"+window.s).trigger('change');

    var widthEvent = event['currentTarget']['clientWidth'];
    $('#tab-profil-shirina'+window.s).val(widthEvent*10);
    $("#tab-profil-shirina"+window.s).trigger('change');

    $( '*' ).removeClass( 'used' );
    $( this ).addClass( 'used' );
}
$('#PAINTING-DIAGRAMMA').on( "click resize", ".PAINTING-DIAGRAMMA-EL", fPaintingDiagramma);
$('#PAINTING-DIAGRAMMA-2').on( "click resize", ".PAINTING-DIAGRAMMA-EL-2", fPaintingDiagramma);
$('#PAINTING-DIAGRAMMA-3').on( "click resize", ".PAINTING-DIAGRAMMA-EL-3", fPaintingDiagramma);

function DandDStart() {
    $( ".PAINTING-DIAGRAMMA-EL"+window.s ).resizable({
        containment:'#PAINTING-DIAGRAMMA'+window.s,
        handles:'n,e,s,w,se',
        maxHeight: parseInt( $( '#HIGHT_SETS_ID'+window.s ).val() / 10 ),
        maxWidth: parseInt( $( '#WIDTH_SETS_ID'+window.s ).val() ) / 10,
        resize: function( event, ui ) {
            calcNow();
            setHeightDandDEl();
            setWidthDandDEl();
        }
    });
    $(".drag").draggable({
        containment: "#PAINTING-DIAGRAMMA"+window.s,
        snap: true,
        snapMode: "both"
    });
    paintingInDiadramma();
    setHeightDandDEl();
    setWidthDandDEl();
}
function setHeightDandDEl() {
    var p = parseInt( $('#TOTAL_PAINTING_ID'+window.s).val() );
    for ( i=0; i<=p; i++){
        var wi = parseFloat( $('*[data-id="' + i + '"]').attr( 'data-height' ) );
        $('*[data-id="' + i + '"]').css('height', wi/10 );
    }

}
function setWidthDandDEl() {
    var p = parseInt( $('#TOTAL_PAINTING_ID'+window.s).val() );
    for ( i=0; i<=p; i++){
        var wi = parseFloat( $('*[data-id="' + i + '"]').attr( 'data-width' ) );
        $('*[data-id="' + i + '"]').css('width', wi/10 );
    }
}

$( '#PAINTING-DIAGRAMMA-BLOCK-HS' ).click(function () {
    $( "#PAINTING-DIAGRAMMA-BLOCK" ).slideToggle( "slow" );
});
$( '#PAINTING-DIAGRAMMA-BLOCK-HS-2' ).click(function () {
    $( "#PAINTING-DIAGRAMMA-BLOCK-2" ).slideToggle( "slow" );
});
$( '#PAINTING-DIAGRAMMA-BLOCK-HS-3' ).click(function () {
    $( "#PAINTING-DIAGRAMMA-BLOCK-3" ).slideToggle( "slow" );
});
