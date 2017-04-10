<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>{$name}</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="../admin/assets/css/multi-select.css">
    <script src="../admin/assets/js/dropzonejs.js"></script>
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>{$name}</h2></div>
            <div class="col-xs-6 col-md-4">
            </div>
        </div>
        <div id="form">
            <hr>
            <input type="text" class="form-control" id="name" placeholder="Название"/>
            <input type="number" class="form-control" id="price"
                   placeholder="Цена (руб)"/>
            <button id="batton" class="btn btn-default btn-lg btn-block">Выбрать картинку</button>
            <center>
                <img src="../img/material/undefined.png" width="300px" height="300px"
                     id="add_img" {*class="img-responsive" alt="Responsive image"*}>
            </center>
            <center>
                <select id='pre-selected-options' multiple='multiple'>
                    {foreach  $skeklo as $item}
                        <option value="{$item['id']}">{$item['name']}</option>
                    {/foreach}
                </select>
            </center>
            <br>
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" onclick="submit()">Добавить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit" onclick="reset()">Отменить</button>
                </div>
            </div>
        </div>
        <hr id="hr">
        <div class="table-responsive" id=''>
            <table class="table table-hover">
                <thead>
                <th>Название</th>
                <th>Картинка</th>
                <th>Цена(руб)</th>
                </thead>
                <tbody>
                {foreach $item as $i}
                    <tr id="delete{$i['id']}">
                        <td>{$i['name']}</td>
                        <td><img src="{$i['img']}" class="img-responsive" width="140px" height="140px"></td>
                        <td>{$i['price']} руб.</td>
                        <td>
                            <button type="button" onclick="itemdelete({$i['id']})"
                                    class="btn btn-link "><span
                                        class="glyphicon glyphicon-remove"></span></button>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>

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

<script src="../admin/assets/js/jquery.multi-select.js"></script>
<script>
    $('#pre-selected-options').multiSelect({
        selectableHeader: '<div>Стекло</div>',
        selectionHeader: "<div>Выбранные Стекло</div>"
    });

    function submit() {
        var data ={
            name: $('#name').val(),
            price:$('#price').val(),
            img:$('#add_img').attr('src'),
            arr:$("#pre-selected-options").val(),
            type:{$type}
        }
        $.post("../admin/ajax.php?expm",data,function (data) {
            location.reload();
        });
    }

    function itemdelete(id) {
        console.log(id);
    var data ={
        id : id
    }
        $.post("../admin/ajax.php?expmd",data,function (data) {
            location.reload();
        });
    }

    function reset() {
        location.reload();
    }
    $('#batton').on('click', function () {
        $('#ModalGallery').modal('toggle');
    });
    $('a img').on('click', function () {
        $('#add_img').attr('src', $(this).attr('src'));
        $('#ModalGallery').modal('hide');
    });
</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
