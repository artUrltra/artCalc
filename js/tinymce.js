/**
 * Created by Андрей on 22.04.2017.
 */
tinymce.init({
    selector: '#text',
    height: 300,
    width: '100%',
    menubar: false,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code textcolor colorpicker'
    ],
    contextmenu: "link image inserttable | cell row column deletetable |My button",
    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image | fontselect fontsizeselect | tags | forecolor backcolor',
    setup: function (editor) {
        editor.addButton('tags', {
            type: 'menubutton',
            text: 'Теги',
            icon: false,
            menu: [{
                text: 'Имя клиента',
                onclick: function () {
                    editor.insertContent('&nbsp;#name&nbsp;')
                }
            },
                {
                    text: 'Ширина',
                    onclick: function () {
                        editor.insertContent('&nbsp;#w&nbsp;')
                    }
                }, {
                    text: 'Высота',
                    onclick: function () {
                        editor.insertContent('&nbsp;#h&nbsp;')
                    }
                }, {
                    text: 'Площядь',
                    onclick: function () {
                        editor.insertContent('&nbsp;#s&nbsp;')
                    }
                }, {
                    text: 'Количество полотен',
                    onclick: function () {
                        editor.insertContent('&nbsp;#p&nbsp;')
                    }
                }, {
                    text: 'Количество подвижных полотене',
                    onclick: function () {
                        editor.insertContent('&nbsp;#pm&nbsp;')
                    }
                }, {
                    text: 'Имя профиля',
                    onclick: function () {
                        editor.insertContent('&nbsp;#Profile&nbsp;')
                    }
                }, {
                    text: 'Матереалы',
                    onclick: function () {
                        editor.insertContent('&nbsp;#Matireals&nbsp;')
                    }
                }, {
                    text: 'Цена материалов',
                    onclick: function () {
                        editor.insertContent('&nbsp;#MatirealsPrice&nbsp;')
                    }
                }, {
                    text: 'Цена материалов  с процентами',
                    onclick: function () {
                        editor.insertContent('&nbsp;#MatirealsPriceP&nbsp;')
                    }
                }]
        });

    },
    content_css: '//www.tinymce.com/css/codepen.min.css'
});
