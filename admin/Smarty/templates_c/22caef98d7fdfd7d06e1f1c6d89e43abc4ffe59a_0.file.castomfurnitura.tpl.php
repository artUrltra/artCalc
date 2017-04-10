<?php
/* Smarty version 3.1.30, created on 2017-04-03 20:29:57
  from "/var/www/artul201/data/www/audoors.ru/work/design/admin/Smarty/templates/castomfurnitura.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58e28695c7e207_38600901',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '22caef98d7fdfd7d06e1f1c6d89e43abc4ffe59a' => 
    array (
      0 => '/var/www/artul201/data/www/audoors.ru/work/design/admin/Smarty/templates/castomfurnitura.tpl',
      1 => 1490970395,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58e28695c7e207_38600901 (Smarty_Internal_Template $_smarty_tpl) {
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Управления фурнитурой</h2></div>
        </div>
        <div id="form">
            <hr>
            <input type="text" class="form-control" id="name" placeholder="Название"/>
            <div class="row">
                <div class="col-md-6">
                    <select id="type" class="form-control" multiple='multiple'>
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['type']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                            <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
                </div>
                <div class="col-md-6">
                    <select id="profiles" class="form-control" multiple='multiple'">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['profiles']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                        <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
                </div>
                <div class="col-md-6">
                    <select id="materials" class="form-control" multiple='multiple'>
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['materials']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                            <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
                </div>
                <div class="col-md-6">
                    <select id="option" class="form-control" multiple='multiple'>
                        <option>Название</option>
                        <option>Картинка</option>
                        <option>Диапазон</option>
                        <option>Ширина</option>
                        <option>Цена</option>
                        <option>Ограничение по высоте полотна</option>
                        <option>Ограничение по ширине полотна</option>
                        <option>Характеристики</option>
                        <option>Описание</option>
                        <option>Преимущества</option>
                        <option>Количество</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <select id="formula" class="form-control">
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['formula']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                            <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
                </div>
                <div class="col-md-6">
                    <div class="checkbox">
                        <label>
                            <input id="checkbox" type="checkbox"> Аксессуар
                        </label>
                    </div>
                </div>
            </div>

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
        <hr id="hr">
        <table class="table table-striped">
            <thead>
            <tr>
                <td>Название</td>
                <td>Тип каркаса</td>
                <td>Тип профиля</td>
                <td>Тип заполнения</td>
                <td>Формула</td>
                <td>Поля</td>
                <td>Аксессуар</td>
            </tr>
            </thead>
            <tbody>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['items']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                <tr id="del<?php echo $_smarty_tpl->tpl_vars['i']->value['id'];?>
">
                    <td><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</td>
                    <td>
                        <ul>
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, unserialize($_smarty_tpl->tpl_vars['i']->value['type']), 'p');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['p']->value) {
?>
                                <li><?php echo $_smarty_tpl->tpl_vars['p']->value;?>
</li>
                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                        </ul>
                    </td>
                    <td>
                        <ul>
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, unserialize($_smarty_tpl->tpl_vars['i']->value['profiles']), 'p');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['p']->value) {
?>
                                <li><?php echo $_smarty_tpl->tpl_vars['p']->value;?>
</li>
                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                        </ul>
                    </td>
                    <td>
                        <ul>
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, unserialize($_smarty_tpl->tpl_vars['i']->value['materials']), 'p');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['p']->value) {
?>
                                <li><?php echo $_smarty_tpl->tpl_vars['p']->value;?>
</li>
                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                        </ul>
                    </td>
                    <td><?php echo $_smarty_tpl->tpl_vars['i']->value['formula'];?>
</td>
                    <td>
                        <ul>
                            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, unserialize($_smarty_tpl->tpl_vars['i']->value['option']), 'p');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['p']->value) {
?>
                                <li><?php echo $_smarty_tpl->tpl_vars['p']->value;?>
</li>
                            <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                        </ul>
                    </td>
                    <td>
                        <?php if ($_smarty_tpl->tpl_vars['i']->value['accessory'] == 1) {?>
                            <span class="glyphicon glyphicon-ok"></span>
                        <?php } else { ?>
                            <span class="glyphicon glyphicon-minus"></span>
                        <?php }?>
                    </td>
                    <td>
                        <button type="button" onclick="edit(<?php echo $_smarty_tpl->tpl_vars['i']->value['id'];?>
)" class="btn btn-link" data-toggle="modal"
                                data-target="#myModal"><span class="glyphicon glyphicon-cog"></span></button>
                    </td>
                    <td>
                        <button type="button" onclick="del(<?php echo $_smarty_tpl->tpl_vars['i']->value['id'];?>
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
<!-- Large modal -->
<div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <input type="text" class="form-control" id="editname" placeholder="Название"/>
                <select id="editformula" class="form-control">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['formula']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                        <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                </select>
                <center>
                    <select id="edittype" class="form-control" multiple='multiple'>
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['type']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                            <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>

                    <select id="editprofiles" class="form-control" multiple='multiple'">
                    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['profiles']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                        <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
                    <select id="editmaterials" class="form-control" multiple='multiple'>
                        <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['materials']->value, 'i');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['i']->value) {
?>
                            <option><?php echo $_smarty_tpl->tpl_vars['i']->value['name'];?>
</option>
                        <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl);
?>

                    </select>
                </center>


                <center>
                    <select id="editoption" class="form-control" multiple='multiple'>
                        <option>Название</option>
                        <option>Картинка</option>
                        <option>Большая Картинка</option>
                        <option>Диапазон</option>
                        <option>Ширина</option>
                        <option>Цена</option>
                        <option>Ограничение по высоте полотна</option>
                        <option>Ограничение по ширине полотна</option>
                        <option>Характеристики</option>
                        <option>Описание</option>
                        <option>Преимущества</option>
                        <option>Количество</option>
                    </select>
                    <div class="checkbox">
                        <label>
                            <input id="editcheckbox" type="checkbox"> Аксессуар
                        </label>
                    </div>
                </center>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
                    <button type="button" id="saveedit" class="btn btn-primary" onclick="saveedit(id)">Сохранить
                    </button>
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
 src="../admin/assets/js/bootstrap.min.js"><?php echo '</script'; ?>
>
    <?php echo '<script'; ?>
>
        $('#type').multiSelect({
            selectableHeader: '<div>Тип каркаса</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        $('#profiles').multiSelect({
            selectableHeader: '<div>Тип профиля</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        $('#materials').multiSelect({
            selectableHeader: '<div>Тип заполнения</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        $('#option').multiSelect({
            selectableHeader: '<div>Поля</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        $('#edittype').multiSelect({
            selectableHeader: '<div>Тип каркаса</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        $('#editprofiles').multiSelect({
            selectableHeader: '<div>Тип профиля</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        $('#editmaterials').multiSelect({
            selectableHeader: '<div>Тип заполнения</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        $('#editoption').multiSelect({
            selectableHeader: '<div>Поля</div>',
            selectionHeader: "<div>Выбранные</div>"
        });
        function submit() {

            var data = {
                name: $("#name").val(),
                type: $("#type").val(),
                profiles: $("#profiles").val(),
                materials: $("#materials").val(),
                option: $("#option").val(),
                formula: $("#formula").val(),
                checked: $('#checkbox').prop("checked")
            };
            $.post('../admin/ajax.php?furnitura=123', data, function (data) {
                 location.reload();
            });
        }
        function del(id) {
            if (confirm("Вы хоти удалить данный элемент")) {
                $.get('../admin/ajax.php?delfurn=' + id);
                $('#del' + id).html('');
            }
        }
        function edit(id) {
            $.post('../admin/ajax.php?editfurn=1', 'id=' + id, function (data) {
                var array = JSON.parse(data);
                $('#editname').val(array[0]['name']);
                array[0]['materials'].forEach(function (v) {
                    $('#editmaterials').multiSelect('select', v);
                });
                array[0]['type'].forEach(function (v) {
                    $('#edittype').multiSelect('select', v);
                });
                array[0]['profiles'].forEach(function (v) {
                    $('#editprofiles').multiSelect('select', v);
                });
                array[0]['option'].forEach(function (v) {
                    $('#editoption').multiSelect('select', v);
                });
                $('#editformula').val(array[0]['formula']);
                if (array[0]['accessory'] == 1) {
                    $('#editcheckbox').prop('checked', true);
                } else {
                    $('#editcheckbox').prop('checked', false);
                }
                $('#myModal').focus();

                $('#saveedit').attr('onclick', 'saveedit(' + id + ')');
            });
        }
        function saveedit(id) {
            var data = {
                name: $("#editname").val(),
                type: $("#edittype").val(),
                profiles: $("#editprofiles").val(),
                materials: $("#editmaterials").val(),
                option: $("#editoption").val(),
                formula: $("#editformula").val(),
                checked: $('#editcheckbox').prop("checked")
            };
            $.post('../admin/ajax.php?editfurn1=' + id, data, function (data) {
                location.reload();
            });
        }
    <?php echo '</script'; ?>
>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <?php echo '<script'; ?>
 src="../admin/assets/js/ie10-viewport-bug-workaround.js"><?php echo '</script'; ?>
>
</body>
</html><?php }
}
