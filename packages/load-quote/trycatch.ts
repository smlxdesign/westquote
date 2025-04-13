/**
 * Represents a successful operation result.
 * @template T - The type of the successful result data.
 */
type Success<T> = {
	data: T;
	error: null;
};

/**
 * Represents a failed operation result.
 * @template E - The type of the error object.
 */
type Failure<E> = {
	data: null;
	error: E;
};

/**
 * Represents the result of an operation which can either be a success or a failure.
 * @template T - The type of the successful result data.
 * @template E - The type of the error object (default is Error).
 */
type Result<T, E = Error> = Success<T> | Failure<E>;

/**
    Executes a synchronous or asynchronous operation and handles any errors that occur.
    This function allows you to handle both synchronous and asynchronous operations
    using a unified approach. It returns a Result object containing either the
    successful data or an error object.

    @template T - The type of the successful result data.

    @template E - The type of the error object (default is Error).

    @param {Promise | (() => MaybePromise)} arg -
		A function that returns a value or a promise, or a direct promise.

    @returns {Result<T, E> | Promise<Result<T, E>>} -
		Returns a `Result` object containing the result data or an error.

    @example
	```ts
    // Example usage with a synchronous function:
    const result = tryCatch(() => JSON.parse('{"key": "value"}'));

    if (result.data) {
    	console.log(result.data); // Output: { key: 'value' }
    } else {
    	console.error(result.error.message);
    }
	```

    @example
	```ts
    // Example usage with an asynchronous function:
    const asyncResult = await tryCatch(async () => {
    	const response = await fetch('https://example.com');
    	return response.json();
    });

    if (asyncResult.data) {
    	console.log(asyncResult.data);
	} else {
		console.error(asyncResult.error.message);
	}
*/
export async function tryCatch<T, E = Error>(
	promise: Promise<T>,
): Promise<Result<T, E>> {
	try {
		const data = await promise;
		return { data, error: null };
	} catch (error) {
		return { data: null, error: error as E };
	}
}
