// Create and return a new Promise
function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'API response data' });
    }, 1000); // simulate a 1-second delay
  });
}

export default getResponseFromAPI;
