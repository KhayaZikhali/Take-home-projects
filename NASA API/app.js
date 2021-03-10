let button = document.querySelector(".button");
let colors = [];
let name = 
//API url 
let url = `https://api.nasa.gov/planetary/apod?api_key=oX4gl6LkhDhmyQ7TzEAEUZamvQqRbnSg56IorvLI`;
fetch(url)
   .then(response => {return  response.json()})
       // push data from api to the colors array
       .then(data => {
        console.log(data)
        colors.push(data.url)
        })
       
button.addEventListener("click", function () {
  // set the background imge to the last item in the colors array
    document.body.style.backgroundImage = "url(" + colors[Math.random() * (colors.length-1)] + ")"
});
