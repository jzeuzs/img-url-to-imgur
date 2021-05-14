declare class Imgur {
	constructor(clientId: string);

	upload(url: string): Promise<string>;
}

export = Imgur;
