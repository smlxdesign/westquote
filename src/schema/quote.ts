import { z } from 'zod';

export const Quote = z.object({
	quote: z.string(),
});

export type Quote = z.infer<typeof Quote>;
