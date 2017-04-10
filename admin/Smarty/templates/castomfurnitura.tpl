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

    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

{include file='menu.tpl'}


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
                        {foreach from=$type item=i}
                            <option>{$i.name}</option>
                        {/foreach}
                    </select>
                </div>
                <div class="col-md-6">
                    <select id="profiles" class="form-control" multiple='multiple'">
                    {foreach from=$profiles item=i}
                        <option>{$i.name}</option>
                    {/foreach}
                    </select>
                </div>
                <div class="col-md-6">
                    <select id="materials" class="form-control" multiple='multiple'>
                        {foreach from=$materials item=i}
                            <option>{$i.name}</option>
                        {/foreach}
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
                        {foreach from=$formula item=i}
                            <option>{$i.name}</option>
                        {/foreach}
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
            {foreach $items as $i}
                <tr id="del{$i['id']}">
                    <td>{$i['name']}</td>
                    <td>
                        <ul>
                            {foreach unserialize($i['type']) as $p }
                                <li>{$p}</li>
                            {/foreach}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {foreach unserialize($i['profiles']) as $p }
                                <li>{$p}</li>
                            {/foreach}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {foreach unserialize($i['materials']) as $p }
                                <li>{$p}</li>
                            {/foreach}
                        </ul>
                    </td>
                    <td>{$i['formula']}</td>
                    <td>
                        <ul>
                            {foreach unserialize($i['option']) as $p }
                                <li>{$p}</li>
                            {/foreach}
                        </ul>
                    </td>
                    <td>
                        {if $i['accessory'] eq 1}
                            <span class="glyphicon glyphicon-ok"></span>
                        {else}
                            <span class="glyphicon glyphicon-minus"></span>
                        {/if}
                    </td>
                    <td>
                        <button type="button" onclick="edit({$i['id']})" class="btn btn-link" data-toggle="modal"
                                data-target="#myModal"><span class="glyphicon glyphicon-cog"></span></button>
                    </td>
                    <td>
                        <button type="button" onclick="del({$i['id']})" class="btn btn-link "><span
                                    class="glyphicon glyphicon-remove"></span></button>
                    </td>
                </tr>
            {/foreach}
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
                    {foreach from=$formula item=i}
                        <option>{$i.name}</option>
                    {/foreach}
                </select>
                <center>
                    <select id="edittype" class="form-control" multiple='multiple'>
                        {foreach from=$type item=i}
                            <option>{$i.name}</option>
                        {/foreach}
                    </select>

                    <select id="editprofiles" class="form-control" multiple='multiple'">
                    {foreach from=$profiles item=i}
                        <option>{$i.name}</option>
                    {/foreach}
                    </select>
                    <select id="editmaterials" class="form-control" multiple='multiple'>
                        {foreach from=$materials item=i}
                            <option>{$i.name}</option>
                        {/foreach}
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
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <script src="../admin/assets/js/jquery.multi-select.js"></script>
    <script src="../admin/assets/js/bootstrap.min.js"></script>
    <script>
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
    </script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>