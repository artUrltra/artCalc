<?php
/* Smarty version 3.1.30, created on 2017-03-15 11:28:32
  from "C:\wamp64\www\Calc\admin\Smarty\templates\Peremochki.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58c92560da3c35_35718481',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '66c84c3d7c640063d68a15005778c1311eb85385' => 
    array (
      0 => 'C:\\wamp64\\www\\Calc\\admin\\Smarty\\templates\\Peremochki.tpl',
      1 => 1489572496,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58c92560da3c35_35718481 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Перемычки</title>
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Перемычки</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить
                </button>
            </div>
        </div>
        <div id="form">
            <hr>
            <input type="text" class="form-control" id="name" placeholder="Название"/>
            <div class="row">
                <div class="col-md-3"><input type="number" class="form-control" id="height"
                                             placeholder="Высота до (м)"></div>
                <div class="col-md-3"><input type="number" class="form-control" id="paz"
                                             placeholder="Паз (мм)"></div>

                <div class="col-md-3"><input type="number" class="form-control" id="steklo"
                                             placeholder="Стекло (мм)"></div>
                <div class="col-md-3"><input type="number" class="form-control" id="penal"
                                             placeholder="Глухие панели (мм)"></div>
            </div>
            <input type="number" class="form-control" id="price"
                   placeholder="Цена">
            <div class="row">
                <div class="col-md-4"><input type="number" class="form-control" id="priceDekor"
                                             placeholder="Цена декора"/></div>
                <div class="col-md-4"><input type="number" class="form-control" id="priceColor"
                                             placeholder="Цена цвета"/></div>
                <div class="col-md-4"><input type="number" class="form-control" id="priceAnod"
                                             placeholder="Цена Анодирования"/></div>
            </div>
            <input type="number" class="form-control" id="max"
                   placeholder="Введите максимальную высота для данного профиля (мм)"/>
            <input type="number" class="form-control" id="h"
                   placeholder="Ширина"/>
            <input type="number" class="form-control" id="t"
                   placeholder="Толщина"/>
            <button id="batton" class="btn btn-default btn-lg btn-block">Выбрать картинку</button>
            <center>
                <img src="../img/material/undefined.png" width="300px" height="300px"
                     id="add_img" >
            </center>
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
        <hr>
        <div class="table-responsive">
            <table class="table table-hover" id="result">
                <thead>
                <th>Название</th>
                <th>Картинка</th>
                <th>Высота/Паз/Стекло/Глухие панели</th>
                <th>Цена</th>
                <th>Максимальная высота для данного профиля</th>
                <th>Цена декора/цвета/анодирования</th>
                <th>Ширина</th>
                <th>Толщина</th>
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
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['height'];?>
 м;<?php echo $_smarty_tpl->tpl_vars['item']->value['paz'];?>
 мм;<?php echo $_smarty_tpl->tpl_vars['item']->value['steklo'];?>
 мм;<?php echo $_smarty_tpl->tpl_vars['item']->value['penal'];?>
 мм;</td>
                        <td><var><?php echo $_smarty_tpl->tpl_vars['item']->value['price'];?>
</var></td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['max'];?>
</td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['priceDekor'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['priceColor'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['priceAnod'];?>
</td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['width'];?>
</td>
                        <td><?php echo $_smarty_tpl->tpl_vars['item']->value['thickness'];?>
</td>
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
                <form id="modalform">
                    <div class="form-group"><input type="text" id="editid">
                        Название<br/>
                        <input type="text" class="form-control" id="edit_name" placeholder="Название"/>
                        <div class="row">
                            <div class="col-md-3">Высота до (м):<br/><input type="text" class="form-control"
                                                                            id="edit_height"
                                                                            placeholder="Высота до"></div>
                            <div class="col-md-3">Паз (мм):<br/><input type="text" class="form-control" id="edit_paz"
                                                                       placeholder="Паз"></div>

                            <div class="col-md-3">Стекло (мм):<br/><input type="text" class="form-control"
                                                                          id="edit_steklo"
                                                                          placeholder="Стекло"></div>
                            <div class="col-md-3">Глухие панели (мм):<br/><input type="text" class="form-control"
                                                                                 id="edit_penal"
                                                                                 placeholder="Глухие панели"></div>
                        </div>
                        Цена:<br/><input type="text" class="form-control" id="edit_price"
                                         placeholder="Цена">
                        Максимальная высота для данного профиля:<br/>
                        <input type="text" class="form-control" id="edit_max"
                               placeholder="Максимальная высота для данного профиля "/>
                        Цена декора:<br/>
                        <input type="text" class="form-control" id="edit_priceDekor"
                               placeholder="Цена декора "/>
                        Цена цвета:<br/>
                        <input type="text" class="form-control" id="edit_priceColor"
                               placeholder="Цена цвета "/>
                        Цена анодирования:<br/>
                        <input type="text" class="form-control" id="edit_priceAnod"
                               placeholder="Цена анодирования "/>
                        Ширина:<br>
                        <input type="number" class="form-control" id="edit_h"
                               placeholder="Ширина"/>
                        Толщина:<br>
                        <input type="number" class="form-control" id="edit_t"
                               placeholder="Толщина"/>
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
>
    $(document).ready(function () {
        $('#form').hide();
        $('#button').hide();
        $('#test').hide();
    });

    function submit() {
        var index = 0;
        if ($("#name").val() == '') {
            $("#name").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#name").css("border-color", '#ccc');
        }
        if ($("#max").val() == '') {
            $("#max").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#max").css("border-color", '#ccc');
        }
        if ($("#price").val() == '') {
            $("#price").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#price").css("border-color", '#ccc');
        }
        if ($("#priceK").val() == '') {
            $("#priceK").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#priceK").css("border-color", '#ccc');
        }
        if ($("#height").val() == '') {
            $("#height").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#height").css("border-color", '#ccc');
        }
        if ($("#paz").val() == '') {
            $("#paz").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#paz").css("border-color", '#ccc');
        }
        if ($("#steklo").val() == '') {
            $("#steklo").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#steklo").css("border-color", '#ccc');
        }
        if ($("#penal").val() == '') {
            $("#penal").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#penal").css("border-color", '#ccc');
        }
        if ($("#priceDekor").val() == '') {
            $("#priceDekor").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#priceDekor").css("border-color", '#ccc');
        }
        if ($("#priceColor").val() == '') {
            $("#priceColor").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#priceColor").css("border-color", '#ccc');
        }

        if ($("#priceAnod").val() == '') {
            $("#priceAnod").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#priceAnod").css("border-color", '#ccc');
        }
        if ($("#profilform").serialize() == '') {
            $("#create-user").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#create-user").css("border-color", '#ccc');
        }
        switch (index) {
            case 0: {
                $('#add').show();
                $('#form').hide();
                var form = $("#profilform").serialize();
                var price = "&price=" + $('#price').val();
                var priceK = "&priceK=0";
                var name = "name=" + $("#name").val();
                var max = "&max=" + parseInt($("#max").val());
                var image = "&image=" + $('#add_img').attr('src').substr(2);
                var item1 = "&height=" + $("#height").val();
                var item2 = "&paz=" + $("#paz").val();
                var item3 = "&steklo=" + $("#steklo").val();
                var item4 = "&penal=" + $("#penal").val();
                var priceDekor = '&priceDekor=' + $("#priceDekor").val();
                var priceColor = '&priceColor=' + $("#priceColor").val();
                var priceAnod = '&priceAnod=' + $("#priceAnod").val();
                var Thickness = '&thickness=' + $('#t').val();
                var width = '&width=' + $('#h').val();
                var data = name + Thickness + width + max + image + item1 + item2 + item3 + price + priceK + priceDekor + priceColor + priceAnod + item4 + "&" + form;
                $.post('../admin/ajax.php?add=add10', data, function (data) {
                    location.reload();
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
            }
        }
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=delete8",
            data: "id=" + id
        });
        $('#' + id).remove();
    }
    $(function () {
        dialog = $("#dialog-form").dialog({
            autoOpen: false,
            height: 600,
            width: 600,
            modal: true,
            buttons: {
                "Выбрать все": function () {
                    $('#profilform input').each(function (i, elem) {
                        $(elem).attr("checked", "checked");
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

    });

    $("#create-user").button().on("click", function () {
        dialog.dialog("open");
    });


    $('#add').click(function () {
        $('#form').show();
        $('#add').hide();
    });
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
        var id = 'id=' + $(this).attr('id');
        $.post("../admin/ajax.php?select=9", id, function (data) {
            $('#editid').hide();
            $('#button').click();
            data = JSON.parse(data);
            $('#editid').val(data[0].id);
            $('#edit_price').val(data[0].price);
            $('#edit_priceK').val(data[0].priceK);
            $("#edit_name").val(data[0].name);
            $("#edit_max").val(data[0].max);
            $("#edit_paz").val(data[0].paz);
            $("#edit_height").val(data[0].height);
            $("#edit_steklo").val(data[0].steklo);
            $("#edit_penal").val(data[0].penal);
            $("#edit_priceDekor").val(data[0].priceDekor);
            $("#edit_priceColor").val(data[0].priceColor);
            $("#edit_priceAnod").val(data[0].priceAnod);
            $("#edit_h").val(data[0].width);
            $("#edit_t").val(data[0].thickness);
            $('#edit_img').attr('src', data[0].img);
        });
    });
    $('#edit_submit').click(function () {
        var data = 'name=' + $("#edit_name").val() + '&max=' + $("#edit_max").val() + '&width=' + $("#edit_h").val() + '&thickness=' + $("#edit_t").val() + '&paz=' + $("#edit_paz").val() + '&height=' + $("#edit_height").val() + '&steklo=' + $("#edit_steklo").val()
            + '&penal=' + $("#edit_penal").val() + '&priceDekor=' + $("#edit_priceDekor").val() + '&priceColor=' + $("#edit_priceColor").val() + '&priceAnod=' + $("#edit_priceAnod").val()
            + '&img=' + $('#edit_img').attr('src') + '&id=' + $("#editid").val() + '&price=' + $("#edit_price").val() + '&priceK=' + $("#edit_priceK").val();
        $.post('../admin/ajax.php?upload=Peremochki', data, function (data) {
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
