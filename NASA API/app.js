let button = document.querySelector(".button");
let colors = [];
//API url
let url = `https://api.nasa.gov/planetary/apod?api_key=oX4gl6LkhDhmyQ7TzEAEUZamvQqRbnSg56IorvLI`;
fetch(url)
   .then(response => {return  response.json()})
       // push data from api to the colors array
       .then(data => {
        console.log(data)
        colors.push(data.url)
        })
       console.log(colors);
button.addEventListener("click", function () {
  // set the background imge to the last item in the colors array
    document.body.style.backgroundImage = "url(" + colors[Math.random() * (colors.length-1)] + ")"
});


// ! This unfortunately does not run on Codepen.io