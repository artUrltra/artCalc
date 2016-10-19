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
        url: './loadImg.php?uploadfiles',
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

$(document).ready(function () {
    $('.getScreen').on("click", function () {
        captureAndUpload();
        alert()
    });
    function captureAndUpload() {
        html2canvas($("#PAINTING-DIAGRAMMA"), {
            background:'#fff',
            onrendered: function(canvas) {
                var imgData = canvas.toDataURL('image/jpeg');
                var url = 'loadImg.php';
                $.ajax({
                    type: "POST",
                    url: url,
                    dataType: 'text',
                    data: {
                        screen : imgData
                    },
                    success: function(response){
                        alert('ok')
                    },
                    error:function(xhr, ajaxOptions, thrownError){
                        alert(xhr.responseText);
                    }
                });
            }
        });
    }
});