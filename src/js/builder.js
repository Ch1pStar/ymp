class Builder {

	constructor() {
		console.log('жакпот билдер');

		this._initAddPot();
	}

	_initAddPot() {
		const addPot = document.querySelector('.add-pot');
		const potsConfigCcontainer = document.querySelector('.input-box-container.pots-config');
		const potTemplate = document.querySelector('.pot-container');

		addPot.addEventListener('click', () => {
			const newPot = potTemplate.cloneNode(true);

			// potsConfigCcontainer.insertBefore(newPot, addPot.parentNode);
			potsConfigCcontainer.appendChild(newPot);
		});
	}
}

module.exports = Builder;
