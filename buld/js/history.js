// // alert();
// var history = {};
//
// person['любимый стиль музыки'] = 'Джаз';
// function saveHistory() {
//     var list=document.getElementsByTagName("INPUT");
//     for (var i=0; i<list.length; i++)
//     {
//         var name=list[i].name;
//         var value=list[i].value;
//         console.log(list[i].name);
//         console.log(list[i].value);
//     }
// }
// $( '.saveHistory' ).click(function () {
//     saveHistory()
// });

// var karkasNamePlasPrice = [];
// function getKarkasNameAndPrice() {
//     var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
//     // data-karkas-price
//     for (i = 1; i <= TOTAL_PAINTING; i++) {
//         var kp = $('*[data-id="' + i + '"]').attr('data-karkas-price');
//         var kn = $('*[data-id="' + i + '"]').attr('data-karkas-name');
//         var pm = parseInt($('*[data-id="' + i + '"]').attr('data-width')) + parseInt($('*[data-id="' + i + '"]').attr('data-height'));
//
//     }
//     var n = 4, m = 4;
//     var mas = new Array(n);
//
//     for (var i = 0; i <= TOTAL_PAINTING; i++) {
//         mas[i] = new Array(m);
//     }
//     for (var i = 0; i < m; i++) {
//
//         mas[i][1] = $('*[data-id="' + i + '"]').attr('data-karkas-price');
//         mas[i][2] = $('*[data-id="' + i + '"]').attr('data-karkas-name');
//         mas[i][3] = parseInt($('*[data-id="' + i + '"]').attr('data-width')) + parseInt($('*[data-id="' + i + '"]').attr('data-height'));
//     }
// }




//
//
//
////
//var m = [];
//var m2 = [];
// function newArr() {
//
//     var TOTAL_PAINTING = parseInt($('#TOTAL_PAINTING_ID').val());
//     if (isNaN(TOTAL_PAINTING)){
//         TOTAL_PAINTING = 0;
//     }
//     // =
//     // - Создали внутренние массивы
//     if (TOTAL_PAINTING > 0){
//         for (i = 0; i <= TOTAL_PAINTING-1; i++) {
//             m[i] = new Array(4);
//         }
//     }
//     // =
//     // - Массив со всеми данными
//     for (var i = 0; i < TOTAL_PAINTING; i++) {
//
//         var karkasName = $('*[data-id=' + (i + 1) + ']').find('.karkas-name').text();
//         if (karkasName == 'Optimax2') {
//             selectedKarkas = 'OptimaхTwo';
//         } else if (karkasName == 'Statusx1') {
//             selectedKarkas = 'StatusхOne';
//         } else if (karkasName == 'Statusx2') {
//             selectedKarkas = 'StatusхTwo';
//         } else {
//             selectedKarkas = karkasName;
//         }
//
//         m[i][0] = selectedKarkas;
//         m[i][1] = parseInt($('*[data-id="' + (i + 1 ) + '"]').attr('data-karkas-price') );
//         m[i][2] = parseInt($('*[data-id="' + (i + 1 ) + '"]').attr('data-width') ) + parseInt(( $('*[data-id="' + (i + 1 ) + '"]').attr('data-height'))) ;
//         m[i][3] =
//             $('*[data-id="' + (i + 1 ) + '"]').attr('data-karkas-tsvet-uplotnitelya') + ',' +
//             $('*[data-id="' + (i + 1 ) + '"]').attr('data-karkas-tsvet-zaglushki') + ',' +
//             $('*[data-id="' + (i + 1 ) + '"]').attr('data-karkas-tsvet-zaglushki-tortsevoy') + ',' +
//             $('*[data-id="' + (i + 1 ) + '"]').attr('data-karkas-vid-krepleniya');
//     }
//     for (var i = 0; i < TOTAL_PAINTING; i++) {
//         if (m2.length == 0){
//             m2.push(m[i][0]);
//             m2.push(m[i][1]);
//             m2.push(m[i][2]);
//             m2.push(m[i][3]);
//         }
//         else {
//             var status = true;
//             var price = 0;
//             for (var j = 0; j < m2.length; j++) {
//                 if (m2[j] == m[i][0]) {
//                     for (var g = m2.length; g >= 0; g--) {
//                         if (m2[g] == m[i][0]){
//                             m2[j+1] = parseInt(m2[j+1]) + parseInt(m[i][1]);
//                             m2[j+2] = parseInt(m2[j+2]) + parseInt(m[i][2]);
//                         }
//                     }
//                     status = false;
//                 }
//             }
//             if (status == true){
//                 m2.push(m[i][0]);
//                 m2.push(m[i][1]);
//                 m2.push(m[i][2]);
//                 m2.push(m[i][3]);
//             }
//         }
//     }
//     for(var i = 0; i<= m2.length; i=i+3){
//         console.log( '--------------------' )
//         console.log( i, m2[i] )
//         console.log( i, m2[i+1] )
//         console.log( i, m2[i+2] )
//         console.log( '--------------------' )
//     }
// }
function loadMoadP(){
    var text = $('.ss').html();
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html("");
    $('#DIAGRAMMA-DIALOG-WINDOW .modal-body').html(text);
    $("#DIAGRAMMA-DIALOG-WINDOW").modal('toggle');
}