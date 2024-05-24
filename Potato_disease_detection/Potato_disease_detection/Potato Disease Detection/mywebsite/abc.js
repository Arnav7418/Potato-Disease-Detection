fetch('http://localhost:8000/docs#/default/predict_predict_post')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));