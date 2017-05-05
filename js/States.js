/**
 * Created by Андрей on 02.02.2017.
 */
let states = {
    TopWidth: 0,
    TopHeight: 0,
    TopCount: 0,
    TopCountMove: 0,
    TopArea: 0,
    f: true,
    i: 0,
    init (){
        if (this.TopWidth > 0 && this.TopHeight > 0 && this.TopCount > 0) {

            this.TopArea = this.TopWidth * this.TopHeight / 1000000;

            $('#AREA_ID').text(this.TopArea.toFixed(1));
            $('.TAB-PROFIL-AREA').text((this.TopArea / this.TopCount).toFixed(1));
            if (this.f) {
                let $b = $(".BAFFLE_SEKECTOR_CLASS");
                $b.empty();
                for (let i = 1; i <= this.TopCount; i++) {
                    if (i <= this.TopCountMove) {
                        $b.prepend($('<option value="' + i + '">подвижные № ' + i + '</option>'));
                    } else {
                        $b.prepend($('<option value="' + i + '">' + '№ ' + i + '</option>'));
                    }
                }


                let i = 0;
                let w = this.TopWidth / this.TopCount;
                this.arr = [];

                while (i < this.TopCount) {
                    this.arr.push({
                        id: i,
                        hp: this.TopHeight,
                        wp: w,
                        p: {}
                    });
                    i++;
                }
                profiles.setProfile(storage.pS);
                this.f = false;
            }
        }
    },
};
$('#HIGHT_SETS_ID').on('keyup change', function () {
    states.TopHeight = parseInt($(this).val());
    states.init();
});
$('#WIDTH_SETS_ID').on('keyup change', function () {
    states.TopWidth = parseInt($(this).val());
    states.init();
});
$('#TOTAL_PAINTING_ID').on('keyup change', function () {
    states.TopCount = parseInt($(this).val());
    states.f = true;
    states.init();
});
$('#MOVABLE_PAINTING_ID').on('keyup change', function () {
    states.TopCountMove = parseInt($(this).val());
    states.f = true;
    states.init();
});
$('.BAFFLE_SEKECTOR_CLASS').on('change', function () {
    states.i = ParserIntAndNan($(this).val()) - 1;
});

$("#tab-profil-peremyichki-horizontal-shtuk").on('keyup change', function () {
    states.arr[states.i].ph.c = ParserIntAndNan($(this).val());
    prbloksp();
});
$("#tab-profil-v-peremyichki-shtuk").on('keyup change', function () {
    states.arr[states.i].pw.c = ParserIntAndNan($(this).val());
    prbloksp();
});
