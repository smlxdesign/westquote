import { Quote } from '../schema/quote';

async function loadQuote() {
	return await fetch('https://api.kanye.rest/text')
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			return Quote.parse(json);
		});
}

export const quote = loadQuote();
