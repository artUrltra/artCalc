function sendimg() {
    var flag =true;
    if($('#nameimg').val() === ''){
        $.snackbar({
            content: "Вы забили ввести имя для картинки!!!"
        });
        $('#nameimg').parent().parent().addClass('has-error');
        $('#nameimg').parent().parent().addClass('is-focused');
        flag= false;
    }else {
        $('#nameimg').parent().parent().removeClass('has-error');
    }
    if(flag) {
        var data = {
            name: $('#nameimg').val(),
            img: $('#loadimg').attr('src'),
            description: $('#oimg').val(),
            tags: $("#tags").val()
        };
        $.post("./admin/ajax.php?imgadd=1", data, function (data) {
            if (data == '1') {
                $.snackbar({
                    content: "Изображения добавлено в галерею"
                });
                storage.fillimages();
                $('#allimages').click();
            } else {
                $.snackbar({
                    content: "Ошибка"
                });
            }
            cancel();
        });
    }
}

function cancel() {
    $('#nameimg').val('');
    $('#loadimg').attr('src', 'img/0.png');
    $('#oimg').val('');
    $("#tags").tagsinput('removeAll');
}

function pushimg() {
    setImages(storage.images);
}

function setImages(arr) {
    var $gal = $('#galleryall #allImagesSee');
    var html = '';
    $gal.html('');
    arr.forEach(function(v) {
        let urlImg = v.img.replace('./',window.location.href);
         html += '<div class="col-md-4">'
                    +'<a data-fancybox="gallery" href="' + v.img + '">'
                        +'<img src="' + v.img + '" title="' + v.name + '" class="img-thumbnail img-responsive" style="max-height: 300px;height:300px;">'
                    +'</a>'
                    +'<a class="btn btn-raised btn-lg btn-block btn-primary" href="javascript:void(0)" onclick="setPDFimg(' + v.id  + ')"> Выбрать </a>'
                    +'<input value="' +  urlImg + '" style=" width: 100%; margin: 0 0 25px 0; ">'
                +'</div>';
    });
    $gal.html(html);
    $( document ).tooltip();
}
window.imagesPDF = [];

function setPDFimg(id) {
    $('#gallery').modal('hide');
    $.snackbar({
        content: "Изображения добавлено в PDF"
    });
    window.imagesPDF.push(storage.images.filter(function(v) {

        return v.id == id;
    })[0]['img']);
}
$('#searhname').on('keyup', function() {
    var name = $(this).val();
    if (name != '') {
        setImages(storage.images.filter(function(v) {
            return v.name == name;
        }));
    } else {
        setImages(storage.images);
    }
});
$('#searhtags').on('keyup', function() {
    var tag = $(this).val();
    if (tag != '') {
        setImages(storage.images.filter(function(v) {
            if (v.tags.indexOf(tag) >= 0)
                return v.tags;
        }));
    } else {
        setImages(storage.images);
    }
});
