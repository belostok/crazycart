export default () => {
	const forms   = document.querySelectorAll( '.js-cc-form' );
	const focusCl = 'cc-input_focus';

	if ( ! forms.length ) {
		return null;
	}

	const emailTest = (i) =>
		! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test( i.value );

	const formAddError = (i) => {
		i.parentElement.classList.add( '_error' );
		i.classList.add( '_error' );
	}

	const formRemoveError = (i) => {
		i.parentElement.classList.remove( '_error' );
		i.classList.remove( '_error' );
	}

	const formValidate = (f) => {
		let error = 0;
		const req = f.querySelectorAll( '._req' );
		for ( let i = 0; i < req.length; i++ ) {
			const input = req[ i ];
			formRemoveError( input );
			if ( input.classList.contains( '_email' ) ) {
				if ( emailTest( input ) ) {
					formAddError( input );
					error++;
				}
			} else if ( input.classList.contains( '_name' ) ) {
				if ( input.value.length < 2 ) {
					formAddError( input );
					error++;
				}
			} else if ( input.classList.contains( '_phone' ) ) {
				if ( input.value.length < 12 ) {
					formAddError( input );
					error++;
				}
			} else if ( input.getAttribute( 'type' ) === 'checkbox' &&
				input.checked === false ) {
				formAddError( input );
				error++;
			}
		}
		return error;
	}

	const formSend = async (e) => {
		e.preventDefault();
		const form     = e.target;
		const error    = formValidate( form );
		const formData = new FormData( form );

		if ( error === 0 ) {
			form.classList.add( '_sending' );
			const response = await fetch( '/assets/dist/assets/mail.php', {
				method: 'POST',
				body: formData
			} )
			if ( response.ok ) {
				// const result = await response.json()

				form.reset();
				form.classList.remove( '_sending' );
			} else {
				form.classList.remove( '_sending' );
			}
		} else {
			console.error( 'validation error' );
		}
	}

	forms.forEach( ( form ) => {
		form.addEventListener('submit', formSend);

		const items = form.querySelectorAll( '.js-cc-label' );

		if ( ! items.length ) {
			return null;
		}

		items.forEach( ( item ) => {
			const input = item.querySelector( '.js-cc-input' );

			if ( ! input ) {
				return null;
			}

			input.addEventListener( 'focus', () => {
				if ( ! item.classList.contains( focusCl ) ) {
					item.classList.add( focusCl );
				}
			} );

			input.addEventListener( 'blur', () => {
				if ( item.classList.contains( focusCl ) && ! input.value ) {
					item.classList.remove( focusCl );
				}
			} );
		} );
	} );
}

