<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Вид крепления</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <script src="../admin/assets/js/dropzonejs.js"></script>
    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
</head>

<body>

{include file='menu.tpl'}


<div class="container">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Вид крепления</h2></div>

        </div>
        <div id="form">
            <hr>
            <input type="text" class="form-control" id="name" placeholder="Название"/>
            <input type="number" class="form-control" id="price"
                   placeholder="Цена(руб.)"/>
            <form action="parser.php" id="form_img" class="dropzone"></form>
            <button id="create-user" class="btn btn-primary btn-lg btn-block">Выбрать профиль</button>
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
        <hr id="hr">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <th>Название</th>
                <th>Картинка</th>
                <th>Цена(руб)</th>
                </thead>
                <tbody>
                {foreach $items as $item name=items}
                    <tr id="delete{$item['id']}">
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


<div id="dialog-form" title="Выберите профили">
    <form id="profilform">
        {foreach  $profils as $item name=profils}
            <input type="checkbox" name="profil{$item["id"]}" value="{$item['id']}">
            <label>{$item['name']}</label>
        {/foreach}
    </form>

</div>


<!-- Scripts -->
<script>
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
        if ($('#img_name').html() == undefined) {
            $("#form_img").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#form_img").css("border-color", '#ccc');
        }
        if ($("#profilform").serialize() == '') {
            $("#create-user").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#create-user").css("border-color", '#ccc');
        }
        switch (index) {
            case 0: {
                var form = $("#profilform").serialize();
                var name = "name=" + $("#name").val();
                var price = "&price=" + $("#price").val();
                var image = "&image=" + 'uploads/' + $('#img_name').html();
                var sum = name + price + image + "&" + form;
                $.post("../admin/ajax.php?add=add8", sum, function (data) {
                    location.reload();
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
            }
        }
    }

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

        $.post("../admin/ajax.php?delete=delete6", sum, function (data) {
            $('#delete' + id).remove();
        });
    }
    function reset() {
        location.reload();
    }

</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>