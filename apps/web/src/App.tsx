import { Suspense } from 'react';
import Loading from './loading';
import Quote from './components/Quote';
import { quote } from './data/quote';
import kanyeImage from './assets/kanye-image.webp';
import Footer from './components/Footer';

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
			<Footer />
		</>
	);
}
