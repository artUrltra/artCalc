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
        <div id="form">
            <hr>
            {foreach $other as $k=>$i}
                {if  $k eq 'Картинка'}
                    <input type="image" class="form-control" id="img" src="{$i}" placeholder="{$k}" value="{$i}" onclick="image('img')" style="height: 350px; width: 350px"/>
                    <br>
                {else}
                    <input type="text" class="form-control" id="name" placeholder="{$k}" value="{$i}"/>
                    <br>
                {/if}
            {/foreach}
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" onclick="send()">Изменить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit" onclick="reset()">Отменить</button>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade bs-example-modal-lg" id="ModalGallery" tabindex="-1" role="dialog"
     aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">Картинка</h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    {foreach $archive as $item name=items}
                        <div class="col-xs-6 col-md-2">
                            <a class="thumbnail">
                                <img src="./uploads/{$item}" alt="..." onclick="imagesave('./uploads/{$item}')">
                            </a>
                            <div class="caption">
                                <center>
                                    <h6>{$item}</h6>
                                </center>
                            </div>
                        </div>
                    {/foreach}
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Scripts -->
<script src="../admin/jquery-3.1.1.min.js"></script>
<script src="../admin/assets/js/jquery.multi-select.js"></script>
<script>
    function send() {
        if (confirm("Сохранить изменения ?")) {
        var arr = '';
        $('.form-control').each(function () {
            arr += $(this).attr('placeholder') + '=' + $(this).val() + '&';
        });
        $.post('../admin/ajax.php?editfurnnew={$item['id']}', arr, function (data) {
            document.location.href='./index.php?page=furn&id={$id}';
        });
        }
    }
    function image(srt) {
        switch (srt){
            case 'img':{
                $('#ModalGallery').modal();
                break;
            }
        }
    }
    function imagesave(srt) {
        $('#img').val(srt);
        $('#img').attr('src',srt);
        $('#ModalGallery').modal('toggle');
    }
    function reset() {
        if (confirm("Вы хотите выйти")) {
            document.location.href='./index.php?page=furn&id={$id}';
        }

    }
</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>