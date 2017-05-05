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
    arr: [],
    init (){
        if (this.TopWidth > 0 && this.TopHeight > 0 && this.TopCount > 0) {

            this.TopArea = this.TopWidth * this.TopHeight / 1000000;

            $('#AREA_ID').text(this.TopArea.toFixed(1));
            $('.TAB-PROFIL-AREA').text((this.TopArea / this.TopCount).toFixed(1));

            if (this.f) {
                let i = 0;
                let w = this.TopWidth / this.TopCount;
                while (i < this.TopCount) {
                    this.arr.push({
                        id: i,
                        hp: this.TopHeight,
                        wp: w,
                        p: {}
                    });
                    i++;
                }
                this.f = false;
            }
            console.log(this);
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
    states.init();
});
$('#MOVABLE_PAINTING_ID').on('keyup change', function () {
    states.TopCountMove = parseInt($(this).val());
    states.init();
});