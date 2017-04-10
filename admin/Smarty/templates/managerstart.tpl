<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Cтартовый профиль</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">

    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <![endif]-->
</head>

<body>

{include file='menu.tpl'}


<div class="container">
    <div class="jumbotron">
        <div class="input-group">
            <select id="formula" class="form-control">
                <option>Выберите стартовый профиль</option>
                {foreach $profils as $item name=items}
                    <option value="{$item['id']}">{$item['name']}</option>
                {/foreach}
            </select>
            <span class="input-group-btn">
                <button class="btn btn-default" id="save" type="button">Сохранить</button>
            </span>
        </div>

    </div>
    <div class="jumbotron">
        <div class="input-group">
            <select id="formula2" class="form-control">
                <option>Выберите стартовый материал</option>
                {foreach $materials as $item name=items}
                    <option value="{$item['id']}">{$item['name']}</option>
                {/foreach}
            </select>
            <span class="input-group-btn">
                <button class="btn btn-default" id="save2" type="button">Сохранить</button>
            </span>
        </div>

    </div>
</div>


<!-- Scripts -->
<script src="../admin/jquery-3.1.1.min.js"></script>
<script>
    $('#save').click(function () {
        var data = "id="+$('#formula').val();
        $.post("./starprofil.php",data,function (data) {
            alert(data);
        });
    })
    $('#save2').click(function () {
        var data = "id="+$('#formula2').val();
        $.post("./starmaterial.php",data,function (data) {
            alert(data);
        });
    })
</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>