<?php
/* Smarty version 3.1.30, created on 2017-03-25 19:54:06
  from "/var/www/artul201/data/www/audoors.ru/design/admin/Smarty/templates/calcManagers.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58d6a0ae61d434_58373295',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '47e1be7f1f3bdad1522d54e7e98846a31fbcaf8a' => 
    array (
      0 => '/var/www/artul201/data/www/audoors.ru/design/admin/Smarty/templates/calcManagers.tpl',
      1 => 1490214878,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58d6a0ae61d434_58373295 (Smarty_Internal_Template $_smarty_tpl) {
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

    <title>Менеджеры калькулятора</title>
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Менеджеры калькулятора</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить</button>
            </div>
        </div>
        <hr id="hr">
        <table class="table table-striped">
            <thead>
            <tr>
                <td>Имя</td>
                <td>Почта</td>
                <td>Телефон</td>
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
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['mail'];?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['phone'];?>
</td>
                    <td>
                        <button id="edit" type="button" onclick="predit(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
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
                    <input type="hidden" id="edit_id"/>
                    Имя: <input type="text" class="form-control" id="edit_name"/>
                    Почта: <input type="text" class="form-control" id="edit_mail"/>
                    Телефон: <input type="text" class="form-control" id="edit_phone"/>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" id="edit_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                <button type="button" onclick="edit()" id="edit_submit" class="btn btn-primary">Редактировать</button>
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
        var name = "name=" + $("#name").val();
        var mail = "mail=" + $("#mail").val();
        var phone = "phone=" + $("#phone").val();
        var sum = name + "&" + mail + "&" + phone;
        $.ajax({
            url: "../admin/ajax.php?add=addcalcmanager",
            type: "POST",
            data: sum,
            success: function (data) {
                location.reload();
            }
        });
    }
    function edit() {
        var id = "id=" + $("#edit_id").val();
        var name = "name=" + $("#edit_name").val();
        var mail = "mail=" + $("#edit_mail").val();
        var phone = "phone=" + $("#edit_phone").val();
        var sum = id + "&" + name + "&" + mail + "&" + phone;
        $.post('../admin/ajax.php?add=editcalcmanager', sum, function (data) {
            location.reload();
        });
    }
    function predit(id) {
        $.post("../admin/ajax.php?add=preditcalcmanager", "id=" + id, function (data) {
            var obj = JSON.parse(data);
            $('#edit_id').val(obj[0].id);
            $('#edit_name').val(obj[0].name);
            $('#edit_mail').val(obj[0].mail);
            $('#edit_phone').val(obj[0].phone);
        });
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=deletecalcmanager",
            data: "id=" + id
        });
        $('#delete' + id).remove();
    }
    $("#add").click(function () {
        $('<input type="text"  class="form-control" id="name" size="50" placeholder="Имя" />').insertAfter('#hr');
        $('<input type="text"  class="form-control" id="mail" size="50" placeholder="Почта" />').insertAfter('#name');
        $('<input type="text"  class="form-control" id="phone" size="50" placeholder="Телефон" />').insertAfter('#mail');
        $('<button class="btn btn-success btn-lg" id="submit" onclick="submit()">Добавить<button/>').insertAfter('#phone');
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
</html>
<?php }
}
