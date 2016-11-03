//*************** by nPu3ePBaTuB
//*************** for vip

window.onload = function() {
    loadImgFull();
    setTimeout(function() {
        var script = document.createElement('script');
        script.src = "js/x3dom.js";
        document.body.appendChild(script);
    }, 2000);
    setTimeout(function() {
        load3Dtxt();
    }, 2000);
};

function loadImgFull() {
    $("img").each(function () {
        var src = $(this).attr("img");
        $(this).attr("src", src);
        $(this).removeAttr("img");
    });
}

function load3Dtxt() {
    var array = ['Statusx1', 'Statusx2', 'Optima', 'Optimax2', 'Base', 'MobyLight', 'Standart', 'StandartStoika', 'OptimaLite', 'Euroshop', 'EuroshopLite', 'Tur'];
    var length = array.length;
    for (var i = 0; i < length; i++) {
        var name = array[i];
        var url = "img/3d/" + name + ".txt";
        $.ajax({
            url: url,
            //async: false,
            success: function (data) {
                $(".display-none").append(data);
            }
        });
    }
}