var _ = require("underscore");

module.exports = function() {
    var exports = {};

    exports.test_chart = null;

    exports.calculateTest = function(answers) {
        check_state();

        var answers_map = exports.test_chart.questions,
            AdaptedBehaivorCount = {'D': 0, 'I': 0, 'S': 0, 'C': 0, 'B': 0},
            NaturalBehaivorCount = {'D': 0, 'I': 0, 'S': 0, 'C': 0, 'B': 0};

        _(answers).each(function(answer, question_id) {
            if(typeof answer != 'object') return;
            var answer_map = answers_map[question_id].options;

            AdaptedBehaivorCount[answer_map[answer.M].M]++;
            NaturalBehaivorCount[answer_map[answer.Me].Me]++;
        });

        var AdaptedBehaivor = MapAdaptedBehaivorCout(AdaptedBehaivorCount),
            NaturalBehaivor = MapNaturalBehaivorCout(NaturalBehaivorCount);

        return {
            'adapted_behaivor': AdaptedBehaivor,
            'natural_behaivor': NaturalBehaivor,

            'conclusion': 'Nuestros expertos han recibido tu prueba, muy pronto te mandarán un PDF con tus resultados personalizados.',
        };
    };

    function check_state() {
        if(exports.test_chart === null) {
            throw new Error("test_chart field not defined.");
        }
    }

    function CubicRegression3rdO(a, b, c, d) {
        return function(x) { return a + b * x + c * Math.pow(x, 2) + d * Math.pow(x, 3); };
    }

    var Map_Adapted_D = CubicRegression3rdO(6.941835, -0.6409289, 0.01532384, -0.00002797877),
        Map_Adapted_I = CubicRegression3rdO(6.978212, -1.028682, 0.04464672, -0.0004869362),
        Map_Adapted_S = CubicRegression3rdO(6.20578, -0.6392854, 0.01015474, 0.000329392),
        Map_Adapted_C = CubicRegression3rdO(7.055973, -1.184094, 0.05056005, -0.0001955008);

    var Map_Natural_D = CubicRegression3rdO(0.08754149, 0.6851999, -0.02156914, 0.0002279525),
        Map_Natural_I = CubicRegression3rdO(-0.009012491, 0.8717241, -0.03384881, 0.0003781125),
        Map_Natural_S = CubicRegression3rdO(0.06530035, 0.4212965, 0.02740773, -0.001595986),
        Map_Natural_C = CubicRegression3rdO(0.1009704, 0.4377503, 0.02171936, -0.00136561);

    function MapAdaptedBehaivorCout(count) {
        var factor = 1 / 7 * 100;

        var AdaptedBehaivor = {
            'D': (7 - Map_Adapted_D(count['D'])) * factor,
            'I': (7 - Map_Adapted_I(count['I'])) * factor,
            'S': (7 - Map_Adapted_S(count['S'])) * factor,
            'C': (7 - Map_Adapted_C(count['C'])) * factor
        };

        return AdaptedBehaivor;
    }

    function MapNaturalBehaivorCout(count) {
        var factor = 1 / 7 * 100;

        var NaturalBehaivor = {
            'D': (7 - Map_Natural_D(count['D'])) * factor,
            'I': (7 - Map_Natural_I(count['I'])) * factor,
            'S': (7 - Map_Natural_S(count['S'])) * factor,
            'C': (7 - Map_Natural_C(count['C'])) * factor
        };

        return NaturalBehaivor;
    }

    return exports;
};


