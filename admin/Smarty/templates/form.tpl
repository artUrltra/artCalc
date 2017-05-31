<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Редактор формул</title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
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
            <div class="col-xs-12 col-sm-6 col-md-8"><h2>Редактор формул</h2></div>
        </div>
        <hr id="hr">
        <div class="input-group input-group-lg">
            <input type="text" id="str" class="form-control" disabled>
            <div class="input-group-btn">
                <button class="btn btn-default" type="button" id="remove">
                        <span class="glyphicon glyphicon-remove" id="basic-addon2">
                </button>
                <button class="btn btn-default" type="button" id="save">
                    Сохранить
                </button>
            </div>
        </div>
        <select id="flag" class="form-control">
            <option>Поштучно</option>
            <option>Погонные метры</option>
        </select>
        <hr>
        <div class="input-group">
            <input type="text" class="form-control" id="form" placeholder="">
            <span class="input-group-btn">
        <button class="btn btn-default" type="button" id="submit">Добавить</button>
      </span>
        </div>
        <hr>
        <div class="table-responsive">
            <table class="table table-hover" id="result">
                <thead>
                <th>Название</th>
                <th>Формула</th>
                <th>Тип</th>
                </thead>
                <tbody>
                {foreach $items as $item}
                    <tr id="{$item['id']}">
                        <td>{$item['name']}</td>
                        <td>{$item['formula']}</td>
                        <td>{$item['type']}</td>
                        <td>
                            <button type="button" onclick="delete1({$item['id']})" class="btn btn-link "><span
                                        class="glyphicon glyphicon-remove"></span></button>
                        </td>
                    </tr>
                {/foreach}
                </tbody>
            </table>
        </div>
    </div>

    {*Modal dialog*}
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <form id="modalform">
                        Название для формулы<br/>
                        <input type="text" class="form-control" id="save_name" placeholder="Название"/>
                        Формула:<br/>
                        <input type="text" class="form-control" id="save_formula"
                               placeholder=""/ disabled>
                        <div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" id="save_exit" class="btn btn-default" data-dismiss="modal">Отмена</button>
                    <button type="button" id="save_submit" class="btn btn-primary">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
    <button id="b1" data-toggle="modal" data-target="#myModal"></button>
    <!-- Scripts -->
    <script src="../admin/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="../admin/assets/js/bootstrap.min.js"></script>
    <script>
        var projects = [
            {
                label: "Width",
                desc: "Описание : Общая ширина",
            },
            {
                label: "Price",
                desc: "Описание : Цена",
            },
            {
                label: "Hight",
                desc: "Описание : Высота Конструкции",
            }, {
                label: "Count",
                desc: "Описание : Кол-во полотен",
            },
            {
                label: "CountMobilityPaintings",
                desc: "Описание : Кол-во подвижных полотен",
            }, {
                label: "WidthPainting",
                desc: "Описание : Ширина полотна = Общая ширина / Кол-во полотен",
            }, {
                label: "WidthDesign",
                desc: "Описание : Ширина подвижной части конструкции = Щирина полотна * Кол-во подвижных полотен",
            }, {
                label: "LengthGguide",
                desc: "Описание : Длина направляющей у раздвижной перегородки = подвижных полотен * 2 +5%",
            }
            ,
            {
                label: "*",
                desc: "Описание : Умножения",
            },
            {
                label: "CountProfilH",
                desc: "Описание : Кол-во вертикальных перемычек",
            },
            {
                label: "CountProfilW",
                desc: "Описание : Кол-во горизонтальных перемычек ",
            }, {
                label: "/",
                desc: "Описание : Деления",
            }, {
                label: "+",
                desc: "Описание : Прибовления",
            }, {
                label: "-",
                desc: "Описание : Отнимание",
            }, {
                label: "(",
                desc: "Описание : Скобка",
            }, {
                label: ")",
                desc: "Описание : Скобка",
            }
        ];
        $(function () {

            $("#form").autocomplete({
                minLength: 0,
                source: projects,
                focus: function (event, ui) {
                    $("#form").val(ui.item.label);
                    return false;
                },
                select: function (event, ui) {
                    $("#form").val(ui.item.label);

                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<div>" + item.label + "<br>" + item.desc + "</div>")
                    .appendTo(ul);
            };
        });

        $('#submit').on("click", function () {
            var flag = 0;
            for (var i = 0; i < projects.length; i++) {
                if (typeof($("#form").val()) == "string") {
                    if ($("#form").val() == projects[i].label) {
                        $('#str').val($('#str').val() + projects[i].label);
                        console.log(projects[i].label + " : " + projects[i].desc);
                    }
                }
                else {
                    flag = 1;
                }
            }

            var int = parseFloat($("#form").val());
            if (isNaN(int)) {
                $("#form").val("");
            } else {
                $('#str').val($('#str').val() + int);
                $("#form").val("");
                console.log('Namber :' + int);
            }


        });


        $('#remove').on('click', function () {
            console.log('Remove :' + $('#str').val());
            $('#str').val('');
        });
        $('#save').on('click', function () {
            $('#save_formula').val('');
            var test = testing($('#str').val());
            if (isNaN(test)) {
                test = 0;
            }
            if (test == 0) {
                alert('Ошыбка в формуле');
            } else {
                $('#b1').hide();
                $('#b1').click();
                $('#save_formula').val($('#str').val());
            }
        });

        function testing(text) {
            var Width = 1000;
            var Price = 100;
            var Hight = 50;
            var Count = 1000;
            var CountMobilityPaintings = 1100;
            var WidthPainting = 10100;
            var WidthDesign = 11100;
            var LengthGguide = 111100;
            try {
                var result = eval(text);
            } catch (erroe) {
                result = 0;
            }
            return Math.round(result);
        }

        function delete1(id) {
            $.post("../admin/ajax.php?delete=delete11", {
                id: id
            });
            $('#' + id).remove();
            console.log('Delete item id =' + id);
        }
        ;
        $('#save_submit').on('click', function () {
                var index = 0;
                if ($("#save_name").val() == '') {
                    $("#save_name").css("border-color", '#ff0000');
                    index = 1;
                } else {
                    $("#save_name").css("border-color", '#ccc');
                }
                if ($("#save_formula").val() == '') {
                    $("#save_formula").css("border-color", '#ff0000');
                    index = 1;
                } else {
                    $("#save_formula").css("border-color", '#ccc');
                }
                switch (index) {
                    case 0: {
                        var data = {
                            name: $("#save_name").val(),
                            formula: $("#save_formula").val(),
                            type: $("#flag").val()
                        };
                        $.post("../admin/ajax.php?add=add12", data, function (data) {
                            location.reload();
                        });
                        $('#save_exit').click();
                        $('#save_name').val('');
                        $('#save_formula').val('');
                        $('#str').val('');
                        break;
                    }
                    case 1: {
                        alert('Пожалуйста заполните все поля');
                    }
                }
            }
        );

    </script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../admin/assets/js/ie10-viewport-bug-workaround.js"></script>
</body>
</html>