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

const quote = loadQuote();

export default function App() {
	return (
		<>
			<div className="flex flex-col justify-center items-center min-h-screen">
				<Suspense fallback={<Loading />}>
					<div className="flex flex-col gap-6 text-zinc-800 max-w-sm rounded-lg p-6 bg-zinc-50 w-fit">
						<blockquote className="italic">
							“{quote.then((quote) => quote.quote)}”
						</blockquote>
						<div className="flex gap-2 items-center w-fit">
							<img
								src="/kanye-image.webp"
								className="size-5 object-cover rounded-full"
								alt=""
							/>
							<span>Kanye West</span>
						</div>
					</div>
				</Suspense>
			</div>
		</>
	);
}
