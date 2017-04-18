<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Шаблоны</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">

    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
    <script>
        tinymce.init({
            selector: "#text",
            height: 250,
            width: '100%',
            themes: "modern",
            plugins: [
                "save advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
            ],
            toolbar: "save",
            toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
            toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
            toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft | tags",
            menubar: false,
            toolbar_items_size: 'small',
            style_formats: [{
                title: 'Bold text',
                inline: 'b'
            }, {
                title: 'Red text',
                inline: 'span',
                styles: {
                    color: '#ff0000'
                }
            }, {
                title: 'Red header',
                block: 'h1',
                styles: {
                    color: '#ff0000'
                }
            }, {
                title: 'Example 1',
                inline: 'span',
                classes: 'example1'
            }, {
                title: 'Example 2',
                inline: 'span',
                classes: 'example2'
            }, {
                title: 'Table styles'
            }, {
                title: 'Table row 1',
                selector: 'tr',
                classes: 'tablerow1'
            }],
            templates: [{
                title: 'Test template 1',
                content: 'Test 1'
            }, {
                title: 'Test template 2',
                content: 'Test 2'
            }],
            setup: function (editor) {
                editor.addButton('tags', {
                    type: 'menubutton',
                    text: 'Теги',
                    icon: false,
                    menu: [{
                        text: 'Имя клиента',
                        onclick: function () {
                            editor.insertContent('&nbsp;#name&nbsp;')
                        }
                    },
                        {
                            text: 'Ширина',
                            onclick: function () {
                                editor.insertContent('&nbsp;#w&nbsp;')
                            }
                        }, {
                            text: 'Высота',
                            onclick: function () {
                                editor.insertContent('&nbsp;#h&nbsp;')
                            }
                        }, {
                            text: 'Площядь',
                            onclick: function () {
                                editor.insertContent('&nbsp;#s&nbsp;')
                            }
                        }, {
                            text: 'Количество полотен',
                            onclick: function () {
                                editor.insertContent('&nbsp;#p&nbsp;')
                            }
                        }, {
                            text: 'Количество подвижных полотене',
                            onclick: function () {
                                editor.insertContent('&nbsp;#pm&nbsp;')
                            }
                        }, {
                            text: 'Имя профиля',
                            onclick: function () {
                                editor.insertContent('&nbsp;#Profile&nbsp;')
                            }
                        }, {
                            text: 'Матереалы',
                            onclick: function () {
                                editor.insertContent('&nbsp;#Matireals&nbsp;')
                            }
                        }]
                });
            },
            content_css: [
                '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
                '//www.tinymce.com/css/codepen.min.css'
            ]
        });

        tinymce.init({
            selector: "#edit_text",
            height: 250,
            width: '100%',
            themes: "modern",
            plugins: [
                "save advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
            ],
            toolbar: "save",
            toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
            toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
            toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
            menubar: false,
            toolbar_items_size: 'small',
            style_formats: [{
                title: 'Bold text',
                inline: 'b'
            }, {
                title: 'Red text',
                inline: 'span',
                styles: {
                    color: '#ff0000'
                }
            }, {
                title: 'Red header',
                block: 'h1',
                styles: {
                    color: '#ff0000'
                }
            }, {
                title: 'Example 1',
                inline: 'span',
                classes: 'example1'
            }, {
                title: 'Example 2',
                inline: 'span',
                classes: 'example2'
            }, {
                title: 'Table styles'
            }, {
                title: 'Table row 1',
                selector: 'tr',
                classes: 'tablerow1'
            }],
            templates: [{
                title: 'Test template 1',
                content: 'Test 1'
            }, {
                title: 'Test template 2',
                content: 'Test 2'
            }],
            content_css: [
                '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
                '//www.tinymce.com/css/codepen.min.css'
            ]
        });
    </script>
    <script src="https://cdn.jsdelivr.net/clipboard.js/1.6.0/clipboard.min.js"></script>
    <script>

    </script>
</head>

<body>

{include file='menu.tpl'}


