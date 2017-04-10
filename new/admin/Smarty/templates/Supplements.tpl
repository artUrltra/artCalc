<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Дополнения</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="../admin/assets/css/multi-select.css">
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Дополнения</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить</button>
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
                    {foreach  $profils as $item name=profils}
                        <option value="{$item['id']}">{$item['name']}</option>
                    {/foreach}
                </select>
            </center>
            {*<button id="create-user" class="btn btn-primary btn-lg btn-block">Выбрать профиль</button>*}
            <br>
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" data-loading-text="Загрузка..." onclick="submit()">Добавить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit1"data-loading-text="Отменить" onclick="reset()">Отменить</button>
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
                {foreach $items as $item name=items}
                    <tr id="{$item['id']}" data-toggle="modal" data-target="#myModal">
                        <td>{$item['name']}</td>
                        <td><img src="{$item['img']}" class="img-responsive" width="140px" height="140px"></td>
                        <td>{$item['price']} руб.</td>
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

<div id="dialog-form" title="Выберите профили">
    <form id="profilform">
        {foreach  $profils as $item name=profils}
            <input type="checkbox" name="profil{$item["id"]}" value="{$item['id']}">
            <label>{$item['name']}</label>
        {/foreach}
    </form>

</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <form>
                    <input type="text" class="form-control" id="edit_name" placeholder="Название"/>
                    <input type="text" class="form-control" id="edit_price" placeholder="Цена"/>
                    <img src="..." id="edit_img" class="img-responsive" alt="Responsive image">
                    <div id="test">
                        <div class="row">
                            {foreach $archive as $item name=items}
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
                    <center>
                        <select id='edit-selected-options' multiple='multiple'>
                            {foreach  $profils as $item name=profils}
                                <option value="{$item['id']}">{$item['name']}</option>
                            {/foreach}
                        </select>
                    </center>
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
<script src="../admin/assets/js/bootstrap.min.js"></script>
<script src="../admin/assets/js/jquery.multi-select.js"></script>
<script>
    $('#pre-selected-options').multiSelect({
        selectableHeader: '<div>Профиля</div>',
        selectionHeader: "<div>Выбранные Профиля</div>"
    });
    $('#edit-selected-options').multiSelect({
        selectableHeader: '<div>Профиля</div>',
        selectionHeader: "<div>Выбранные Профиля</div>"
    });
    $(document).ready(function () {
        $('#button').hide();
        $('#form').hide();
        $('#test').hide();

    });
    $.post('../admin/ajax.php', "getProfilAndSupplements=1", function (data) {
        window.ProfilAndSupplements = data
    });

    function submit() {
        var index = 0;
        if ($("#name").val() == '') {
            $("#name").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#name").css("border-color", '#ccc');
        }
        if ($("#price").val() == '') {
            $("#price").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#price").css("border-color", '#ccc');
        }


        switch (index) {
            case 0: {
                var data = {
                    name: $("#name").val(),
                    price: $("#price").val(),
                    img: $('#add_img').attr('src').substr(2),
                    form: $("#pre-selected-options").val(),
                    parent_id:{$id}
                };
                $('#submit').button('loading');
                $('#submit1').button('loading');

                $.ajax({
                    url: "../admin/ajax.php?add=add14",
                    type: "POST",
                    data: data,
                    success: function (data) {
                        alert(data);
                        location.reload();
                    }
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
            }
        }
    }

    $('tr').click(function () {
        $('#edit-selected-options').multiSelect('deselect_all');
        var id = 'id=' + $(this).attr('id');
        window.setid = $(this).attr('id');
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?select=12",
            data: id,
            success: function (data) {
                var data = JSON.parse(data);
                $("#edit_name").val(data[0].name);
                $("#edit_price").val(data[0].price);
                $('#edit_img').attr('src', data[0].img);
            }
        });
        var Profil = JSON.parse(ProfilAndSupplements);
        for (var i = 0; i < Profil.length; i++) {
            if (Profil[i].Supplements == $(this).attr('id')) {
                $('#edit-selected-options').multiSelect('select', Profil[i].Profil.toString());
            }
        }
        $('#edit_submit').click(function () {
            $.post('../admin/ajax.php?upload=Hoho1', {
                name: $("#edit_name").val(),
                price: $("#edit_price").val(),
                img: $('#edit_img').attr('src'),
                id: setid,
                form: $('#edit-selected-options').val()

            }, function (data) {
                $("#edit_exit").click();
                location.reload();
            });

        });
    });
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
    $(function () {
        dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 600,
            width: 600,
            modal: true,
            buttons: {
                "Выбрать все": function () {
                   $('#profilform input').each(function(i,elem) {
                        $(elem).attr("checked","checked");
                    });     
                },
                "Сохранить": function () {
                    dialog.dialog("close");
                },
                "Закрить": function () {
                    dialog.dialog("close");
                }
            }
        });

        $("#create-user").button().on("click", function () {
            dialog.dialog("open");
        });
    });
    function itemdelete(id) {

        var sum = "id=" + id;

        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=delete13",
            data: sum,
            success: function (data) {
            }
        });

        $('#' + id).remove();

    }
    $('#add').click(function () {
        $('#form').show();
        $('#add').hide();
    });
    function reset() {
        location.reload();
    }
</script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
