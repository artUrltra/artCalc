<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Менеджеры калькулятора</title>
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
</head>

<body>

{include file='menu.tpl'}


<div class="container">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Менеджеры калькулятора</h2></div>
            <div class="col-xs-6 col-md-4">
            </div>
        </div>
        <hr id="hr">
        <div class="row">
            <div class="col-md-6"><input type="text" class="form-control" id="name" size="50" placeholder="Имя"/></div>
            <div class="col-md-6"><input type="text" class="form-control" id="mail" size="50" placeholder="Почта"/>
            </div>
            <div class="col-md-6"><input type="text" class="form-control" id="phone" size="50" placeholder="Телефон"/>
            </div>
            <div class="col-md-6"><input type="password" class="form-control" id="pass" size="50"
                                         placeholder="Пароль"/></div>
            <div class="col-md-12">
                {*<br>
                <center>
                    <textarea id="text"></textarea>
                </center>
                <br>*}
            </div>
            <div class="col-md-6">
                <button class="btn btn-success btn-lg btn-block" id="submit" onclick="submit()">Добавить</button>
            </div>
        </div>
        <hr id="hr">
        <table class="table table-striped">
            <thead>
            <tr>
                <td>Имя</td>
                <td>Почта</td>
                <td>Телефон</td>
                <td></td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {foreach $items as $item name=items}
                <tr id="delete{$item['id']}">
                    <td>{$item['name']}</td>
                    <td>{$item['mail']}</td>
                    <td>{$item['phone']}</td>
                    <td>
                        <button id="edit" type="button" onclick="predit({$item['id']})" class="btn btn-warning"
                                data-toggle="modal" data-target="#myModal">Редактировать
                        </button>
                    </td>
                    <td><a onclick="itemdelete({$item['id']})" class="btn btn-danger">Удалить</a></td>
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
                    Почта: <input type="text" class="form-control" id="edit_mail"/>
                    Телефон: <input type="text" class="form-control" id="edit_phone"/>
                    Пароль: <input type="text" class="form-control" id="edit_pass"/>
                    {*<center>
                        <textarea id="edit_text"></textarea>
                    </center>*}
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
    function submit() {
        var data = {
            name: $("#name").val(),
            mail: $("#mail").val(),
            phone: $("#phone").val(),
            pass: $('#pass').val(),
            text: tinyMCE.get('text').getContent(),
        };
        $.ajax({
            url: "../admin/ajax.php?add=addcalcmanager",
            type: "POST",
            data: data,
            success: function (data) {
                tinymce.triggerSave();
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
            mail: $("#edit_mail").val(),
            phone: $("#edit_phone").val(),
            pass: $("#edit_pass").val(),
            text: tinyMCE.get('edit_text').getContent()
        };
        $.post('../admin/ajax.php?add=editcalcmanager', data, function (data) {
            tinymce.triggerSave();
            location.reload();
        });

    }

    function predit(id) {
        $.post("../admin/ajax.php?add=preditcalcmanager", "id=" + id, function (data) {
            var obj = JSON.parse(data);
            var pass = prompt('Введите пароль?', '');
            if (obj[0].pass === pass) {
                $('#edit_id').val(obj[0].id);
                $('#edit_name').val(obj[0].name);
                $('#edit_mail').val(obj[0].mail);
                $('#edit_phone').val(obj[0].phone);
                $('#edit_pass').val(obj[0].pass);
               /* tinyMCE.get('edit_text').setContent(obj[0].text.replace(/}/g,'\"'));*/
                console.log(obj[0].text.replace(/}/g,'\"'));
            } else {
                alert('Пароль не верный!!!');
                $('#myModal').modal('hide');
            }
        });
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=deletecalcmanager",
            data: "id=" + id
        });
        $('#delete' + id).remove();
    }

    /*$('body').on('click','i.mce-ico.mce-i-image',function () {
     $('#myModal').css('display','');
     });*/
    $(document).on('focusin', function(e) {
        if ($(e.target).closest(".mce-window").length) {
            e.stopImmediatePropagation();
        }
    });
</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
