import { test, expect, mock } from 'bun:test';
import { loadQuote } from './index';

const quote = mock(() => loadQuote());

test('loadQuote', async () => {
	expect(await quote()).toBeString();
	expect(await quote()).not.toBeEmpty();
	expect(await quote()).not.fail();
});
