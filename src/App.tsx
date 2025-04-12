import { Suspense } from 'react';
import Loading from './loading';
import * as z from 'zod';

import QuoteComponent from './components/Quote';

import kanyeImage from './assets/kanye-image.webp';

const Quote = z.object({
	quote: z.string(),
});

type Quote = z.infer<typeof Quote>;

async function loadQuote() {
	return await fetch('https://api.kanye.rest')
		.then((res) => {
			return res.json();
		})
		.then((json) => {
			return Quote.parse(json);
		});
}

const quote = loadQuote();

export default function App() {
	return (
		<>
			<div className="flex flex-col justify-center items-center min-h-screen">
				<Suspense fallback={<Loading />}>
					<QuoteComponent
						quote={quote.then((quote) => quote.quote)}
						author={{
							name: 'Kanye West',
							image: kanyeImage,
						}}
					/>
				</Suspense>
			</div>
		</>
	);
}
