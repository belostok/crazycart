import datepicker from 'js-datepicker'

export default () => {
	const inputs = document.querySelectorAll('.js-cc-date-input');

	if ( ! inputs.length ) {
		return null;
	}

	inputs.forEach( ( input ) => {
		datepicker( input, {
			minDate: new Date(),
			position: 'br',
			startDay: 1,
			customDays: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
			customMonths: [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
			customOverlayMonths: [ 'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек' ],
			overlayButton: 'Выбрать',
			overlayPlaceholder: 'Год (4 цифры)',
			formatter: ( input, date, instance ) => {
				const year = date.getFullYear();
				let month  = date.getMonth() + 1;
				let day    = date.getDate();

				if ( ! year || ! month || ! day ) {
					return null;
				}

				if ( day < 10 ) {
					day = `0${ day }`;
				}

				if ( month < 10 ) {
					month = `0${ month }`;
				}

				input.value = `${ day }.${ month }.${ year }`;
			}
		} );
	} );
}
