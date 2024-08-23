import { Client, Account, Teams, Databases, Storage } from 'appwrite';

const client = new Client();
client
	.setEndpoint('https://cloud.appwrite.io/v1')
	.setProject('66c6f959003d95e135e3');

export const account = new Account(client);
export const teams = new Teams(client);
export const database = new Databases(client);
export const storage = new Storage(client);
