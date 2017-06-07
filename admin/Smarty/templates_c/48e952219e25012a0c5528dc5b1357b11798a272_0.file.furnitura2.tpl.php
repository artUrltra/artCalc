<?php
/* Smarty version 3.1.30, created on 2017-05-30 16:14:52
  from "C:\xampp\htdocs\admin\Smarty\templates\furnitura2.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_592d7e5c3749e0_69555974',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '48e952219e25012a0c5528dc5b1357b11798a272' => 
    array (
      0 => 'C:\\xampp\\htdocs\\admin\\Smarty\\templates\\furnitura2.tpl',
      1 => 1493381139,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_592d7e5c3749e0_69555974 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Фурнитура :: Элементы</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">

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
    <?php echo '<script'; ?>
 src="../admin/jquery-3.1.1.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
 src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"><?php echo '</script'; ?>
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Фурнитура :: Элементы</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить</button>
            </div>
        </div>
        <div id="form">
            <hr>
            <select id="cview" onchange="$('.ctype').hide();$('#ctype'+$('#cview').val()).show();">
                <option value="1">Раздвижная перегородка</option>
                <option value="2">Складная перегородка</option>
                <option value="3">Распашная дверь</option>
                <option value="4">Мобильная перегородка</option>
                <option value="0">Стационарная перегородка</option>
            </select>
            <select id="ctype1" class="ctype">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['cats']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
if ($_smarty_tpl->tpl_vars['i']->value['cview'] == 1) {?>
                    <option value="<?php echo $_smarty_tpl->tpl_vars['i']->value['cid'];?>
"><?php echo $_smarty_tpl->tpl_vars['i']->value['cname'];?>
</option><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

            </select>
            <select id="ctype2" class="ctype" style="display:none;">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['cats']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
if ($_smarty_tpl->tpl_vars['i']->value['cview'] == 2) {?>
                    <option value="<?php echo $_smarty_tpl->tpl_vars['i']->value['cid'];?>
"><?php echo $_smarty_tpl->tpl_vars['i']->value['cname'];?>
</option><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

            </select>
            <select id="ctype3" class="ctype" style="display:none;">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['cats']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
if ($_smarty_tpl->tpl_vars['i']->value['cview'] == 3) {?>
                    <option value="<?php echo $_smarty_tpl->tpl_vars['i']->value['cid'];?>
"><?php echo $_smarty_tpl->tpl_vars['i']->value['cname'];?>
</option><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

            </select>
            <select id="ctype4" class="ctype" style="display:none;">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['cats']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
if ($_smarty_tpl->tpl_vars['i']->value['cview'] == 4) {?>
                    <option value="<?php echo $_smarty_tpl->tpl_vars['i']->value['cid'];?>
"><?php echo $_smarty_tpl->tpl_vars['i']->value['cname'];?>
</option><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

            </select>
            <select id="ctype0" class="ctype" style="display:none;">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['cats']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
if ($_smarty_tpl->tpl_vars['i']->value['cview'] == 0) {?>
                    <option value="<?php echo $_smarty_tpl->tpl_vars['i']->value['cid'];?>
"><?php echo $_smarty_tpl->tpl_vars['i']->value['cname'];?>
</option><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

            </select>
            <br/>
            <div class="row">
                <div class="col-md-3"><input type="text" class="form-control" id="name" placeholder="Название"/></div>
                <div class="col-md-3"><input type="text" class="form-control" id="price" placeholder="Цена"/></div>
                <div class="col-md-6"><select id="formula" class="form-control">
                        <option>Выберите Формулу</option>
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['formuls']->value, 'item', false, NULL, 'formuls', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                            <option><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</option>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>


                    </select></div>
                <div class="col-md-12"><select id="proizvod" class="form-control">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['manufacture']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                            <option value="">Производитель</option>
                            <option value="<?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <button id="batton" class="btn btn-default btn-lg btn-block">Выбрать картинку</button>
                    <center>
                        <img src="../img/material/undefined.png" width="300px" height="300px"
                             id="add_img" >
                    </center>
                </div>
                <div class="col-md-6">
                    <button id="batton1" class="btn btn-default btn-lg btn-block">Выбрать Большая картинку</button>
                    <center>
                        <img src="../img/material/undefined.png" width="300px" height="300px"
                             id="add_img1" >
                    </center>
                </div>
            </div>
            <button id="create-user" class="btn btn-primary btn-lg btn-block">Выбрать профиль</button>
            <center>
                <textarea cols="47" rows="5" id="characteristics" placeholder="Характеристики"></textarea>
                <textarea cols="47" rows="5" id="description" placeholder="Описание"></textarea>
                <textarea cols="47" rows="5" id="benefits" placeholder="Преимущества"></textarea>
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
        <hr>
        <div class="table-responsive">
            <table class="table table-hover" id="result">
                <thead>
                <th>Перегородка</th>
                <th>Элемент</th>
                <th>Название</th>
                <th>Картинка</th>
                <th>Большая картинка</th>
                <th>Цена</th>
                <th>Формула</th>
                <th>Производитель</th>
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
                        <td><?php if ($_smarty_tpl->tpl_vars['item']->value['cview'] == 1) {?>Раздвижная<?php } elseif ($_smarty_tpl->tpl_vars['item']->value['cview'] == 2) {?>Складная<?php } elseif ($_smarty_tpl->tpl_vars['item']->value['cview'] == 3) {?>Распашная дверь<?php } elseif ($_smarty_tpl->tpl_vars['item']->value['cview'] == 4) {?>Мобильная перегородка<?php } elseif ($_smarty_tpl->tpl_vars['item']->value['cview'] == 0) {?>Стационарная перегородка<?php }?></td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['cname'];?>
</td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</td>
                        <td><img src="<?php echo $_smarty_tpl->tpl_vars['item']->value['img'];?>
" class="img-responsive" width="140px" height="140px"></td>
                        <td><img src="<?php echo $_smarty_tpl->tpl_vars['item']->value['imgBig'];?>
" class="img-responsive" width="140px" height="140px"></td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['price'];?>
</td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['formula'];?>
</td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['manufacturer'];?>
</td>
                        <td>
                            <button type="button" onclick="predit(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
)" class="btn btn-link"
                                    data-toggle="modal" data-target="#myModal"><span
                                        class="glyphicon glyphicon-cog"></span></button>
                        </td>
                        <td>
                            <button type="button" onclick="itemdelete(<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
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
</div> <!-- /container -->

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
                                <img class="m1" src="./uploads/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
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

<div class="modal fade bs-example-modal-lg" id="ModalGallery1" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">Большая картинка</h4>
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
                                <img class="m2" src="./uploads/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
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
                        <input type="hidden" id="edit_id" value=""/>
                        <input type="hidden" id="edit_cat" value=""/>
                        <input type="hidden" id="edit_himg" value=""/>
                        <input type="hidden" id="edit_himgBig" value=""/>
                        Название:<br/><input type="text" class="form-control" id="edit_name" value=""/>
                        Цена:<br/><input type="text" class="form-control" id="edit_price" value=""/>
                        Формула:<br/><select id="edit_formula" class="form-control">
                            <option>Выберите Формулу</option>
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['formuls']->value, 'item', false, NULL, 'formuls', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                                <option><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</option>
                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>


                        </select>
                        Производитель:
                        <select id="edit_proizvod" class="form-control">
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['manufacture']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                                <option value="Не выбран">Не выбран</option>
                                <option value="<?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
"><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                        </select>
                        Характеристики:<br/><textarea cols="86" rows="4" class="form-control"  id="edit_characteristics"></textarea><br/>
                        Описание:<br/><textarea cols="86" rows="4" class="form-control"  id="edit_description"></textarea><br/>
                        Преимущества:<br/><textarea cols="86" rows="4" class="form-control"  id="edit_benefits"></textarea><br/>
                        <div>
                </form>
                <div class="row">
                    <div class="col-md-6">
                        <center>
                            <img  src="../img/material/undefined.png" width="300px" height="300px"
                                  id="edit_img" >
                        </center>
                    </div>
                    <div class="col-md-6">
                        <center>
                            <img src="../img/material/undefined.png" width="300px" height="300px"
                                 id="edit_img1" >
                        </center>
                    </div>
                </div>
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
                <div id="test1">
                    <div class="row">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['archive']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                            <div class="col-xs-6 col-md-2">
                                <a class="thumbnail">
                                    <img class="t3" src="./uploads/<?php echo $_smarty_tpl->tpl_vars['item']->value;?>
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
            <div class="modal-footer">
                <button type="button" id="edit_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                <button type="button" onclick="edit()" id="edit_submit" class="btn btn-primary">Редактировать</button>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
<?php echo '<script'; ?>
>
    $(document).ready(function () {
        $('#form').hide();
        $('#test').hide();
        $('#test1').hide();
        $.post('../admin/formula.php', 'formulaV=1');
    });

    function submit() {
        var index = 0;
        if ($("#formula").val() == 'Выберите Формулу') {
            $("#formula").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#formula").css("border-color", '#ccc');
        }
        switch (index) {
            case 0: {
                $('#add').show();
                $('#form').hide();
                form = $("#profilform").serialize();
                cat = "&cat=" + $('#ctype' + $('#cview').val()).val();
                name = "&name=" + $('#name').val();
                img = "&img=" + $('#add_img').attr('src').substr(2);
                imgBig = "&imgBig=" + $('#add_img1').attr('src').substr(2);
                characteristics = "&characteristics=" + $('#characteristics').val();
                description = "&description=" + $('#description').val();
                benefits = "&benefits=" + $('#benefits').val();
                price = "&price=" + $('#price').val();
                formula = "&formula=" + $('#formula').val();
                proizvod = "&proizvod=" + $('#proizvod').val();
                var data = cat + name + img + imgBig + characteristics + description + benefits + price + formula +proizvod + "&" + form;
                $.post('../admin/ajax.php?add=addfurnitura', data, function (data) {
                    location.reload();
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
            }
        }
    }
    function edit() {
      /*  himg = (typeof $('.dz-filename').get(0) == 'undefined') ? $('#edit_himg').val() : 'uploads/' + $($('.dz-filename').get(0)).find('#img_name').html();
        himgBig = (typeof $('.dz-filename').get(1) == 'undefined') ? $('#edit_himgBig').val() : 'uploads/' + $($('.dz-filename').get(1)).find('#img_name').html();*/
        id = "&id=" + $('#edit_id').val();
        cat = "&cat=" + $('#edit_cat').val();
        name = "&name=" + $('#edit_name').val();
        img = "&img="  + $('#edit_img').attr('src');
        imgBig = "&imgBig="+ $('#edit_img1').attr('src');
        characteristics = "&characteristics=" + $('#edit_characteristics').val();
        description = "&description=" + $('#edit_description').val();
        benefits = "&benefits=" + $('#edit_benefits').val();
        price = "&price=" + $('#edit_price').val();
        formula = "&formula=" + $('#edit_formula').val();
        proizvod = "&proizvod=" + $('#edit_proizvod').val();
        var data = id + cat + name + img + imgBig + characteristics + description + benefits + price + formula+proizvod;
        $.post('../admin/ajax.php?add=editfurnitura', data, function (data) {
            location.reload();
        });
    }
    function predit(id) {
        $.post("../admin/ajax.php?add=preditfurnitura", "id=" + id, function (data) {
            var obj = JSON.parse(data);
            $('#edit_id').val(obj[0].id);
            $('#edit_cat').val(obj[0].cat);
            $('#edit_name').val(obj[0].name);
            $('#edit_img').attr('src',obj[0].img);
            $('#edit_img1').attr('src',obj[0].imgBig);
            $('#edit_characteristics').html(obj[0].characteristics);
            $('#edit_description').html(obj[0].description);
            $('#edit_benefits').html(obj[0].benefits);
            $('#edit_price').val(obj[0].price);
            $('#edit_formula').val(obj[0].formula);
            $('#edit_proizvod').val(obj[0].manufacturer);
        });
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=deletefurnitura",
            data: "id=" + id
        });
        $('#delete' + id).remove();
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
                "Закрыть": function () {
                    dialog.dialog("close");
                }

            }
        });

    });
    $('#edit_img').click(function () {
        $('#test').show();
    });
    $('#edit_img1').click(function () {
        $('#test1').show();
    });
    $('.t1').click(function () {
        $('#edit_img').attr('src', $(this).attr('src'));
        $('#test').hide();
    });
    $('.t3').click(function () {
        $('#edit_img1').attr('src', $(this).attr('src'));
        $('#test1').hide();
    });
    $('#batton').on('click', function () {
        $('#ModalGallery').modal('toggle');
    });
    $('#batton1').on('click', function () {
        $('#ModalGallery1').modal('toggle');
    });
    $('.m1').on('click', function () {
        $('#add_img').attr('src', $(this).attr('src'));
        $('#ModalGallery').modal('hide');
    });
    $('.m2').on('click', function () {
        $('#add_img1').attr('src', $(this).attr('src'));
        $('#ModalGallery1').modal('hide');
    });


    $("#create-user").button().on("click", function () {
        dialog.dialog("open");
    });

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
