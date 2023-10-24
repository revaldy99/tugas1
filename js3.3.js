function getUsers(offlineGa) {
    // return a promise object
    return new Promise((resolve, reject) => {
  
      // simulate network delay
      setTimeout(() => {
        const users = ['Revaldy', 'Boy', 'Budi'];
      
        if (offlineGa) {
          reject(new Error('tidak bisa proses data jika offline'));
          return;
        }
  
        resolve(users);
      }, 3000);
    });
  }
  
  getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));