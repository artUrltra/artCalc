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
                    text: 'Оптимальный Профиль',
                    onclick: function () {
                        editor.insertContent('&nbsp;#Profile&nbsp;')
                    }
                }, {
                    text: 'Эконом Профиль',
                    onclick: function () {
                        editor.insertContent('&nbsp;#EconomProfile&nbsp;')
                    }
                }, {
                    text: 'Премиум Профиль',
                    onclick: function () {
                        editor.insertContent('&nbsp;#PremiumProfile&nbsp;')
                    }
                }, {
                    text: 'Оптимальный Матереалы',
                    onclick: function () {
                        editor.insertContent('&nbsp;#Matireals&nbsp;')
                    }
                }, {
                    text: 'Эконом Матереалы',
                    onclick: function () {
                        editor.insertContent('&nbsp;#EconomMatireals&nbsp;')
                    }
                }, {
                    text: 'Премиум Матереалы',
                    onclick: function () {
                        editor.insertContent('&nbsp;#PremiumMatireals&nbsp;')
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
                }, {
                    text: 'Тип конструкци',
                    onclick: function () {
                        editor.insertContent('&nbsp;#type&nbsp;')
                    }
                }, {
                    text: 'Цена за экономную сборку',
                    onclick: function () {
                        editor.insertContent('&nbsp;#EconomPrice&nbsp;')
                    }
                }, {
                    text: 'Цена за оптимальную сборку',
                    onclick: function () {
                        editor.insertContent('&nbsp;#OptimalPrice&nbsp;')
                    }
                }, {
                    text: 'Цена за премиум сборку',
                    onclick: function () {
                        editor.insertContent('&nbsp;#FyllPrice&nbsp;')
                    }
                }, {
                    text: 'Экономном производител фурнитуры',
                    onclick: function () {
                        editor.insertContent('&nbsp;#EconomFurn&nbsp;')
                    }
                }, {
                    text: 'Оптимальную производител фурнитуры',
                    onclick: function () {
                        editor.insertContent('&nbsp;#OptimalFurn&nbsp;')
                    }
                }, {
                    text: 'Премиум производител фурнитуры',
                    onclick: function () {
                        editor.insertContent('&nbsp;#FyllFurn&nbsp;')
                    }
                }]
        });
    },
    content_css: '//www.tinymce.com/css/codepen.min.css'
});
