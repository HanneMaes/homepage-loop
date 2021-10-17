// all possible URL to redirect to
var possibleHomepage = [
  "https://calendar.google.com/calendar/r",
  "https://cloud.blender.org/blog/",
  "https://www.blender.org/news/",
  "https://code.blender.org/",
  "https://www.blender.org/about/user-stories/",
  "https://apod.nasa.gov/apod/astropix.html",
  "https://www.bing.com",
  // async art
  "https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-933"
]

function documentReady() { 

  // choose random page
  randomPage = possibleHomepage[Math.floor(Math.random() * possibleHomepage.length)]
  console.log('homepage-loop:', randomPage)

  // go to page
  window.location.replace(randomPage);

  // display in iframe
  // document.getElementById("frame").src = randomPage;
  // document.getElementById("embed").src = randomPage;

}