const http = require('https');
const Config = require('../js/config');

class Client{

	constructor() {
		this.config = JSON.parse(JSON.stringify(Config));

		this.data = {};
	}

	createFork(name) {
		this.config.path = Config.path + `projects/${this.config.baseProjectId}/fork`;
		this.data.name = name;
		this.data.path = name;
		// this.data.visibility = 'internal';
	}

	renameFork(id) {
		console.error(id);
		this.config.path = Config.path + `projects/${id}`;
		this.config.method = 'PUT';
	}

	flush() {
	 return new Promise((resolve, reject) => {
	 	const config = this.config;
	 	const dataString = JSON.stringify(this.data);

	 	config.headers['Content-Length'] = Buffer.byteLength(dataString);

	 	console.error(config.hostname+config.path);
	 	console.error(dataString);
	 	const req = http.request(config, (res) => {
	 		res.setEncoding('utf8');
		 	res.on('data', (data) => resolve(JSON.parse(data)));
	 	});

	 	req.on('error', reject);
	 	req.write(dataString);
	 	req.end();
	 });
	}
}

module.exports = Client;