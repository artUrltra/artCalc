<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Архивы</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <script src="../admin/assets/js/dropzonejs1.js"></script>
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Архивы</h2></div>
            <div class="col-xs-6 col-md-4">
                <button class="btn btn-success btn-lg btn-block" id="save_archive">Создать Архыв
                </button>
            </div>
        </div>
        <form action="parserZip.php" id="form_img" class="dropzone"></form>
        <button id="batton" class="btn btn-default btn-lg btn-block">Добавить</button>
        <hr>
        <div class="row">
            {foreach $archive as $item name=items}
                <div class="col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img src="https://alssl.askleomedia.com/wp-content/uploads/2014/09/zip-300x343.png" alt="...">
                        <div class="caption">
                            <h3>{$item}</h3>
                            <p><a href="./zip/{$item}" class="btn btn-primary" role="button" download><span
                                            class="glyphicon glyphicon-download" aria-hidden="true"></span>Скачать</a><a
                                        data-set="{$item}" href="#" class="btn btn-success" role="button"><span
                                            class="glyphicon glyphicon-ок"></span>Выбрать</a><a data-delete="{$item}"
                                                                                                href="#"
                                                                                                class="btn btn-danger"
                                                                                                role="button"><span
                                            class="glyphicon glyphicon-trash"></span></a></p>
                        </div>
                    </div>
                </div>
            {/foreach}
        </div>
    </div>

</div> <!-- /container -->
<div class="modal fade bs-example-modal-sm" tabindex="-1" id="myModal" role="dialog"
     aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <h3 id="modal-text"></h3>
        </div>
        <!-- Scripts -->
        <script src="../admin/jquery-3.1.1.min.js"></script>
        <script src="../admin/assets/js/bootstrap.min.js"></script>
        <script>
            $('#save_archive').on('click', function () {
                $.post('../admin/zip.php', function (data) {
                    $('#modal-text').text(data);
                    $('#myModal').modal('toggle');
                    location.reload();
                })
            });
            $('a.btn-danger').on('click', function () {
                $.post('../admin/index.php?delete=' + $(this).attr('data-delete'), function (data) {
                    location.reload();
                });
            });
            $('a.btn-success').on('click', function () {
                $.post('../admin/setArchive.php?set=' + $(this).attr('data-set'), function (data) {
                    alert(data);
                    location.reload();
                });
            });
            $('#batton').on('click', function () {
                location.reload();
            });
        </script>
</body>