export default function Quote({
	quote,
	author,
	className,
}: {
	quote: Promise<string>;
	author: { name: string; image: string };
	className?: string;
}) {
	return (
		<div
			className={`flex flex-col gap-6 text-zinc-800 rounded-lg p-6 bg-zinc-50 w-fit ${className}`}
		>
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
