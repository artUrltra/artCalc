<?php
/* Smarty version 3.1.30, created on 2017-03-12 18:08:58
  from "C:\wamp64\www\Calc\admin\Smarty\templates\expmatireals.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58c58eba1c63e5_21540291',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '690834a013fd1f9aac5cf7dfecd95b3065d99069' => 
    array (
      0 => 'C:\\wamp64\\www\\Calc\\admin\\Smarty\\templates\\expmatireals.tpl',
      1 => 1489146728,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58c58eba1c63e5_21540291 (Smarty_Internal_Template $_smarty_tpl) {
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

    <title><?php echo $_smarty_tpl->tpl_vars['name']->value;?>
</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="../admin/assets/css/multi-select.css">
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2><?php echo $_smarty_tpl->tpl_vars['name']->value;?>
</h2></div>
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
                     id="add_img" >
            </center>
            <center>
                <select id='pre-selected-options' multiple='multiple'>
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['skeklo']->value, 'item');
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
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['item']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                    <tr id="delete<?php echo $_smarty_tpl->tpl_vars['i']->value['id'];?>
">
                        <td><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</td>
                        <td><img src="<?php echo $_smarty_tpl->tpl_vars['i']->value['img'];?>
" class="img-responsive" width="140px" height="140px"></td>
                        <td><?php echo $_smarty_tpl->tpl_vars['i']->value['price'];?>
 руб.</td>
                        <td>
                            <button type="button" onclick="itemdelete(<?php echo $_smarty_tpl->tpl_vars['i']->value['id'];?>
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
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['archive']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                        <div class="col-xs-6 col-md-2">
                            <a class="thumbnail">
                                <img src="./uploads/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
" alt="...">
                            </a>
                            <div class="caption">
                                <center>
                                    <h6><?php echo $_smarty_tpl->tpl_vars['item']->value;?>
</h6>
                                </center>
                            </div>
                        </div>
                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                </div>
            </div>
        </div>
    </div>
</div>

<?php echo '<script'; ?>
 src="../admin/assets/js/jquery.multi-select.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
>
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
            type:<?php echo $_smarty_tpl->tpl_vars['type']->value;?>

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
