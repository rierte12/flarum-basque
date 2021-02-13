dayjs.locale({
	name: 'eu-EU',
	weekdays : 'Igandea_Astelehena_Asteartea_Asteazkena_Osteguna_Ostirala_Larunbata'.split('_'),
	weekdaysShort: 'IG_AL_AR__AK_OG_OA_LA'.split('_'),
	weekdaysMin: 'IG_AL_AR__AK_OG_OA_LA'.split('_'),
	months: 'Urtarrila_Otsaila_Martxoa_Apirila_Maiatza_Ekaina_Uztaila_Abuztua_Iraila_Urria_Azaroa_Abendua'.split('_'),
	monthsShort: 'Urt_Ots_Mar_Api_Mai_Eka_Uzt_Abu_Ira_Urr_Aza_Abe'.split('_'),
	weekStart: 1,
 	yearStart: 4,
	formats: {
		LT : 'HH:mm',
		LTS : 'HH:mm:ss',
		L : 'YYYY/MM/DD',
		LL : 'YYYY [(e)ko] MMMM [ren] D [(e)an]',
		LLL : 'YYYY [(e)ko] MMMM [ren] D HH:mm [(e)tan]',
		LLLL : 'dddd, D [de] MMMM [de] YYYY [a las] HH:mm'
	},
	calendar : {
		sameDay: '[Gaurko] LT',
		nextDay: '[Biharko] LT',
		nextWeek: 'dddd [en] LT',
		lastDay: '[Atzoa] LT [an]',
		lastWeek: function () {
			return (this.day() === 0 || this.day() === 6) ?
			'[Azkenik] dddd  LT [etan]' : // Saturday + Sunday
			'[Azkenik] dddd  LT [etan]'; // Monday - Friday
		},
		sameElse: 'L'
	},	
	relativeTime: {
		future : '%s barru',
		past : 'duela %s',
		s : 'segundu batzuk',
		m : 'minutu bat',
		mm : '%d minutu',
		h : 'ordu bat',
		hh : '%d ordu',
		d : 'egun bat',
		dd : '%d eun',
		M : 'hilabete bat',
		MM : '%d hilabete',
		y : 'urte bat',
		yy : '%d urte'
	},
 	ordinalParse: /\d{1,2}º/,
 	ordinal: n => `${n}.`	
})