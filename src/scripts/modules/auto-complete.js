import autoComplete from '@tarekraafat/autocomplete.js';

export default () => {
	const items = document.querySelectorAll('.js-cc-auto-complete');
	let autoCompletes = [];
	let locations = document.getElementById( 'cc-location-addresses' );
	locations     = locations?.value;

	if ( ! locations || ! items.length ) {
		return null;
	}

	locations = locations.split( '|' );

	if ( ! Array.isArray( locations ) || ! locations.length ) {
		return null;
	}

	items.forEach( ( item, i ) => {
		autoCompletes[i] = new autoComplete( {
			selector: `.js-cc-auto-complete_${i}`,
			wrapper: false,
			data: {
				src: locations,
				cache: true,
			},
			resultsList: {
				element: ( list, data ) => {
					if ( ! data.results.length ) {
						// Create "No Results" message element
						const message = document.createElement( 'div' );
						// Add class to the created element
						message.setAttribute( 'class', 'cc-no-result' );
						// Add message text content
						message.innerHTML = `<span>Для "${ data.query }" результатов не найдено</span>`;
						// Append message element to the results list
						list.prepend( message );
					}
				},
				noResults: true
			},
			trigger: ( query ) => {
				return true
			},
			events: {
				input: {
					focus: ( event ) => {
						autoCompletes[i].start();
					},
					selection: ( event ) => {
						autoCompletes[i].input.value = event.detail.selection.value;
					}
				}
			},
		} );
	} );
}
