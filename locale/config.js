// Includes code from Moment.js (https://github.com/moment/moment/blob/develop/locale/es.js)

app.translator.plural = function(count) {
  return count == 1 ? 'one' : 'other';
};

var monthsShortDot = 'Urt._Ots._Mar._Api._Mai._Eka._Uzt._Abu._Ira._Urr._Aza._Abe.'.split('_');
var monthsShort = 'Urt_Ots_Mar_Api_Mai_Eka_Uzt_Abu_Ira_Urr_Aza_Abe'.split('_');

moment.locale('eu', {
        months : 'Urtarrila_Otsaila_Martxoa_Apirila_Maiatza_Ekaina_Uztaila_Abuztua_Iraila_Urria_Azaroa_Abendua'.split('_'),
        monthsShort : function (m, format) {
            if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        weekdays : 'Igandea_Astelehena_Asteartea_Asteazkena_Osteguna_Ostirala_Larumbata'.split('_'),
        weekdaysShort : 'Igan._Astel._Astear._Asteaz._Oste._Osti._Lurun.'.split('_'),
        weekdaysMin : 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY [(e)ko] MMMM [ren] D [a]',
            LLL : 'YYYY [(e)ko] MMMM [ren] D [an] H:mmv[etan]',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [a las] H:mm'
        },
        calendar : {
            sameDay : function () {
                return 'gaurko' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[biharko' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[atzoki' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [etziko' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s buru',
            past : 'hace %s',
            s : 'degundu batzuk',
            m : 'minuto bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d meses',
            y : 'urte bat',
            yy : '%d urte'
        },
        ordinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });