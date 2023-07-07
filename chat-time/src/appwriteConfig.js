import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '649cdbb0800241eb0e88'
export const DATABASE_ID = '649cdf38e8dcd9424856'
export const COLLECTION_ID_MESSAGES = '649cdf41853f09826396'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('649cdbb0800241eb0e88');
export const databases = new Databases(client);
export const account = new Account(client);
export default client;