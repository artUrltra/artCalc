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
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6"><h2>{$name}</h2></div>
            <div class="col-xs-6 col-sm-6 col-md-6"><a class="btn btn-success btn-lg btn-block" id="submit"
                                                       href="./index.php?page=castomfurnitura" ">Управеднения
                фурнитурой</a></div>
        </div>
        <div id="form">
            <hr>
            {foreach $option as $i}
                {if  $i eq 'Картинка'}
                    <input type="image" class="form-control" id="img" src="../img/material/undefined.png" placeholder="{$i}" value="../img/material/undefined.png" onclick="image('img')" style="height: 350px; width: 350px"/>
                    <br>
                {elseif  $i eq 'Большая Картинка'}
                    <input type="image" class="form-control" id="big" src="../img/material/undefined.png" value="../img/material/undefined.png" onclick="image('big')" style="height: 350px; width: 350px"/>
                    <br>
                {elseif  $i eq 'Диапазон'}
                    <input type="text" class="form-control" id="name" placeholder="Диапазон (пример :10/12)"/>
                    <br>
                {elseif  $i eq 'Ограничение по высоте полотна'}
                    <input type="text" class="form-control" id="name" placeholder="Ограничение по высоте полотна (min/max : 100/140) мм."/>
                    <br>
                {elseif  $i eq 'Ограничение по ширине полотна'}
                    <input type="text" class="form-control" id="name" placeholder="Ограничение по ширине полотна (min/max : 100/140) мм."/>
                    <br>
                {else}
                    <input type="text" class="form-control" id="name" placeholder="{$i}"/>
                    <br>
                {/if}
            {/foreach}
            <div class="row">
                <div class="col-md-4">
                    <button class="btn btn-success btn-lg btn-block" id="submit" onclick="send()">Добавить</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-danger btn-lg" id="submit" onclick="reset()">Отменить</button>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
        <hr id="hr">
        <table class="table table-striped">
            <thead>

            <tr>
                {foreach $option as $i}
                    <td>{$i}</td>
                {/foreach}
            </tr>
            </thead>
            <tbody>
            {foreach $items as $key=>$i}
                <tr id="del{$key}">
                    {foreach $i as $item}
                        {if strripos($item,'.') eq true}
                            <td><img src="{$item}" class="img-responsive" width="140px" height="140px"></td>
                        {else}
                        <td>{$item}</td>
                        {/if}
                    {/foreach}
                    <td>
                        <button type="button" onclick="edit({$key})" class="btn btn-link" data-toggle="modal"
                                data-target="#myModal"><span class="glyphicon glyphicon-cog"></span></button>
                    </td>
                    <td>
                        <button type="button" onclick="del({$key})" class="btn btn-link "><span
                                    class="glyphicon glyphicon-remove"></span></button>
                    </td>
                </tr>
            {/foreach}
            </tbody>
        </table>
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
        var arr = '';
        $('.form-control').each(function () {
            arr += $(this).attr('placeholder') + '=' + $(this).val() + '&';
        });
        $.post('../admin/ajax.php?newF={$id}', arr, function (data) {
            location.reload();
        });
    }
    function del(id) {
        if (confirm("Вы хоти удалить данный элемент")) {
            $.get('../admin/ajax.php?delfurn1=' + id + '&id={$id}', function (data) {
                console.log(data);
            });
            $('#del' + id).html('');
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
    function edit(id) {
        document.location.href='./index.php?page=editfurn&id='+id+'&nid={$id}';
    }

</script>
<script src="../admin/assets/js/bootstrap.min.js"></script>
<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>
