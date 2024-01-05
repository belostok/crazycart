import Inputmask from 'inputmask';
const Imask = Inputmask.default || Inputmask;

export default () => {
	const phones = document.querySelectorAll('._phone');

	if ( phones.length ) {
		phones.forEach((phone) => {
			Imask('+7 999 999 99 99', { placeholder: ' ', showMaskOnHover: false }).mask(phone);
		});
	}
}
