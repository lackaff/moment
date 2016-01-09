//! moment.js locale configuration
//! locale : ireland irish (ga)
//! author : Derek Lackaff (+ help :): https://github.com/jonashdown

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['moment'], factory) :
   factory(global.moment)
}(this, function (moment) { 'use strict';


    var months = [
        'Éanair', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhar', 'Deireadh Fómhar', 'Samhain', 'Nollaig'
    ];

    var monthsShort = ['Éan', 'Fea', 'Már', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'M Fó', 'D Fó', 'Samh', 'Nol'];

    var weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'];

    var weekdaysShort = ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'];

    var weekdaysMin = ['Do', 'Lu', 'Mà', 'Cé', 'Dé', 'Ao', 'Sa'];

    var gd = moment.defineLocale('gd', {
        months : months,
        monthsShort : monthsShort,
        monthsParseExact : true,
        weekdays : weekdays,
        weekdaysShort : weekdaysShort,
        weekdaysMin : weekdaysMin,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Inniu ag a] LT',
            nextDay : '[Amárach ag a] LT',
            nextWeek : 'dddd [ag] LT',
            lastDay : '[Inné ag] LT',
            lastWeek : 'dddd [seo caite] [ag] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'i gceann %s',
            past : '%s o shoin',
            s : 'cúpla soicind',
            m : 'nóiméad',
            mm : '%d nóiméad',
            h : 'uair',
            hh : '%d uair',
            d : 'lá',
            dd : '%d lá',
            M : 'mí',
            MM : '%d mhí',
            y : 'bliana',
            yy : '%d bliain'
        },
        ordinalParse : /\d{1,2}(d|na|mh)/,
        ordinal : function (number) {
            var output = number === 1 ? 'ú' : number % 10 === 2 ? 'ú' : 'ú';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return gd;

}));
