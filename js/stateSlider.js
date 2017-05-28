let state = {

// checkManager
    checkManager: function () {
        let name = state.checkManagerGetCookie("name");
        let password = state.checkManagerGetCookie("password");

        if (state.checkManagerGetCookie("name") !== undefined) {
            let item = storage.managers.find(function (v) {
                return v.name.indexOf(name) >= 0;
            });
            if (item) {
                $("#manegerPass").val(password);
                state.checkManagerShow();
                $('#calcmanager').val(item.id);
            }
        } else {
            state.checkManagerHide();
        }
    }
    ,
    checkManagerHide: function () {
        $(".managerBtn").hide(100);
        $("#manegerPass, #checkManagerPass ,#labelmanegerPass").show(100);
    }
    ,
    checkManagerShow: function () {
        $(".managerBtn").show(100);
        $("#manegerPass, #checkManagerPass, #labelmanegerPass").hide(100);
        $("#manegerPass").val("");
    }
    ,
    checkManagerPass: function () {
        let manegerName = $("#calcmanager option:selected").text();
        let manegerPass = $("#manegerPass").val();
        let truePass = "";
        let manegerAll = $.ajax({type: "GET", url: './admin/ajax.php?selectCalcManagers', async: false}).responseText;
        manegerAll = JSON.parse(manegerAll);
        for (let i = 0; i < manegerAll.length; i++) {
            if (manegerAll[i].name == manegerName) {
                truePass = manegerAll[i].pass;
            }
        }
        if (truePass !== manegerPass) {
            alert("Пароль не верный!");
        }
        else {
            state.checkManagerSetCookie("name", manegerName);
            state.checkManagerSetCookie("password", truePass);
            state.checkManagerShow();
        }
        ;
    }
    ,
    checkManagerGetCookie: function (name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    ,
    checkManagerSetCookie: function (name, cookie) {
        document.cookie = name + "=" + cookie;
    }, initCalcManagers: function () {
        $("#calcmanager").empty();
        storage.managers.forEach(function (v) {
            $("#calcmanager").prepend($('<option value="' + v.id + '">' + v.name + '</option>'));
        });

    }
};