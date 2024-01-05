import autoComplete from '@tarekraafat/autocomplete.js';

export default () => {
	let locations = document.getElementById( 'cc-location-addresses' );
	locations     = locations?.value;

	if ( ! locations ) {
		return null;
	}

	locations = locations.split( '|' );

	if ( ! Array.isArray( locations ) || ! locations.length ) {
		return null;
	}

	const autoCompleteJS = new autoComplete( {
		selector: '.js-cc-auto-complete',
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
			noResults: true,
		},
		trigger: (query) => { return true },
		events: {
			input: {
				focus: ( event ) => {
					autoCompleteJS.start();
				},
				selection: ( event ) => {
					autoCompleteJS.input.value = event.detail.selection.value;
				}
			}
		},
	} );
}
