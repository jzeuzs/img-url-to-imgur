const fetch = require('node-fetch');
const FormData = require('form-data');

/**
 * The main class.
 * @class
 */
module.exports = class Imgur {
	/**
	 * @param {string} clientId - The imgur client id to use.
	 */
	constructor(clientId) {
		this.clientId = clientId;
	}

	/**
	 * Upload to imgur!
	 * @param {string} url - The image url.
	 * @returns {Promise<string>}
	 */
	async upload(url) {
		if (typeof url !== 'string') throw new Error('The url must be a string.');
		if (typeof this.clientId !== 'string') throw new Error('Client id is missing or not a string!');
		const form = new FormData();
		form.append('image', url);
		form.append('type', 'url');
		const body = await fetch('https://api.imgur.com/3/upload', {
			method: 'POST',
			body: form,
			headers: {
				Authorization: `Client-ID ${this.clientId}`
			}
		});
		const data = await body.json();
		return data.data.link;
	}
}