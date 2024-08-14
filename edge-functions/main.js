export async function handleHttpRequest(_request) {
  return new Response('Hello from Edge Function!', {
    status: 200,
    headers: {
      'content-type': 'text/plain',
    },
  });
}
