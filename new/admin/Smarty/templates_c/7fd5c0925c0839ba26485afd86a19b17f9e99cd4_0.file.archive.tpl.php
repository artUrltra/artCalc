<?php
/* Smarty version 3.1.30, created on 2017-02-15 12:43:06
  from "/var/www/graf2176/data/www/bells.in.ua/XXX/admin/Smarty/templates/archive.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58a422aaca7b10_59118782',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '7fd5c0925c0839ba26485afd86a19b17f9e99cd4' => 
    array (
      0 => '/var/www/graf2176/data/www/bells.in.ua/XXX/admin/Smarty/templates/archive.tpl',
      1 => 1485841690,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58a422aaca7b10_59118782 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Архивы</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <?php echo '<script'; ?>
 src="../admin/assets/js/dropzonejs1.js"><?php echo '</script'; ?>
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Архивы</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="save_archive">Создать Архыв
                </button>
            </div>
        </div>
        <form action="parserZip.php" id="form_img" class="dropzone"></form>
        <button id="batton" class="btn btn-default btn-lg btn-block">Добавить</button>
        <hr>
        <div class="row">
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['archive']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="https://alssl.askleomedia.com/wp-content/uploads/2014/09/zip-300x343.png" alt="...">
                        <div class="caption">
                            <h3><?php echo $_smarty_tpl->tpl_vars['item']->value;?>
</h3>
                            <p><a href="./zip/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
" class="btn btn-primary" role="button" download><span
                                            class="glyphicon glyphicon-download" aria-hidden="true"></span>Скачать</a><a
                                        data-set="<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
" href="#" class="btn btn-success" role="button"><span
                                            class="glyphicon glyphicon-ок"></span>Выбрать</a><a data-delete="<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
"
                                                                                                href="#"
                                                                                                class="btn btn-danger"
                                                                                                role="button"><span
                                            class="glyphicon glyphicon-trash"></span></a></p>
                        </div>
                    </div>
                </div>
            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

        </div>
    </div>

</div> <!-- /container -->
<div class="modal fade bs-example-modal-sm" tabindex="-1" id="myModal" role="dialog"
     aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <h3 id="modal-text"></h3>
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
            $('#save_archive').on('click', function () {
                $.post('../admin/zip.php', function (data) {
                    $('#modal-text').text(data);
                    $('#myModal').modal('toggle');
                    location.reload();
                })
            });
            $('a.btn-danger').on('click', function () {
                $.post('../admin/index.php?delete=' + $(this).attr('data-delete'), function (data) {
                    location.reload();
                });
            });
            $('a.btn-success').on('click', function () {
                $.post('../admin/setArchive.php?set=' + $(this).attr('data-set'), function (data) {
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
