$( '.addImg' ).click(function () {
    var i = $('input[type=file]').length;
    $('.loadImgBlock').append( '<input type="file" multiple="multiple" accept="image/*">' );
});
$(document).on('change', 'input[type=file]', function() {
    files = this.files;
    event.stopPropagation(); 
    event.preventDefault();  
    var data = new FormData();
    $.each( files, function( key, value ){
        data.append( key, value );
    });
    $.ajax({
        url: './php/uploadImg.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function( respond, textStatus, jqXHR ){
            $.snackbar({content: "Файл загружен!"});
        },
        error: function( jqXHR, textStatus, errorThrown ){
            $.snackbar({content: "Файл НЕ загружен!"});
        }
    });

});