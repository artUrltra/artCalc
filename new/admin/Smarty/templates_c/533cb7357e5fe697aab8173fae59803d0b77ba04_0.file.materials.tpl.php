<?php
/* Smarty version 3.1.30, created on 2017-02-01 18:21:54
  from "/var/www/graf2176/data/www/bells.in.ua/XXX/admin/Smarty/templates/materials.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5891fd123d9639_61877880',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '533cb7357e5fe697aab8173fae59803d0b77ba04' => 
    array (
      0 => '/var/www/graf2176/data/www/bells.in.ua/XXX/admin/Smarty/templates/materials.tpl',
      1 => 1485841690,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_5891fd123d9639_61877880 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?php echo $_smarty_tpl->tpl_vars['dekotName']->value;?>
</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">

    <style>
        .form-group img {
            max-width: 100%;
        }
    </style>
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
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
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-8"><h2><?php echo $_smarty_tpl->tpl_vars['dekotName']->value;?>
</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить
                </button>
            </div>
        </div>
        <div id="form">
            <hr>
            <input type="text" class="form-control" id="name" placeholder="Название"/>
            <h4>Цены указывать через символ ';' , пример 04;20</h4>
            <input type="text" class="form-control" id="price"
                   placeholder="Цена (руб.)"/>
            <h4>Толщины указывать через символ ';' , пример 04;20</h4>
            <input type="text" class="form-control" id="thickness"
                   placeholder="Толщина (мм.)"/>
            <h4>Закалку стекла указывать через символ ';' , пример 04;20</h4>
            <input type="text" class="form-control" id="zakalka"
                   placeholder="Закалка стекла"/>
            <center>
                <textarea cols="47" rows="5" class="form-control" id="characteristics"
                          placeholder="Характеристики"></textarea>
                <textarea cols="47" rows="5" class="form-control" id="description" placeholder="Описание"></textarea>
                <textarea cols="47" rows="5" class="form-control" id="benefits" placeholder="Преимущества"></textarea>
            </center>
            <button id="batton" class="btn btn-default btn-lg btn-block">Выбрать картинку</button>
            <center>
                <img src="../img/material/undefined.png" width="300px" height="300px"
                     id="add_img" >
            </center>
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
        <hr>
        <div class="table-responsive">
            <table class="table table-hover" id="result">
                <thead>
                <th>Название Материала</th>
                <th>Картинка</th>
                <th>Цена (руб.)</th>
                <th>Толщина (мм.)</th>
                <th>Закалка стекла</th>
                </thead>
                <tbody>
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['items']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                    <tr id="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
">
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</td>
                        <td><img src="<?php echo $_smarty_tpl->tpl_vars['item']->value['img'];?>
" class="img-responsive" width="140px" height="140px"></td>
                        <td><var><?php echo $_smarty_tpl->tpl_vars['item']->value['price'];?>
 руб</var></td>
                        <td><var><?php echo $_smarty_tpl->tpl_vars['item']->value['thickness'];?>
 мм</var></td>
                        <td><var><?php echo $_smarty_tpl->tpl_vars['item']->value['zakalka'];?>
</var></td>
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
</div> <!-- /container -->

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


<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <div class="form-group"><input type="text" id="editid">
                            <h4>Название</h4>
                            <input type="text" class="form-control" id="edit_name" placeholder=""/>
                            <h4>Цена (руб.) указывать через символ ';' , пример 04;20</h4>
                            <input type="text" class="form-control" id="edit_price"
                                   placeholder=""/>
                            <h4>Толщина (мм.) указывать через символ ';' , пример 04;20</h4>
                            <input type="text" class="form-control" id="edit_thickness"
                                   placeholder=""/>
                            <h4>Закалку указывать через символ ';' , пример 04;20</h4>
                            <input type="text" class="form-control" id="edit_zakalka"
                                   placeholder=""/>
                            Характеристики:<br/><textarea cols="86" class="form-control" rows="4" id="edit_characteristics"></textarea><br/>
                            Описание:<br/><textarea cols="86"class="form-control" rows="4" id="edit_description"></textarea><br/>
                            Преимущества:<br/><textarea cols="86" class="form-control" rows="4" id="edit_benefits"></textarea><br/>
                            <img src="..." id="edit_img" class="img-responsive" alt="Responsive image">
                            <div id="test">
                                <div class="row">
                                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['archive']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                                        <div class="col-xs-6 col-md-2">
                                            <a class="thumbnail">
                                                <img class="t1" src="./uploads/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
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
                            <div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" id="edit_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                <button type="button" id="edit_submit" class="btn btn-primary">Редактировать</button>
            </div>
        </div>
    </div>
</div>
<button type="button" id="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
    Launch demo modal
</button>

<!-- Scripts -->
<?php echo '<script'; ?>
 src="../admin/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
>
    $(document).ready(function () {
        $('#form').hide();
        $('#button').hide();
        $('#test').hide();
    });
    $('#add').click(function () {
        $('#form').show();
        $('#add').hide();
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


        if($("#thickness").val()==''){
            $("#thickness").css("border-color",'#ff0000');
            index=1;
        }else {
            $("#thickness").css("border-color",'#ccc');
        }


        switch (index) {
            case 0: {
                $('#add').show();
                $('#form').hide();
                var name = "name=" + $("#name").val();
                var image = "&image=" + $('#add_img').attr('src').substr(2);
                var price = "&price=" + $('#price').val();
                var cont = "&type=" + getUrlVars()['type'];
                var thickness = "&thickness=" + $('#thickness').val();
                var zakalka = "&zakalka=" + $('#zakalka').val();
                var characteristics = '&characteristics=' + $("#characteristics").val();
                var description = '&description=' + $("#description").val();
                var benefits = '&benefits=' + $("#benefits").val();
                var data = name + image + price + cont + thickness + zakalka + characteristics + description + benefits;
                $.post('../admin/ajax.php?materials', data, function (data) {
                    location.reload();
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
            }
        }

    }
    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    function itemdelete(id) {
        var data = "id=" + parseInt(id);
        $.post("../admin/ajax.php?delete=delete10", data, function (data) {
            $('#' + id).remove();
        });
    }
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

    function reset() {
        location.reload();
    }


    $('tr').click(function () {
        var data = "id=" +  $(this).attr('id') + "&type=" + getUrlVars()['type'];
        $.post("../admin/ajax.php?getMaterials", data, function (data) {
            data = JSON.parse(data);
            $('#editid').hide();
            $('#editid').val(data[0].id);
            $('#edit_price').val(data[0].price);
            $('#edit_name').val(data[0].name);
            $('#edit_thickness').val(data[0].thickness);
            $('#edit_zakalka').val(data[0].zakalka);
            $('#edit_img').attr('src', data[0].img);
            $('#edit_characteristics').val(data[0].characteristics);
            $('#edit_description').val(data[0].description);
            $('#edit_benefits').val(data[0].benefits);
        });
        $('#button').click();
    });
    $('#edit_submit').click(function () {
        var data = 'name=' + $("#edit_name").val()+ '&img=' + $('#edit_img').attr('src') + '&id=' + $("#editid").val() + '&price=' + $("#edit_price").val()
                +'&zakalka='+$('#edit_zakalka').val()+'&characteristics='+$('#edit_characteristics').val()+'&description='+$('#edit_description').val()
                +'&benefits='+$('#edit_benefits').val()+'&thickness='+$('#edit_thickness').val();
        $.post('../admin/ajax.php?upload=Matireals', data, function (data) {
            $('#edit_exit').click();
            location.reload();
        });
    })
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
