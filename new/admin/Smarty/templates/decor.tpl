<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Декор</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">

    <style>
        .form-group img {
            max-width: 100%;
        }

        .thumbnail {
            max-width: 100%;
            height: 100px;
        }

        .thumbnail > img {
            max-height: 100%;
            min-height: 100%;
        }

        h6 {
            font-size: 10px;
        }

    </style>
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <script src="../admin/assets/js/dropzonejs.js"></script>
    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

{include file='menu.tpl'}


<div class="container">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить
                </button>
            </div>
        </div>
        <div id="form">
            <hr>
            <input type="text" class="form-control" id="name" placeholder="Название"/>
            <button id="batton" class="btn btn-default btn-lg btn-block">Выбрать картинку</button>
            <center>
                <img src="../img/material/undefined.png" width="300px" height="300px"
                     id="add_img" {*class="img-responsive" alt="Responsive image"*}>
            </center>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" onclick="submit()">Добавить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit" onclick="reset()">Отменить</button>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
        <hr>
        <div class="table-responsive">
            <table class="table table-hover" id="result">
                <thead>
                <th>Название Декора</th>
                <th>Картинка</th>
                </thead>
                <tbody>
                {foreach $items as $item name=items}
                    <tr id="delete{$item['id']}">
                        <td>{$item['name']}</td>
                        <td><img src="{$item['img']}" class="img-responsive" width="140px" height="140px"></td>
                        <td>
                            <button type="button" onclick="itemdelete({$item['id']})"
                                    class="btn btn-link "><span
                                        class="glyphicon glyphicon-remove"></span></button>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>

    </div>
</div> <!-- /container -->

<div class="modal fade bs-example-modal-lg" id="ModalGallery" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">Картинка</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {foreach $archive as $item name=items}
                        <div class="col-xs-6 col-md-2">
                            <a class="thumbnail">
                                <img src="./uploads/{$item}" alt="...">
                            </a>
                            <div class="caption">
                                <center>
                                    <h6>{$item}</h6>
                                </center>
                            </div>
                        </div>
                    {/foreach}
                </div>
            </div>
        </div>
    </div>
</div>



<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="edit_name" placeholder="Название"/>
                        <input type="file" class="form-control" id="edit_file" multiple="multiple"
                               accept=".txt,image/*">
                        <img id="edit_image" src="#" class="form-group">

                        <div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" id="edit_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                <button type="button" id="edit_submit" class="btn btn-primary">Редактировать</button>
            </div>
        </div>
    </div>
</div>


<!-- Scripts -->
<script src="../admin/jquery-3.1.1.min.js"></script>
<script>
    $(document).ready(function () {
        $('#form').hide();
    });

    function submit() {

        var index = 0;
        if ($("#name").val() == '') {
            $("#name").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#name").css("border-color", '#ccc');
        }


        switch (index) {
            case 0: {
                var name = "name=" + $("#name").val();
                var image = "&image=" + $('#add_img').attr('src').substr(2);
                var cont = "&count=" + getUrlVars()['id'];
                var data = name + image + cont;
                $.post('../admin/ajax.php?dekor', data, function (data) {
                    location.reload();
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
                break;
            }
        }

    }
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    function itemdelete(id) {
        var data = "id=" + parseInt(id);
        $.post("../admin/ajax.php?delete=delete4", data, function (data) {
            $('#delete' + id).remove();
        });
    }
    $('#edit_img').click(function () {
        $('#test').show();
    });
    $('.t1').click(function () {
        $('#edit_img').attr('src', $(this).attr('src'));
        $('#test').hide();
    });
    $('#batton').on('click', function () {
        $('#ModalGallery').modal('toggle');
    });
    $('a img').on('click', function () {
        $('#add_img').attr('src', $(this).attr('src'));
        $('#ModalGallery').modal('hide');
    });
    function edit(id) {
        var data = "id=" + id + "&count=" + getUrlVars()['id'];


        $.post("../admin/ajax.php?getDekor", data, function (data) {
            var data = JSON.parse(data);
            $('#edit_name').val(data[0].name);
            $('#edit_image').attr('src', data[0].img);
        })
        $('#edit_submit').click(function () {
            itemdelete(id);
            $("#edit_exit").click();

            var name = "name=" + $("#edit_name").val();
            var image = "&image=" + $('#edit_image').attr('src');
            var cont = "&count=" + getUrlVars()['id'];
            var data = name + image + cont;
            $.post('../admin/ajax.php?dekor', data, function (data) {
                location.reload();
            });
        });


    }
    var files;

    $('#edit_file').change(function () {

        files = this.files;
        var data = new FormData();
        $.each(files, function (key, value) {
            data.append(key, value);
        });
        $.ajax({
            url: '../admin/submit.php?uploadfiles2',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
            }
        });
        var img = 'dekor/' + $('#edit_file')[0].files[0].name;
        $('#edit_image').attr('src', img);
    });
    $('#add').click(function () {
        $('#form').show();
        $('#add').hide();
    });
    function reset() {
        location.reload();
    }
</script>

<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
