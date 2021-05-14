declare class Imgur {
	clientId: string;
	
	constructor(clientId: string);

	upload(url: string): Promise<string>;
}

export = Imgur;
