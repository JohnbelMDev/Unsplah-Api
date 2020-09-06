var inputFieldTag = document.getElementById('inputFieldTag');
var buttoId = document.getElementById('buttoId')
var likes= document.getElementById('likes')
let imageSection = document.getElementById('imageSection');
let users = document.getElementById('users')

buttoId.addEventListener('click',picture)

function picture() {
  imageSection.innerHTML='';
  fetch(`https://api.unsplash.com/search/users?page=1&query=${inputFieldTag.value}&client_id=wBKcYINC8uY-uN-HvMxQ2ETOJR80f3gDSJv9lGbIQ1E`)
  .then( responce => responce.json())
  .then( data => {
    console.log(data);
      for (var i in data.results) {

        // console.log(data.results[i]);
      for (var sl in data.results[i].photos) {
          console.log(data.results[i].photos[sl].urls.raw);
            let image =document.createElement('img');
            imageSection.appendChild(image)
          image.src = data.results[i].photos[sl].urls.raw

      }
      let h2 = document.createElement("h2")
      let h4= document.createElement("h4")
      let h5= document.createElement("h5")
      let span = document.createElement("span")
      let p = document.createElement("p")
      let image = document.createElement("img")


      imageSection.appendChild(h2);
      imageSection.appendChild(h4);
      imageSection.appendChild(h5);
      imageSection.appendChild(p);
      imageSection.appendChild(image);
      imageSection.appendChild(span);
      // image.src = data.results[i].profile_image.large
      h2.innerHTML = data.results[i].name
      h4.innerHTML = data.results[i].location
      h5.innerHTML = "Total Likes " + data.results[i].total_likes;
      if(data.results[i].instagram_username===null){
        p.innerHTML= "Sorry, we can't find the instagram for this users"
      }
      else{
      p.innerHTML = "Find me on Instagram @" +  data.results[i].instagram_username
      }
      span.innerHTML = data.results[i].bio
      // p.innerHTML = data.results[i].instagram_username

      console.log(data.results[i].bio);

      }
      // document.querySelector("img").src = data.results[0].photos[0].urls.raw
      // document.getElementById('img2').src = data.results[0].photos[1].urls.raw
      // document.getElementById('img3').src = data.results[0].photos[2].urls.raw
      // likes.innerHTML = data.results[0].name;
      // document.querySelector("h3").innerHTML = data.results[0].bio
      // console.log(data.results[0].first_name);


      // document.getElementById('img4').src = data.results[0].photos[3].urls.raw
      // document.getElementById('img5').src = data.results[0].photos[4].urls.raw


      // document.querySelector("img3").src = data.results[0].photos[2].urls.raw
      // document.querySelector("img4").src = data.results[0].photos[2].urls.raw



    // document.querySelector("img").src = data.results[0].photos[2].urls.raw

  })
}
