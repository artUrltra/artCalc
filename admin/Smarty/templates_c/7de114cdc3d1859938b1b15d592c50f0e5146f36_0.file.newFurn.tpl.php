<?php
/* Smarty version 3.1.30, created on 2017-03-15 15:05:42
  from "C:\wamp64\www\Calc\admin\Smarty\templates\newFurn.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58c95846c49343_99457054',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7de114cdc3d1859938b1b15d592c50f0e5146f36' => 
    array (
      0 => 'C:\\wamp64\\www\\Calc\\admin\\Smarty\\templates\\newFurn.tpl',
      1 => 1489480983,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58c95846c49343_99457054 (Smarty_Internal_Template $_smarty_tpl) {
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

    <title>Управления декором</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../admin/assets/css/multi-select.css">

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
            <div class="col-xs-6 col-sm-6 col-md-6"><h2><?php echo $_smarty_tpl->tpl_vars['name']->value;?>
</h2></div>
            <div class="col-xs-6 col-sm-6 col-md-6"><a class="btn btn-success btn-lg btn-block" id="submit"
                                                       href="./index.php?page=castomfurnitura" ">Управеднения
                фурнитурой</a></div>
        </div>
        <div id="form">
            <hr>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['option']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                <?php if ($_smarty_tpl->tpl_vars['i']->value == 'Картинка') {?>
                    <input type="image" class="form-control" id="img" src="../img/material/undefined.png" placeholder="<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" value="../img/material/undefined.png" onclick="image('img')" style="height: 350px; width: 350px"/>
                    <br>
                <?php } elseif ($_smarty_tpl->tpl_vars['i']->value == 'Большая Картинка') {?>
                    <input type="image" class="form-control" id="big" src="../img/material/undefined.png" value="../img/material/undefined.png" onclick="image('big')" style="height: 350px; width: 350px"/>
                    <br>
                <?php } elseif ($_smarty_tpl->tpl_vars['i']->value == 'Диапазон') {?>
                    <input type="text" class="form-control" id="name" placeholder="Диапазон (пример :10/12)"/>
                    <br>
                <?php } elseif ($_smarty_tpl->tpl_vars['i']->value == 'Ограничение по высоте полотна') {?>
                    <input type="text" class="form-control" id="name" placeholder="Ограничение по высоте полотна (min/max : 100/140) мм."/>
                    <br>
                <?php } elseif ($_smarty_tpl->tpl_vars['i']->value == 'Ограничение по ширине полотна') {?>
                    <input type="text" class="form-control" id="name" placeholder="Ограничение по ширине полотна (min/max : 100/140) мм."/>
                    <br>
                <?php } else { ?>
                    <input type="text" class="form-control" id="name" placeholder="<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
"/>
                    <br>
                <?php }?>
            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" onclick="send()">Добавить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit" onclick="reset()">Отменить</button>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
        <hr id="hr">
        <table class="table table-striped">
            <thead>

            <tr>
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['option']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                    <td><?php echo $_smarty_tpl->tpl_vars['i']->value;?>
</td>
                <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

            </tr>
            </thead>
            <tbody>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['items']->value, 'i', false, 'key');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['i']->value) {
?>
                <tr id="del<?php echo $_smarty_tpl->tpl_vars['key']->value;?>
">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['i']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                        <?php if (strripos($_smarty_tpl->tpl_vars['item']->value,'.') == true) {?>
                            <td><img src="<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
" class="img-responsive" width="140px" height="140px"></td>
                        <?php } else { ?>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value;?>
</td>
                        <?php }?>
                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    <td>
                        <button type="button" onclick="edit(<?php echo $_smarty_tpl->tpl_vars['key']->value;?>
)" class="btn btn-link" data-toggle="modal"
                                data-target="#myModal"><span class="glyphicon glyphicon-cog"></span></button>
                    </td>
                    <td>
                        <button type="button" onclick="del(<?php echo $_smarty_tpl->tpl_vars['key']->value;?>
)" class="btn btn-link "><span
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
" alt="..." onclick="imagesave('./uploads/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
')">
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
<!-- Scripts -->
<?php echo '<script'; ?>
 src="../admin/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="../admin/assets/js/jquery.multi-select.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
>
    function send() {
        var arr = '';
        $('.form-control').each(function () {
            arr += $(this).attr('placeholder') + '=' + $(this).val() + '&';
        });
        $.post('../admin/ajax.php?newF=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
', arr, function (data) {
            location.reload();
        });
    }
    function del(id) {
        if (confirm("Вы хоти удалить данный элемент")) {
            $.get('../admin/ajax.php?delfurn1=' + id + '&id=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
', function (data) {
                console.log(data);
            });
            $('#del' + id).html('');
        }
    }
    function image(srt) {
        switch (srt){
            case 'img':{
                $('#ModalGallery').modal();
                break;
            }
        }
    }
    function imagesave(srt) {
      $('#img').val(srt);
      $('#img').attr('src',srt);
        $('#ModalGallery').modal('toggle');
    }
    function edit(id) {
        document.location.href='./index.php?page=editfurn&id='+id+'&nid=<?php echo $_smarty_tpl->tpl_vars['id']->value;?>
';
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
