import { z } from 'zod';

export const Quote = z.string();
export type Quote = z.infer<typeof Quote>;