<div class="container">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Шаблоны</h2></div>
            <div class="col-xs-6 col-md-4">
            </div>
        </div>
        <hr id="hr">
        <div class="row">
            <div class="col-md-6"><input type="text" class="form-control" id="name" size="50" placeholder="Имя"/></div>
            <div class="col-md-6"><select id="manager" class="form-control">
                    <option>Менеджер</option>
                    {foreach $managers as $item}
                        <option>{$item['name']}</option>
                    {/foreach}
                </select>
            </div>
            <div class="col-md-8">
                <br>
                <input type="text" class="form-control" id="theme" placeholder="Тема письма"/>
            </div>
            <div class="col-md-4">
                <br>
                <input type="text" class="form-control" id="code" placeholder="Код каталога (11;33)"/>
            </div>
            <div class="col-md-12">
                <br>
                <center>
                    <textarea id="text"></textarea>
                </center>
                <br>
            </div>
            <div class="col-md-6">
                <button class="btn btn-success btn-lg btn-block" id="submit" onclick="submit()">Добавить</button>
            </div>
        </div>
        <hr id="hr">
        <table class="table table-striped">
            <thead>
            <tr>
                <td>Имя шаблона</td>
                <td>Менеджер</td>
                <td>Тема</td>
                <td>Код каталога</td>
                <td>Копировать шаблон</td>
                <td>Редактировать</td>
                <td>Удалить</td>
            </tr>
            </thead>
            <tbody>
            {foreach $items as $item}
                <tr id="delete{$item['id']}">
                    <td>{$item['name']}</td>
                    <td>{$item['user']}</td>
                    <td>{$item['theme']}</td>
                    <td>{$item['code']}</td>
                    <td>
                        <button type="button" data-id="{$item['id']}" data-clipboard-text="Разраб тут с нами"
                                class="btn btn-link copy"><span
                                    class="glyphicon glyphicon-copy"></span></button>
                    </td>

                    <td>
                        <button type="button" id="edit" onclick="predit({$item['id']})"
                                class="btn btn-link "><span
                                    class="glyphicon glyphicon-cog"></span></button>
                    </td>

                    <td>
                        <button type="button" onclick="itemdelete({$item['id']})"
                                class="btn btn-link "><span
                                    class="glyphicon glyphicon-remove"></span></button>
                    </td>
                </tr>
            {/foreach}
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
                    <input type="hidden" id="edit_id"/>
                    Имя: <input type="text" class="form-control" id="edit_name"/>
                    Менеджер: <select id="edit_manager" class="form-control">
                        <option>Менеджер</option>
                        {foreach $managers as $item}
                            <option>{$item['name']}</option>
                        {/foreach}
                    </select>
                    Код: <input type="text" class="form-control" id="edit_code"/>
                    Тема: <input type="text" class="form-control" id="edit_theme"/>
                    <center>
                        <textarea id="edit_text"></textarea>
                    </center>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" id="edit_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                <button type="button" onclick="edit()" id="edit_submit" class="btn btn-primary">Редактировать</button>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
<script src="../admin/jquery-3.1.1.min.js"></script>
<script>
    var items_0 = [];
    $.get('../admin/ajax.php?getteml=1', function (data) {
        items_0 = JSON.parse(data);
    });
    function submit() {
        var data = {
            name: $("#name").val(),
            manager: $("#manager").val(),
            code: $("#code").val(),
            theme: $("#theme").val(),
            text: tinyMCE.get('text').getContent(),
        };
        $.ajax({
            url: "../admin/ajax.php?add=addtemp",
            type: "POST",
            data: data,
            success: function (data) {
                tinymce.triggerSave();
                console.log(data);
                location.reload();
            },
            error: function (data) {
                console.log(data);
            }
        });
    }
    function edit() {

        var data = {
            id: $("#edit_id").val(),
            name: $("#edit_name").val(),
            user:  $('#edit_manager').val(),
            code: $('#edit_code').val(),
            theme:$('#edit_theme').val(),
            text: tinyMCE.get('edit_text').getContent()
        };
        console.log(data);
        $.post('../admin/ajax.php?setedittemp=1', data, function (data) {
            tinymce.triggerSave();
            $('#myModal').modal('hide');
            location.reload();
        });

    }

    function predit(id) {
        var item = items_0.find(function (v) {
            return v.id === id
        });
        tinyMCE.get('edit_text').setContent(item.text.replace(/}/g, '\"'));
        $('#edit_name').val(item.name);
        $('#edit_id').val(item.id);
        $('#edit_manager').val(item.user);
        $('#edit_code').val(item.code);
        $('#edit_theme').val(item.theme);
        $('#myModal').modal('show');
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=deltemp",
            data: "id=" + id
        });
        $('#delete' + id).remove();
    }

    $(document).on('focusin', function (e) {
        if ($(e.target).closest(".mce-window").length) {
            e.stopImmediatePropagation();
        }
    });
    var clipboard = new Clipboard('.copy',
        {
            text: function (trigger) {
                var item = items_0.find(function (v) {
                    return v.id === $(trigger).data('id')
                });
                tinyMCE.get('text').setContent(item.text.replace(/}/g, '\"'));
                return item.text.replace(/}/g, '\"');
            }
        }
        )
    ;

    clipboard.on('success', function (e) {
        console.log(e);
    });
    clipboard.on('error', function (e) {
        console.log(e);
    });
</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
