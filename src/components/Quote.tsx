export default function Quote({
	quote,
	author,
}: {
	quote: Promise<string>;
	author: { name: string; image: string };
}) {
	return (
		<div className="flex flex-col gap-6 text-zinc-800 max-w-sm rounded-lg p-6 bg-zinc-50 w-fit">
			<blockquote className="italic">“{quote}”</blockquote>
			<div className="flex gap-2 items-center w-fit">
				<img
					src={author.image}
					className="size-5 object-cover rounded-full"
					alt=""
				/>
				<span>{author.name}</span>
			</div>
		</div>
	);
}
