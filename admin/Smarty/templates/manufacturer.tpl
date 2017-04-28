<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Производители для Фурнитуры</title>
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
    <script src="../admin/assets/js/dropzonejs.js"></script>
    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

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
            <div class="col-md-6"><h4>Производители для Фурнитуры</h4></div>
            <div class="col-md-6">
                <div class="input-group">
                    <input type="text" id="name" class="form-control" placeholder="Названия производителя">
                    <span class="input-group-btn"><button class="btn btn-default" type="button" onclick="submit()">Добавить</button></span>
                </div>
            </div>
        </div>
        <hr>
        <div class="table-responsive">
            <table class="table table-hover" id="result">
                <thead>
                <th>#</th>
                <th>Название</th>
                </thead>
                <tbody>
                {foreach $items as $item}
                    <tr id="delete{$item['id']}">
                        <td>{$item['id']}</td>
                        <td>{$item['name']}</td>
                        <td>
                            <button type="button" onclick="itemdelete({$item['id']})" class="btn btn-link "><span
                                        class="glyphicon glyphicon-remove"></span></button>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>

    </div>
</div> <!-- /container -->

<!-- Scripts -->
<script>
    function submit() {
        let name = $('#name').val();
        if (name !== '') {
            $.post('../admin/ajax.php?add=addmanufacturer',{
                name:name
            } , function (data) {
                location.reload();
            });
        }else {
            alert('Забыли ввести имя');
        }
    }
    function itemdelete(id) {
        $.ajax({
            type: "POST",
            url: "../admin/ajax.php?delete=deletemanufacture",
            data: "id=" + id
        });
        $('#delete' + id).remove();
    }
</script>

<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
