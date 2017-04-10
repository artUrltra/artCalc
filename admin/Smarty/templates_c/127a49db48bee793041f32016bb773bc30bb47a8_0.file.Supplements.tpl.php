<?php
/* Smarty version 3.1.30, created on 2016-12-28 18:45:18
  from "C:\OpenServer\domains\ArtCalc.loc\admin\Smarty\templates\Supplements.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5863de0e930ab2_79932826',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '127a49db48bee793041f32016bb773bc30bb47a8' => 
    array (
      0 => 'C:\\OpenServer\\domains\\ArtCalc.loc\\admin\\Smarty\\templates\\Supplements.tpl',
      1 => 1482939516,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_5863de0e930ab2_79932826 (Smarty_Internal_Template $_smarty_tpl) {
?>
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
    <?php echo '<script'; ?>
 src="../admin/assets/js/dropzonejs.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="../admin/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="../admin/assets/js/ie-emulation-modes-warning.js"><?php echo '</script'; ?>
>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"><?php echo '</script'; ?>
>
    <![endif]-->
</head>

<body>

<?php $_smarty_tpl->_subTemplateRender("file:menu.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>



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
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['items']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                    <tr id="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
" data-toggle="modal" data-target="#myModal">
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</td>
                        <td><img src="<?php echo $_smarty_tpl->tpl_vars['item']->value['img'];?>
" class="img-responsive" width="140px" height="140px"></td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['price'];?>
 руб.</td>
                        <td>
                            <button type="button" onclick="itemdelete(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
)"
                                    class="btn btn-link "><span
                                        class="glyphicon glyphicon-remove"></span></button>
                        </td>
                    </tr>
                <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                </tbody>
            </table>
        </div>
    </div>
</div>

<div id="dialog-form" title="Выберите профили">
    <form id="profilform">
        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['profils']->value, 'item', false, NULL, 'profils', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
            <input type="checkbox" name="profil<?php echo $_smarty_tpl->tpl_vars['item']->value["id"];?>
" value="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
">
            <label><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</label>
        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

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
                    <select multiple id="multiple" class="form-control">

                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['profils']->value, 'item', false, NULL, 'profils', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                        <option value="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</option>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
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
<?php echo '<script'; ?>
>
    $(document).ready(function () {
        $('#button').hide();
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
                var name = "&name=" + $("#name").val();
                var price = "&price=" + $("#price").val();
                var image = "&img=" + 'uploads/' + $('#img_name').html();
                var data = form + name + price + image + '&parent_id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
';

                console.log(data);
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
        var id = 'id=' + $(this).attr('id');
        window.setid = $(this).attr('id');
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?select=12",
            data: id,
            success: function (data) {
                console.log(data);
                var data = JSON.parse(data);
                $("#edit_name").val(data[0].name);
                $("#edit_price").val(data[0].price);
                $('#edit_img').attr('src', data[0].img);
            }
        });
        $('#edit_submit').click(function () {
            $.post('../admin/ajax.php?upload=Hoho1', {
                name: $("#edit_name").val(),
                price: $("#edit_price").val(),
                img: $('#edit_img').attr('src'),
                id: setid
            }, function (data) {
                console.log(data);
                $("#edit_exit").click();
                location.reload();
            });

        });
    });
    $(function () {
        dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 600,
            width: 600,
            modal: true,
            buttons: {
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
<?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="../admin/assets/js/bootstrap.min.js"><?php echo '</script'; ?>
>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<?php echo '<script'; ?>
 src="../admin/assets/js/ie10-viewport-bug-workaround.js"><?php echo '</script'; ?>
>
</body>
</html>
<?php }
}
