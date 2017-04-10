<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Галерея</title>
    <link href="../admin/assets/css/bootstrap.css" rel="stylesheet">
    <link href="../admin/assets/css/bootstrap.min.css" rel="stylesheet">

    <link href="../admin/assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <link href="../admin/assets/css/navbar-static-top.css" rel="stylesheet">
    <link href="../admin/assets/css/dropzone.css" type="text/css" rel="stylesheet"/>
    <style>
        .thumbnail {
            max-width: 100%;
            height: 100px;
        }

        .thumbnail > img {
            max-height: 100%;
            min-height: 100%;
        }
        iframe{
            border: inherit;
        }
    </style>
    <link rel='stylesheet' type='text/css' href='http://www.x3dom.org/x3dom/release/x3dom.css'>
    <script src="../admin/assets/js/dropzonejs.js"></script>
    <script src="../admin/assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <script type='text/javascript' src='http://www.x3dom.org/x3dom/release/x3dom.js'></script>
    <![endif]-->
</head>

<body>

{include file='menu.tpl'}


<div class="container">

    <!-- Main component for a primary marketing message or call to action -->
    <div class="jumbotron">
        <form action="parser3d.php" id="form_img" class="dropzone"></form>
        <button id="batton" class="btn btn-default btn-lg btn-block">Добавить</button>
        <hr>
        <div class="row">
            {foreach $archive as $item name=items}
                <div class="col-xs-6 col-md-2">
                    <a class="thumbnail">
                        <img src="https://lh3.googleusercontent.com/d_8wl2YM1IezgCWGUuLJmrQLBDnRnekAjFc-chl0xHiwdl_kxcBIqF5GYxiFrC5NYA=h900" data-file="{$item}" alt="...">
                    </a>
                    <div class="caption">
                        <center>
                            <h6>{$item}</h6>
                        </center>
                    </div>
                </div>
            {/foreach}
        </div>

    </div> <!-- /container -->


    <!-- Large modal -->
    <div class="modal fade bs-example-modal-lg" id="myModal" tabindex="-1" role="dialog"
         aria-labelledby="myLargeModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="exampleModalLabel">Картинка</h4>
                </div>
                <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button>
                        <button type="button" id="modaldelete" data-delete="#" class="btn btn-danger">Удалить</button>
                        <button type="button" class="btn btn-primary">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scripts -->
        <script src="../admin/jquery-3.1.1.min.js"></script>
        <script src="../admin/assets/js/bootstrap.min.js"></script>
    <script type='text/javascript' src='http://www.x3dom.org/x3dom/release/x3dom.js'></script>
        <script>
            $('img').on('click', function () {
                $('.modal-body').html('');
                $('.modal-body').html('<x3d width="400px" height="400px"><scene><inline url="./3d/'+$(this).attr('data-file')+'"></inline></scene></x3d>');
                x3dom.reload();
                $('#modaldelete').attr('data-delete', $(this).attr('data-file'));
                $('#myModal').modal('toggle');
            });
            $('#modaldelete').on('click', function () {
                $.post('../admin/index.php?delete2=' + $(this).attr('data-delete'), function (data) {
                    location.reload();
                });
            });
            $('#batton').on('click', function () {
                location.reload();
            });

        </script>
</body>