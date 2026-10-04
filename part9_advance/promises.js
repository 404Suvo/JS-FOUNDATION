function fetchData() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
