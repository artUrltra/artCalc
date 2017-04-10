<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Замки</title>
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
</head>

<body>

{include file='menu.tpl'}


<div class="container">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Замки</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="add">Добавить</button>
            </div>
        </div>
        <hr id="hr">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <th>Название</th>
                <th>Картинка</th>
                </thead>
                <tbody>
                {foreach $items as $item name=items}
                    <tr id="delete{$item['id']}">
                        <td>{$item['name']}</td>
                        <td> <img src="{$item['img']}"  class="img-responsive" width="140px" height="140px"></td>
                        <td><button type="button" onclick="edit({$stolid},{$item['id']})" class="btn btn-link"
                                    data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-cog"></span>
                            </button></td>
                        <td> <button type="button" onclick="itemdelete({$stolid},{$item['id']})"
                                     class="btn btn-link "><span
                                        class="glyphicon glyphicon-remove"></span></button></td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

            <div class="modal-body">
                <form>
                    <input type="text" id="edit_name" class="form-control" placeholder="Название"/>
                    <input type="file" id="edit_file" multiple="multiple" accept=".txt,image/*">
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
<script src="../admin/jquery-3.1.1.min.js"></script>
<script>
        var files;

        $('#file').change(function () {
            files = this.files;
        });

        function submit() {
            var data = new FormData();
            $.each(files, function (key, value) {
                data.append(key, value);
            });

            $.ajax({
                url: '../admin/submit.php?uploadfiles',
                type: 'POST',
                data: data,
                cache: false,
                dataType: 'json',
                processData: false,
                contentType: false,
                success: function () {
                },
            });
            var name = "name=" + $('#name').val();
            var image = "image=" + 'uploads/' + $('#file')[0].files[0].name;
            var sum = name + "&" + image;
            $.ajax({
                type: "POST",
                url: "../admin/ajax.php?add=add3",
                data: sum,
                success: function () {
                }
            });
            location.reload();
        }

    function itemdelete(stol, id) {

        var sum = "id=" + id + "&stol=" + stol;

        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=delete2",
            data: sum,
            success: function (data) {
            }
        });

        $('#delete' + id).remove();

    }
    function edit(stol, id) {
        $.ajax({

            type: "POST",
            url: "../admin/ajax.php?select=3",
            data: "id=" + id,
            success: function (data) {
                data = JSON.parse(data);
                $("#edit_name").val(data[0].name);
                var image = document.createElement("img");
                image.src = data[0].img;
                image.id = "edit_image";
                $("#edit_image").remove();
                $(image).insertAfter($("#edit_file"));
            }
        });
        $('#edit_submit').click(function () {

            itemdelete(stol, id);

            $("#edit_exit").click();


            var name = "name=" + $("#edit_name").val();
            var image = "image=" + $('#edit_image').attr('src');
            var sum = name + "&" + image;
            $.ajax({
                url: "../admin/ajax.php?add=add3",
                type: "POST",
                data: sum,
                success: function () {

                }
            });

            location.reload();
        });


    }
    var files;

    $('#edit_file').change(function () {

        files = this.files;

        var data = new FormData();
        $.each(files, function (key, value) {
            data.append(key, value);
        });

        $.ajax({
            url: '../admin/submit.php?uploadfiles',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data) {
                var image = document.createElement("img");
                image.src = 'uploads/' + $('#edit_file')[0].files[0].name;
                image.id = "edit_image";
                $("#edit_image").remove();
                $(image).insertAfter($("#edit_file"));
            }
        });
    });
    $("#add").click(function () {
        $('<input type="text"  class="form-control" id="name"  placeholder="Название" />').insertAfter('#hr');
        $('<input type="file" id="file" multiple="multiple" accept=".txt,image/*">').insertAfter('#name');
        $('<button class="btn btn-success btn-lg" id="submit" onclick="submit()">Добавить</button>').insertAfter('#file');
        $('<hr>').insertAfter('#submit');
        $("#add").remove();
    })
</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>