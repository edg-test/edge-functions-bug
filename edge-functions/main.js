/**
 * An example edge function which forwards the request to the origin.
 * See routes.js for how this function is configured to run for requests to "/".
 */
export async function handleHttpRequest(_request) {
  return new Response('Hello from Edge Function!', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  });
}
