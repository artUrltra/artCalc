function paintingInDiadramma() {
    var total_painting = parseInt( $( '#TOTAL_PAINTING_ID'+window.s ).val() );

    // Перемычки
    $( '.paintingInDiadrammaPereochki' ).remove();
    for ( i=1; i<=total_painting; i++ ){
        var vertikalnue_pereochki_count = $('*[data-id="' + i + '"]').attr('data-vertikalnue-pereochki-count');
        if (vertikalnue_pereochki_count == '' || vertikalnue_pereochki_count == 0) {
            vertikalnue_pereochki_count = 0;
        }
        vertikalnue_pereochki_count = parseInt( vertikalnue_pereochki_count );
        var horizontal_pereochki_count = $('*[data-id="' + i + '"]').attr('data-horizontal-pereochki-count');
        var v = 100/horizontal_pereochki_count;
        var h = 100/vertikalnue_pereochki_count;
        if (isFinite(horizontal_pereochki_count)){
            v = 100;
        }
        var start = '<span class="paintingInDiadrammaPereochki" style="width: ' + v + '%; height: 100%;">';
        var finsh = '</span>';
        var VPH = $('*[data-id="' + i + '"]').attr('data-horizontal-pereochki-count') ;
        VPH = 100/( parseInt( VPH ) +1 );
        var t = '';
        if( isNaN(VPH) ){
            VPH = 100;
        }
        for( j=1; j<=parseInt( horizontal_pereochki_count )+1; j++){
            t = t + '<span class="paintingInDiadrammaPereochki" style="width: 100%; height: ' + VPH + '%;"></span>';
        }
        for( j=1; j<=vertikalnue_pereochki_count+1; j++) {
            $('*[data-id="' + i + '"]').append(start + t + finsh);
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////

    for ( i=1; i<=total_painting; i++ ){
        var type = $('*[data-id="' + i + '"]').attr('data-type') ;
        var str = '<span class="line-' + type + '"></span>';
        $('*[data-id="' + i + '"]').append(str);
    }

}

