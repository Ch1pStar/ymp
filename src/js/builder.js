const Client = require('../js/Client');

class Builder {

	constructor() {
		console.log('жакпот билдер');

		this._initControls();
	}

	_initControls() {
		const createBtn = document.querySelector('.build-jackpot');

		this._initAddPot();
		createBtn.addEventListener('click', this._createRepo.bind(this));
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

	_doBuild() {

	}

	async _createRepo() {
		const c = new Client();

		c.createFork('lel');

		let resData = await c.flush().catch(e => console.error(e));

		console.log(resData);

		c.renameFork(resData.id);

		resData = await c.flush().catch(e => console.error(e));

		console.log(resData);

	}
}

module.exports = Builder;
