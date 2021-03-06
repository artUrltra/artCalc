<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Управления материалами</title>
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Управления материалами</h2></div>
        </div>
        <div id="form">
            <hr>
            <div class="input-group">
                <input type="text" class="form-control" id="name" placeholder="Название"/>
                <span class="input-group-btn">
                    <button class="btn btn-default" id="submit" onclick="submit()">Добавить</button>
                </span>
            </div>
        </div>
        <hr id="hr">
        <table class="table table-striped">
            <thead>
            <tr>
                <td>Названия</td>
                <td></td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            {foreach $items as $item name=items}
                <tr id="delete{$item['id']}">
                    <td>{$item['name']}</td>
                    <td>
                        <button id="edit" type="button" onclick="edit({$item['id']})" class="btn btn-warning"
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
                    <input type="text" class="form-control" id="edit_name" placeholder="Название"/>
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
    function submit() {
        var name = "name=" + $("#name").val();
        var sum = name;
        $.ajax({
            url: "../admin/ajax.php?add=addmaterialscategory",
            type: "POST",
            data: sum,
            success: function (data) {
                location.reload();
            }
        });
    }

    function edit(id) {
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?select=10",
            data: "id=" + id,
            success: function (data) {
                data = JSON.parse(data);
                $("#edit_name").val(data[0].name);
            }
        });
        $('#edit_submit').click(function () {



            $("#edit_exit").click();


            var name = "name=" + $("#edit_name").val();
            var sum = name+"&id="+id;
            $.ajax({
                url: "../admin/ajax.php?add=editmaterialscategory",
                type: "POST",
                data: sum,
                success: function (data) {
                }
            });
            location.reload();
        });
    }
    function itemdelete(id) {
        console.log(id);
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=deletecategorymaterials",
            data: "id=" + id
        });
        $('#delete' + id).remove();
        location.reload();
    }

</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>