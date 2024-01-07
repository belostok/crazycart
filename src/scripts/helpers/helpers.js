export function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

export function addClasses( container, active, prepare = '', timeout = 0 ) {
	if ( ! container.classList.contains( active ) ) {
		container.classList.add( prepare );
		setTimeout( () => container.classList.add( active ), timeout );
	}
}

export function removeClasses( container, active, prepare = '', timeout = 300 ) {
	if ( container.classList.contains( active ) ) {
		container.classList.remove( active );
		setTimeout( () => container.classList.remove( prepare ), timeout );
	}
}
