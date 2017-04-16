<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta http-equiv='Content-Type' content='text/html;charset=utf-8'>
    <title>{$item['title']}</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
    </style>
</head>

<body>

{include file='menu.tpl'}


<div class="container">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-4 col-md-4"><h3 class="text-justify">{$item['title']}</h3></div>

            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <button class="btn btn-success btn-lg btn-block" onclick="$('#modal').modal('show');">Добавить
                        в {$item['name']}
                    </button>
                </div>
            </div>
            <div class="table-condensed">
                <table class="table table-hover" id="result">
                    <thead>
                    <th>#</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Слева</th>
                    <th>Группа</th>
                    <th>Отдельно</th>
                    <th>Скрыть</th>
                    <th>Ссылка</th>
                    <th></th>
                    <th></th>
                    </thead>
                    <tbody>
                    {foreach $items as $item}
                        <tr id="{$item['id']}">
                            <td>{$item['id']}</td>
                            <td>{$item['name']}</td>
                            <td>{$item['description']}</td>
                            <td>{if $item['left'] eq '1'}Да{else} Нет{/if}</td>
                            <td>{if $item['group'] eq '1'}Да{else} Нет{/if}</td>
                            <td>{if $item['separately'] eq '1'}Да{else} Нет{/if}</td>
                            <td>{if $item['hide'] eq '1'}Да{else} Нет{/if}</td>
                            <td><a href="{$item['link']}">{substr($item['link'],0,20)}...</a></td>
                            <td>
                                <button type="button" onclick="drop({$item['id']},true)"
                                        class="btn btn-link "><span
                                            class="glyphicon glyphicon-remove"></span></button>
                            </td>
                            <td>
                                <button type="button" onclick="edit({$item['id']})" class="btn btn-link"
                                        data-toggle="modal"
                                        data-target="#myModal"><span class="glyphicon glyphicon-cog"></span></button>
                            </td>
                        </tr>
                    {/foreach}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- /container -->

    <!-- Modal -->
    <div class="modal fade" tabindex="-1" id="modal" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Добавить каталог</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Название</label>
                                <input type="text" class="form-control" id="title" placeholder="Название">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ссылка</label>
                                <input type="text" class="form-control" id="link" placeholder="Ссылка">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="show_on_left">Слева
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="is_group_catalog">Группа
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="separate">Отдельно
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="hide">Скрыть
                                </label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <textarea class="form-control" id="description" rows="3" placeholder="Описание"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
                    <button type="button" class="btn btn-primary" onclick="save();">Сохранить</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal  Edit -->
    <div class="modal fade" tabindex="-1" id="modal_edit" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">Редактировать</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Название</label>
                                <input type="text" class="form-control" id="edit_title" placeholder="Название">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Ссылка</label>
                                <input type="text" class="form-control" id="edit_link" placeholder="Ссылка">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="edit_show_on_left">Слева
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="edit_is_group_catalog">Группа
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="separate">Отдельно
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="edit_hide">Скрыть
                                </label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <textarea class="form-control" id="edit_description" rows="3"
                                      placeholder="Описание"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
                    <button type="button" class="btn btn-primary" onclick="save_edit();">Сохранить изменения</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Scripts -->
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <script src="../admin/assets/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
    <script>
        var id;
        function save() {
            var data = {
                title: $('#title').val(),
                link: $('#link').val(),
                description: $('#description').val(),
                show_on_left: $('#show_on_left').prop("checked") ? 1 : 0,
                is_group_catalog: $('#is_group_catalog').prop("checked") ? 1 : 0,
                separate: $('#separate').prop("checked") ? 1 : 0,
                hide: $('#hide').prop("checked") ? 1 : 0
            };
            $.post("../admin/ajax.php?catalog={if $item['id'] eq 0}0{else}{$item['id']}{/if}", data, function (data) {
                $('#modal').modal('hide');
                console.log(data);
                location.reload();
            });
        }
        function drop(id, flag) {
            var isAdmin;
            if (flag) {
                isAdmin = confirm("Вы хотите удалить елемент");
            }
            if (isAdmin || !flag) {
                $.get('../admin/ajax.php?delcatalog=' + id);
                $('#' + id).remove();
            }
        }
        function edit(id) {
            var data = {
                id: id
            };
            $.post('../admin/ajax.php?getcatalog=1', data, function (data) {
                window.item = JSON.parse(data);

                $('#edit_title').val(item.name);
                $('#edit_link').val(item.link);
                $('#edit_description').val(item.description);
                $('#edit_show_on_left').attr("checked", item.left == '1' ? true : false);
                $('#edit_is_group_catalog').attr("checked", item.group == '1' ? true : false);
                $('#edit_separate').attr("checked", item.separately == '1' ? true : false);
                $('#edit_hide').attr("checked", item.hide == '1' ? true : false);
                $('#modal_edit').modal('show');
                window.id = id;
            });

        }
        function save_edit() {
            var data = {
                title: $('#edit_title').val(),
                link: $('#edit_link').val(),
                description: $('#edit_description').val(),
                show_on_left: $('#edit_show_on_left').prop("checked") ? 1 : 0,
                is_group_catalog: $('#edit_is_group_catalog').prop("checked") ? 1 : 0,
                separate: $('#edit_separate').prop("checked") ? 1 : 0,
                hide: $('edit_#hide').prop("checked") ? 1 : 0
            };
            if (item.id) {
                $.post('../admin/ajax.php?upcatalog=' + item.id, data, function (data) {
                    $('#modal_edit').modal('hide');
                    location.reload();
                });
            }
        }
    </script>
</body>
</html>
