<?php
/* Smarty version 3.1.30, created on 2017-03-25 17:28:03
  from "/var/www/artul201/data/www/audoors.ru/design/admin/Smarty/templates/manager.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58d67e7336bb44_74020474',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'bf991fdd2a35aa8edb9b9eea6410fc363093c14d' => 
    array (
      0 => '/var/www/artul201/data/www/audoors.ru/design/admin/Smarty/templates/manager.tpl',
      1 => 1490214878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58d67e7336bb44_74020474 (Smarty_Internal_Template $_smarty_tpl) {
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

    <title>Управления пользователями</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">

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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Управления пользователями</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить</button>
            </div>
        </div>
        <hr id="hr">
        <table class="table table-striped">
            <thead>
            <tr>
                <td>Логин</td>
                <td>Пароль</td>
                <td></td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['items']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                <tr id="delete<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
">
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['Name'];?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['Pass'];?>
</td>
                    <td>
                        <button id="edit" type="button" onclick="edit(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
)" class="btn btn-warning"
                                data-toggle="modal" data-target="#myModal">Редактировать
                        </button>
                    </td>
                    <td><a onclick="itemdelete(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
)" class="btn btn-danger">Удалить</a></td>
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
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <form>
                    <input type="text" class="form-control" id="edit_name" placeholder="Логин"/>
                    <input type="text" class="form-control" id="edit_pass" placeholder="Пароль"/>
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
 src="../admin/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
>
    function submit () {
        var name = "name=" + $("#logan").val();
        var price = "pass=" + $("#pass").val();
        var sum = name + "&" + price;
        $.ajax({
            url: "../admin/ajax.php?add=add4",
            type: "POST",
            data: sum,
            success: function (data) {
                alert(data);
                location.reload();
            }
        });
    }

    function edit(id) {
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?select=4",
            data: "id=" + id,
            success: function (data) {
                data = JSON.parse(data);
                $("#edit_name").val(data[0].Name);
                $("#edit_pass").val(data[0].Pass);
            }
        });
        $('#edit_submit').click(function () {


            $("#edit_exit").click();


            var name = "name=" + $("#edit_name").val();
            var pass = "pass=" + $("#edit_pass").val();
            var sum = name + "&" + pass;
            $.ajax({
                url: "../admin/ajax.php?add=add4",
                type: "POST",
                data: sum,
                success: function (data) {
                    itemdelete(id);
                    location.reload();
                }
            });
        });
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=delete3",
            data: "id=" + id
        });
        $('#delete' + id).remove();
    }
    $("#add").click(function () {
        $('<input type="text"  class="form-control" id="logan" size="50" placeholder="Логин" />').insertAfter('#hr');
        $('<input type="text"  class="form-control" id="pass" size="50" placeholder="Пароль" />').insertAfter('#logan');
        $('<button class="btn btn-success btn-lg" id="submit" onclick="submit()">Добавить<button/>').insertAfter('#pass');
        $('<hr>').insertAfter('#submit');
        $("#add").remove();
    })
<?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src = "../admin/assets/js/bootstrap.min.js" > <?php echo '</script'; ?>
>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<?php echo '<script'; ?>
 src="../admin/assets/js/ie10-viewport-bug-workaround.js"><?php echo '</script'; ?>
>
</body>
</html><?php }
}
