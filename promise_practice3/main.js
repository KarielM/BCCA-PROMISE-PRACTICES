// ================== DO NOT CHANGE CODE BELOW SUPPLIED CODE ==========================
const daySelect = document.querySelector("#day-select")
const movieSelect = document.querySelector("#movie-select")
const movieInfoContainer = document.querySelector("#movie-info")
const movieTimeContainer = document.querySelector("#movie-times")

function populateDaySelect(days) {
    for (const day of days) {
      const newOption = document.createElement("option");
      newOption.value = day.id;
      newOption.textContent = day.dayOfWeek;
      newOption.dataset.dayJson = JSON.stringify(day);
      daySelect.append(newOption);
    }
  }

  function populateMovieSelect(movies) {
    for (const movie of movies) {
      const newOption = document.createElement("option");
      newOption.value = movie.id;
      newOption.textContent = movie.movieTitle;
      newOption.dataset.movieJson = JSON.stringify(movie);
      movieSelect.append(newOption);
    }
  }

function populateMovieInfo(movie) {
    movieInfoContainer.innerHTML = `<h2>${movie.movieTitle}</h2>
    <p>${movie.description}</p>`;
    movie.genre.forEach(type => {
        movieInfoContainer.insertAdjacentHTML("beforeend", `<li>${type}</li>`)
    });
}

function populateMovieTimes(times) {
    movieTimeContainer.innerHTML = "<h3>Movie Times</h3>";
    for (const time of times) {
      movieTimeContainer.insertAdjacentHTML(
          "beforeend",
          `<li>${time.time}</li>`);
    }
}

function getCurrentlySelectedDay() {
    const selectedOption = daySelect.selectedOptions[0];
    return JSON.parse(selectedOption.dataset.dayJson);
  }

function getCurrentlySelectedMovie() {
    const selectedOption = movieSelect.selectedOptions[0];
    return JSON.parse(selectedOption.dataset.movieJson);
  
}


// ================= DO NOT CHANGE CODE ABOVE ^ ===== WRITE YOUR CODE BELOW ================
fetch('./fake_api/days.json')
.then(result => result.json())
.then(result => {
  populateDaySelect(result);
});
fetch('./fake_api/movies.json')
.then(result => result.json())
.then(result => {
  populateMovieSelect(result);
});

addEventListener('change', () => {
  let movie = getCurrentlySelectedMovie().acronym;
  let day = getCurrentlySelectedDay().dayOfWeek.toLowerCase();
  // console.log(movie);
  // console.log(day);
  fetch(`./fake_api/movie_times/${movie}/${day}/movie_times.json`)
  .then(result => result.json())
  .then(result => {
    // console.log(result);
    populateMovieInfo(getCurrentlySelectedMovie());
    populateMovieTimes(result);
  })
})


// fetch('./fake_api/days.json')
// .then(response => response.json())
// .then(promise => {
//   populateDaySelect(promise);
//   return promise.array
// })
// fetch('./fake_api/movies.json')
// .then(result => result.json())
// .then(result => {
//   populateMovieSelect(result);
//   return result.array
// })
// //----------------took you a bit to finish this bc you forgot 
// //--the parentheses on json --- =_=-----------
// addEventListener('change', () => {
//   let movie = getCurrentlySelectedMovie().acronym;
//   let day = getCurrentlySelectedDay().dayOfWeek.toLowerCase();
//   fetch(`./fake_api/movie_times/${movie}/${day}/movie_times.json`)
//   .then(result => result.json())
//   .then(result => {
//       populateMovieInfo(getCurrentlySelectedMovie())
//       populateMovieTimes(result)
//     });
//   });

// addEventListener('change', () => {
//   let movie = getCurrentlySelectedMovie().acronym;
//   let day = getCurrentlySelectedDay().dayOfWeek.toLowerCase();
//   console.log(movie)
//   console.log(day)
//   fetch(`'/fake_api/movie_times/${movie}/${day}/movie_times.json'`)
//   .then(result => result.json)
//   .then(result => {
//     // populateMovieTimes(result);
//     console.log(result)
//     // promise_practice3\fake_api\movie_times\smb\sunday\movie_times.json
//   })
//   });
//   // fetch()
// // })
