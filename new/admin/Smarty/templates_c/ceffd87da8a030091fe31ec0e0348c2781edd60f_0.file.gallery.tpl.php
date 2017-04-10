<?php
/* Smarty version 3.1.30, created on 2017-03-02 13:53:00
  from "C:\wamp64\www\Calc\admin\Smarty\templates\gallery.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58b823bc29f6e2_95361621',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ceffd87da8a030091fe31ec0e0348c2781edd60f' => 
    array (
      0 => 'C:\\wamp64\\www\\Calc\\admin\\Smarty\\templates\\gallery.tpl',
      1 => 1487800980,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58b823bc29f6e2_95361621 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Галерея</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <style>
        .thumbnail {
            max-width: 100%;
            height: 100px;
        }

        .thumbnail > img {
            max-height: 100%;
            min-height: 100%;
        }
    </style>
    <?php echo '<script'; ?>
 src="../admin/assets/js/dropzonejs.js"><?php echo '</script'; ?>
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
        <form action="parser.php" id="form_img" class="dropzone"></form>
        <button id="batton" class="btn btn-default btn-lg btn-block">Добавить</button>
        <hr>
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

    </div> <!-- /container -->


    <!-- Large modal -->
    <div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog"
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
                        <div class="col-md-6">
                            <img src="./uploads/" id="modal-img" class="img-responsive" alt="...">
                        </div>
                        <div class="col-md-6">
                            <address>
                                <strong>Информация об картинке</strong><br>
                                <p id="modalsize">Размер :</p>
                                <p id="modalURL">URL :</p>
                            </address>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
                        <button type="button" id="modaldelete" data-delete="#" class="btn btn-danger">Удалить</button>
                        <button type="button" class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scripts -->
        <?php echo '<script'; ?>
 src="../admin/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
 src="../admin/assets/js/bootstrap.min.js"><?php echo '</script'; ?>
>
        <?php echo '<script'; ?>
>
            $('img').on('click', function () {
                $('#modal-img').attr('src', $(this).attr('src'));
                $('#myModal').modal('toggle');
                var myImage = new Image();
                myImage.src = $(this).attr('src');
                $('#modalsize').text('Размер :' + myImage.width + 'x' + myImage.height);
                $('#modalURL').text('URL :' + myImage.src);
                $('#modaldelete').attr('data-delete', $(this).attr('src'));
            });
            $('#modaldelete').on('click', function () {
                $.post('../admin/index.php?delete1=' + $(this).attr('data-delete'), function (data) {
                    alert(data);
                    location.reload();
                });
            });
            $('#batton').on('click', function () {
                location.reload();
            });
        <?php echo '</script'; ?>
>
</body><?php }
}
