/**
 * Created by Андрей on 24.01.2017.
 */
/**
 *  Объект хранит цены и делает подсчет общей цены в калькуляторе
 *  @author Andriy Goncharenko
 * @type {{Total: number, productionPercent: number, installationPercent: number, shippingPercent: number, urgencyPercent: number, marginPercent: number, productionRub: number, installationRub: number, shippingRub: number, urgencyRub: number, marginRub: number, pricecalculation: procPrice.pricecalculation}}
 */
var procPrice = {
    Total: 0,
    productionPercent: 0,
    installationPercent: 0,
    shippingPercent: 0,
    urgencyPercent: 0,
    marginPercent: 0,
    productionRub: 0,
    installationRub: 0,
    shippingRub: 0,
    urgencyRub: 0,
    marginRub: 0,
    pricecalculation: function (summ) {
        this.Total = parseInt(summ);
        $('.summaBezParametrov .price').text(this.Total);
        this.productionPercent = parseInt($('.proizvaodstvoIn input').val());
        this.installationPercent = parseInt($('.montazhIn input').val());
        this.shippingPercent = parseInt($('.dostavkaIn input').val());
        this.urgencyPercent = parseInt($('.srochnostIn input').val());
        this.marginPercent = parseInt($('.nashProtsentIn input').val());
        this.productionRub = parseInt($('.proizvaodstvoTo input').val());
        this.installationRub = parseInt($('.montazhTo input').val());
        this.shippingRub = parseInt($('.dostavkaTo input').val());
        this.urgencyRub = parseInt($('.srochnostTo input').val());
        this.marginRub = parseInt($('.nashProtsentTo input').val());

        if (isNaN(this.productionPercent)) {
            if (!isNaN(this.productionRub)) {
                this.Total = this.Total + this.productionRub;
            }
        } else {
            if (!isNaN(this.productionPercent)) {
                $('.proizvaodstvoTo input').val(parseInt(this.Total * this.productionPercent / 100));
                this.Total = this.Total + (this.Total * this.productionPercent / 100);
            }
        }
        if (isNaN(this.installationPercent)) {
            if (!isNaN(this.installationRub)) {
                if (this.installationRub < 3000) {
                    this.installationRub = 3000;
                    $('.montazhTo input').val(3000);
                }
                this.Total = this.Total + this.installationRub;
            }
        } else {
            if (!isNaN(this.installationPercent)) {
                if ((this.Total * this.installationPercent / 100) < 3000) {
                    this.installationRub = 3000;
                    $('.montazhTo input').val(3000);
                    this.Total = this.Total + 3000;
                } else {
                    $('.montazhTo input').val(parseInt(this.Total * this.installationPercent / 100));
                    this.Total = this.Total + (this.Total * this.installationPercent / 100);
                }
            }
        }
        if (isNaN(this.shippingPercent)) {
            if (!isNaN(this.shippingRub)) {
                this.Total = this.Total + this.shippingRub;
            }
        } else {
            if (!isNaN(this.shippingPercent)) {
                $('.dostavkaTo input').val(parseInt(this.Total * this.shippingPercent / 100));
                this.Total = this.Total + (this.Total * this.shippingPercent / 100);
            }
        }
        if (isNaN(this.urgencyPercent)) {
            if (!isNaN(this.urgencyRub)) {
                this.Total = this.Total + this.urgencyRub;
            }
        } else {
            if (!isNaN(this.urgencyPercent)) {
                $('.srochnostTo input').val(parseInt(this.Total * this.urgencyPercent / 100));
                this.Total = this.Total + (this.Total * this.urgencyPercent / 100);
            }
        }
        if (isNaN(this.marginPercent)) {
            if (!isNaN(this.marginRub)) {
                this.Total = this.Total + this.marginRub;
            }
        } else {
            if (!isNaN(this.marginPercent)) {
                $('.nashProtsentTo input').val(parseInt(this.Total * this.marginPercent / 100));
                this.Total = this.Total + (this.Total * this.marginPercent / 100);
            }
        }
        if (isNaN(this.Total)) {
            $('.summaSParametrami .price').text("0");
        } else {
            $('.summaSParametrami .price').text(parseInt(this.Total));
        }
    },
    getpricecalculation: function (summ) {
        this.Total = parseInt(summ);
        $('.summaBezParametrov .price').text(this.Total);
        this.productionPercent = parseInt($('.proizvaodstvoIn input').val());
        this.installationPercent = parseInt($('.montazhIn input').val());
        this.shippingPercent = parseInt($('.dostavkaIn input').val());
        this.urgencyPercent = parseInt($('.srochnostIn input').val());
        this.marginPercent = parseInt($('.nashProtsentIn input').val());
        this.productionRub = parseInt($('.proizvaodstvoTo input').val());
        this.installationRub = parseInt($('.montazhTo input').val());
        this.shippingRub = parseInt($('.dostavkaTo input').val());
        this.urgencyRub = parseInt($('.srochnostTo input').val());
        this.marginRub = parseInt($('.nashProtsentTo input').val());

        if (isNaN(this.productionPercent)) {
            if (!isNaN(this.productionRub)) {
                this.Total = this.Total + this.productionRub;
            }
        } else {
            if (!isNaN(this.productionPercent)) {
                $('.proizvaodstvoTo input').val(parseInt(this.Total * this.productionPercent / 100));
                this.Total = this.Total + (this.Total * this.productionPercent / 100);
            }
        }
        if (isNaN(this.installationPercent)) {
            if (!isNaN(this.installationRub)) {
                if (this.installationRub < 3000) {
                    this.installationRub = 3000;
                    $('.montazhTo input').val(3000);
                }
                this.Total = this.Total + this.installationRub;
            }
        } else {
            if (!isNaN(this.installationPercent)) {
                if ((this.Total * this.installationPercent / 100) < 3000) {
                    this.installationRub = 3000;
                    $('.montazhTo input').val(3000);
                    this.Total = this.Total + 3000;
                } else {
                    $('.montazhTo input').val(parseInt(this.Total * this.installationPercent / 100));
                    this.Total = this.Total + (this.Total * this.installationPercent / 100);
                }
            }
        }
        if (isNaN(this.shippingPercent)) {
            if (!isNaN(this.shippingRub)) {
                this.Total = this.Total + this.shippingRub;
            }
        } else {
            if (!isNaN(this.shippingPercent)) {
                $('.dostavkaTo input').val(parseInt(this.Total * this.shippingPercent / 100));
                this.Total = this.Total + (this.Total * this.shippingPercent / 100);
            }
        }
        if (isNaN(this.urgencyPercent)) {
            if (!isNaN(this.urgencyRub)) {
                this.Total = this.Total + this.urgencyRub;
            }
        } else {
            if (!isNaN(this.urgencyPercent)) {
                $('.srochnostTo input').val(parseInt(this.Total * this.urgencyPercent / 100));
                this.Total = this.Total + (this.Total * this.urgencyPercent / 100);
            }
        }
        if (isNaN(this.marginPercent)) {
            if (!isNaN(this.marginRub)) {
                this.Total = this.Total + this.marginRub;
            }
        } else {
            if (!isNaN(this.marginPercent)) {
                $('.nashProtsentTo input').val(parseInt(this.Total * this.marginPercent / 100));
                this.Total = this.Total + (this.Total * this.marginPercent / 100);
            }
        }
        if (isNaN(this.Total)) {
            return 0;
        } else {
            return this.Total;
        }
    }
};

$('#NUMBER_SETS_ID').on('keyup', function () {
    var p = parseInt($(this).attr('data-price'));
    if (isNaN(p)) {
        p = 0;
    }
    var c = parseInt($(this).val());
    if (isNaN(c)) {
        c = 0;
    }
    procPrice.pricecalculation(p * c);
});
