function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  });
  promise.catch(() => {
    console.log('Got a response from the API');
    return new Error();
  });
  return promise;
}

export default handleResponseFromAPI;
