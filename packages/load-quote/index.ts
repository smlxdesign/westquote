import { tryCatch } from './trycatch';

async function fetchApi() {
	const response = await fetch('https://api.kanye.rest/text');

	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	return response;
}

export async function loadQuote() {
	const response = await tryCatch(fetchApi());

	if (response.error !== null) {
		throw new Error("Couldn't fetch API. Please check your connection.");
	}

	return await response.data.text();
}
