import { Suspense } from 'react';
import Loading from './loading';
import Quote from './components/Quote';
import { quote } from './data/quote';
import kanyeImage from './assets/kanye-image.webp';

export default function App() {
	return (
		<>
			<div className="flex flex-col justify-center items-center min-h-dvh p-8">
				<Suspense fallback={<Loading />}>
					<Quote
						quote={quote.then((quote) => quote)}
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
