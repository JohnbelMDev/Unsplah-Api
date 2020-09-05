let inputId = document.getElementById('inputId');
let button = document.querySelector('button');

button.addEventListener('click',testApi)

function testApi(){
fetch(`https://api.unsplash.com/search/photos?query=${inputId.value}&client_id=CLCDUfaYN--E7syl9puAMDNlq_ujuTo3ywp-aZ4_ChQ`)
.then(response => response.json())
.then(data => {
  console.log(data);
  // document.querySelector("img").src = data.results.urls;

  document.querySelector('h2').innerHTML = "Likes " +data.results[0].likes;
  document.querySelector("img").src = data.results[0].urls.raw;
  document.querySelector("span").innerHTML = " Picture description:" + data.results[0].description;





})

.catch(err => {
    console.log(`error ${err}`)
    alert("error")
});

}
