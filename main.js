document.querySelector('button').addEventListener('click', picOfDay)

function picOfDay(){
  let input = document.querySelector('input').value
  let url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + input

  fetch(url)
    .then(res => res.json())
    .then(data => {
      let picture = data.hdurl
      document.querySelector('img').src = picture
      console.log(data);
    })
    .catch(err => {
      console.log('error');
    })
}
