import { Suspense } from 'react';
import Loading from './loading';
import * as z from 'zod';

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

const quote = await loadQuote();

export default function App() {
	return (
		<>
			<div>
				<Suspense fallback={<Loading />}>
					<blockquote>
						{quote.quote}
						<footer>Kanye West</footer>
					</blockquote>
				</Suspense>
			</div>
		</>
	);
}
