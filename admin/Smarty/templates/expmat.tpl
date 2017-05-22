<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Расширение</title>
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
            <div class="col-md-12">
                <h2>{if $type eq '1'}
                        Пескоструйные рисунки
                    {elseif $type eq '2'}
                        Фотопечать
                    {elseif $type eq '3'}
                        Жалюзи
                    {elseif $type eq '4'}
                        Отделка
                    {/if}
                </h2>
            </div>
        </div>
        <div id="form">
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <input type="text" class="form-control" id="name" placeholder="Название"/>
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" id="price" placeholder="Цена"/>
                </div>
            </div>
            <button id="batton" class="btn btn-default btn-lg btn-block">Выбрать картинку</button>
            <center>
                <img src="../img/material/undefined.png" width="300px" height="300px"
                     id="add_img">
            </center>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" onclick="submit()">Добавить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit" onclick="window.location.reload();">Отменить
                    </button>
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
                <th>Цена</th>
                </thead>
                <tbody>
                {foreach $items as $item}
                    <tr id="delete{$item['id']}">
                        <td>{$item['name']}</td>
                        <td><img src="{$item['img']}" class="img-responsive" width="140px" height="140px"></td>
                        <td>{$item['price']} руб</td>
                        <td>
                            <button type="button" onclick="preedit({$item['id']})" class="btn btn-link">
                                <span class="glyphicon glyphicon-cog"></span>
                            </button>
                        </td>
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
                    {foreach $archive as $item}
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
                        <div class="row">
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="edit_name" placeholder="Название"/>
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" id="edit_price" placeholder="Цена"/>
                            </div>
                            <div class="col-md-12">
                                <img id="edit_image" src="#" class="form-group">
                            </div>
                        </div>
                        <div id="test">
                            <div class="row">
                                {foreach $archive as $item}
                                    <div class="col-xs-6 col-md-2">
                                        <a class="thumbnail">
                                            <img class="t1" src="./uploads/{$item}" alt="...">
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
                        <div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" id="edit_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                <button type="button" onclick="saveedit()" id="save" class="btn btn-primary">Редактировать</button>
            </div>
        </div>
    </div>
</div>


<!-- Scripts -->
<script src="../admin/jquery-3.1.1.min.js"></script>
<script>
    $(document).ready(function () {
        $('#test').hide();
    });
    function submit() {
        let d = {
            n: $('#name').val(),
            p: $('#price').val(),
            c:{$type},
            i: $('#add_img').attr('src')
        };
        $.post("../admin/ajax.php?add=expmat", d, function (d) {
            location.reload();
        });
    }

    function itemdelete(id) {
        var data = "id=" + parseInt(id);
        $.post("../admin/ajax.php?delete=delexp", data, function (data) {
            $('#delete' + id).remove();
        });
    }
    $('.t1').click(function () {
        $('#edit_image').attr('src', $(this).attr('src'));
        $('#test').hide();
    });
    $('#batton').on('click', function () {
        $('#ModalGallery').modal('toggle');
    });
    $('a img').on('click', function () {
        $('#add_img').attr('src', $(this).attr('src'));
        $('#ModalGallery').modal('hide');
    });
    function preedit(id) {
        console.log(id);
        $.post("../admin/ajax.php?extmid=1", {
            i: id
        }, function (d) {
            if (d !== '') {
                let i = JSON.parse(d);
                $('#edit_name').val(i.name);
                $('#edit_price').val(i.price);
                $('#edit_image').attr('src', i.img);
                $('#myModal').modal('show');
                $('#save').attr('onclick','saveedit('+i.id+')');
            }
        });
    }

    $('#edit_image').click(function () {
        $('#test').show();
    });
    function saveedit(id) {
        let d = {
            n: $('#edit_name').val(),
            p: $('#edit_price').val(),
            i: $('#edit_image').attr('src'),
            d:id
        };
        console.log(d);
        $.post("../admin/ajax.php?editexpmat=1", d, function (d) {
            location.reload();
        });
    }
</script>

<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
