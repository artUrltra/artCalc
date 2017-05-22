/**
 * Created by Андрей on 02.02.2017.
 */
window.States = {
    TopWidth: 0,
    TopHeight: 0,
    TopCountPoloten: 0,
    TopCountMovePoloten: 0,
    WidthProfil: 0,
    HeightProfil: 0,
    Flag: true,
    OptimalState: {
        Profile: '',
        ProfileId: 0,
        ProfilePrice: 0,
        HorizontalProfile: '',
        HorizontalProfileId: 0,
        HorizontalProfilePrice: 0,
        VerticalProfile: '',
        VerticalProfileId: 0,
        VerticalProfilePrice: 0,
        ArrayNameAddition: [],
        init: function(id) {
            States.initProfiles(id, States.OptimalState);
        },
        ArrayMaterials: []
    },
    EconomyState: {
        Profile: '',
        ProfileId: 0,
        ProfilePrice: 0,
        HorizontalProfile: '',
        HorizontalProfileId: 0,
        HorizontalProfilePrice: 0,
        VerticalProfile: '',
        VerticalProfileId: 0,
        VerticalProfilePrice: 0,
        ArrayNameAddition: [],
        ArrayMaterials: [],
        init: function(id) {
            States.initProfiles(id, States.EconomyState);
        }
    },
    PremiumState: {
        Profile: '',
        ProfileId: 0,
        ProfilePrice: 0,
        HorizontalProfile: '',
        HorizontalProfileId: 0,
        HorizontalProfilePrice: 0,
        VerticalProfile: '',
        VerticalProfileId: 0,
        VerticalProfilePrice: 0,
        ArrayNameAddition: [],
        ArrayMaterials: [],
        init: function(id) {
            States.initProfiles(id, States.PremiumState);
        }

    },
    initProfiles: function(id, obj) {
        var Profils = top.storage.p.filter(function(value) {
            return value.id == id;
        });
        obj.Profile = Profils[0].name;
        obj.ProfileId = Profils[0].id;
        obj.ProfilePrice = (States.WidthProfil + States.HeightProfil) * 0.002 * parseInt(Profils[0].price);
        var PH = top.storage.PaPHW.filter(function(value) {
            return value.id_profil == id;
        });
        var Premichka = top.storage.PHW.filter(function(value) {
            return value.id == PH[0].id_h;
        });
        obj.HorizontalProfile = Premichka[0].name;
        obj.HorizontalProfileId = Premichka[0].id;
        obj.VerticalProfile = Premichka[0].name;
        obj.VerticalProfileId = Premichka[0].id;
    },
    Slider: function(id, SliderId) {
        switch (parseInt(SliderId)) {
            case 1:
            {
                States.initProfiles(id, States.OptimalState);
                break;
            }
            case 2:
            {
                States.initProfiles(id, States.EconomyState);
                break;
            }
            case 3:
            {
                States.initProfiles(id, States.PremiumState);
                break;
            }

        }
    },
    initAddition: function(name, array) {
        array.push(name);
    },
    AdditionName: function(ArrayHtml) {
        States.OptimalState.ArrayNameAddition = [];
        States.EconomyState.ArrayNameAddition = [];
        States.PremiumState.ArrayNameAddition = [];
        ArrayHtml.each(function() {
            States.initAddition($(this).text(), States.OptimalState.ArrayNameAddition);
            States.initAddition($(this).text(), States.EconomyState.ArrayNameAddition);
            States.initAddition($(this).text(), States.PremiumState.ArrayNameAddition);
        });
    },
    PushMarerials: function(obj, index, state) {
        index++;
        switch (state) {
            case 0:
            {
                States.OptimalState.ArrayMaterials.splice(index, index, obj);

                break;
            }
            case 1:
            {
                States.EconomyState.ArrayMaterials.splice(index, index, obj);

                break;
            }
            case 2:
            {
                States.PremiumState.ArrayMaterials.splice(index, index, obj);

                break;
            }
        }
    },
    removeMaterials: function(id, state) {
        switch (state) {
            case 0:
            {
                delete States.OptimalState.ArrayMaterials.splice(id--, id--);

                break;
            }
            case 1:
            {
                delete States.EconomyState.ArrayMaterials.splice(id--, id--);

                break;
            }
            case 2:
            {
                delete States.PremiumState.ArrayMaterials.splice(id--, id--);

                break;
            }
        }
    }
}
