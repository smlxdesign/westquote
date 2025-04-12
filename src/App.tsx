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
			<div className="flex flex-col justify-center items-center min-h-dvh p-8">
				<Suspense fallback={<Loading />}>
					<QuoteComponent
						quote={quote.then((quote) => quote.quote)}
						author={{
							name: 'Kanye West',
							image: kanyeImage,
						}}
						className="max-w-sm"
					/>
				</Suspense>
			</div>
			<footer className="p-4">
				<span>
					Quote API is provided by{' '}
					<a
						className="underline cursor-pointer"
						href="https://kanye.rest/"
					>
						Kanye.rest
					</a>
					. Everything else is coded by me, without AI.
				</span>
			</footer>
		</>
	);
}
