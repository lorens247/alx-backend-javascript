function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      // reject the Promise with an error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
