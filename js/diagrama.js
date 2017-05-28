let diagrama = {


        // отрисовка блоков
        painting: function () {
            $('#PAINTING-DIAGRAMMA').html("");
            for (i = 1; i <= info.count; i++) {
                let top = 100;
                let left = info.paintWidth / 10 * i;
                $('#PAINTING-DIAGRAMMA').append('<div class="drag PAINTING-DIAGRAMMA-EL" style="width: ' + info.paintWidth / 10 + 'px; height: ' + info.paintHeight / 10 + 'px; left:' + left + 'px;top:' + top + 'px;">');
            }
            $(".PAINTING-DIAGRAMMA-EL").resizable({
                containment: '#PAINTING-DIAGRAMMA',
                handles: 'n,e,s,w,se',
                maxHeight: parseInt($('#HIGHT_SETS_ID').val() / 10),
                maxWidth: parseInt($('#WIDTH_SETS_ID').val()) / 10,
                resize: function (event, ui) {
                },
            });
            $(".drag").draggable({
                containment: "#PAINTING-DIAGRAMMA",
                snap: true,
                snapMode: "both"
            });
        }
    }
;
