<?php
/* Smarty version 3.1.30, created on 2017-02-16 15:42:38
  from "/var/www/graf2176/data/www/bells.in.ua/XXXX/admin/Smarty/templates/managersupplements.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_58a59e3e29c5a4_00871436',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '507b769b6b1930667db15192188c4d49570f7a99' => 
    array (
      0 => '/var/www/graf2176/data/www/bells.in.ua/XXXX/admin/Smarty/templates/managersupplements.tpl',
      1 => 1485841690,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:menu.tpl' => 1,
  ),
),false)) {
function content_58a59e3e29c5a4_00871436 (Smarty_Internal_Template $_smarty_tpl) {
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Управления дополнения</h2></div>
        </div>
        <div id="form">
            <hr>
            <input type="text" class="form-control" id="name" placeholder="Название"/>
            <select id="type" class="form-control">
                <option>Выберите тип каркаса</option>
                <option >Стационарная</option>
                <option >Раздвижная перегородка</option>
                <option >Складная перегородка</option>
                <option >Распашная дверь</option>
                <option >Мобильная перегородка</option>
            </select>
            <select id="typeprice" class="form-control">
                <option>Выберите тип рассчета</option>
                <option>Поштучно</option>
                <option>с периметром </option>
                <option>С периметром + перемычки </option>
                <option>С периметром + перемычки +двойной или одинарный</option>
                <option>Поштучно за количество соединений</option>
            </select>
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
                <td>Тип расчета</td>
            </tr>
            </thead>
            <tbody>
            <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['items']->value, 'item', false, NULL, 'items', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
                <tr id="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
" data-toggle="modal" data-target="#myModal">
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['type'];?>
</td>
                    <td><?php echo $_smarty_tpl->tpl_vars['item']->value['typeprice'];?>
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
                    <input type="text" class="form-control" id="edit_name" placeholder="Название"/>
                    <select id="edit_type" class="form-control">
                        <option>Выберите тип каркаса</option>
                        <option >Стационарная</option>
                        <option >Раздвижная перегородка</option>
                        <option >Складная перегородка</option>
                        <option >Распашная дверь</option>
                        <option >Мобильная перегородка</option>
                    </select>
                    <select id="edit_typeprice" class="form-control">
                        <option>Выберите тип рассчета</option>
                        <option>Поштучно</option>
                        <option>с периметром </option>
                        <option>С периметром + перемычки </option>
                        <option>С периметром + перемычки +двойной или одинарный</option>
                        <option>Поштучно за количество соединений</option>
                    </select>
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
    function submit() {
        var index = 0;
        if ($("#name").val() == '') {
            $("#name").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#name").css("border-color", '#ccc');
        }
        if ($("#type").val() == 'Выберите тип каркаса') {
            $("#type").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#type").css("border-color", '#ccc');
        }
        if ($("#typeprice").val() == 'Выберите тип расчета') {
            $("#typeprice").css("border-color", '#ff0000');
            index = 1;
        } else {
            $("#typeprice").css("border-color", '#ccc');
        }
        switch (index) {
            case 0: {
                var data = {
                    name: $("#name").val(),
                    type: $("#type").val(),
                    typeprice: $("#typeprice").val()
                };
                console.log(data);
                $.post('../admin/ajax.php?add=add13', data, function (data) {
                    console.log(data);
                    location.reload();
                });
                break;
            }
            case 1: {
                alert('Пожалуйста заполните все поля');
            }
        }
    }

    $('tr').click(function () {
        var id = 'id=' + $(this).attr('id');
        window.setid=$(this).attr('id');
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?select=11",
            data: id,
            success: function (data) {
                var data = JSON.parse(data);
                $("#edit_name").val(data[0].name);
                $("#edit_type").val(data[0].type);
                $("#edit_typeprice").val(data[0].typeprice);
            }
        });
        $('#edit_submit').click(function () {
            $.post('../admin/ajax.php?upload=Hoho',{ name:$("#edit_name").val(),type:$("#edit_type").val(),typeprice:$("#edit_typeprice").val(),id:setid}, function (data) {
                console.log(data);
                $("#edit_exit").click();
                location.reload();
            });

        });
    });
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=delete12",
            data: "id=" + id
        });
        $('#' + id).remove();
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
</html><?php }
}
