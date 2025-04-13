export async function loadQuote() {
	return await fetch('https://api.kanye.rest/text')
		.then((res) => {
			return res.text();
		})
		.then((text) => {
			return text;
		});
}
