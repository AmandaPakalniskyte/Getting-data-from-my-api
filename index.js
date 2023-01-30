'use strict';

const allMovies = {
  method: 'GET',
  url: 'https://movies-api6.p.rapidapi.com/movies',
  headers: {
    'X-RapidAPI-Key': '70f657fa73msh02069ed7178e759p15d430jsn0de064ecdace',
    'X-RapidAPI-Host': 'movies-api6.p.rapidapi.com'
  }
};
axios.request(allMovies).then(function (response) {
	console.log(response.data);
  document.getElementById("demo").innerHTML = (response.data).map((article) => ("Source: " + article.source + " " + "Title: " + article.title + " " + "Link: " + article.url));
}).catch(function (error) {
	console.error(error);
});


const allMoviesFromOneNewspaper = {
  method: 'GET',
  url: 'https://movies-api6.p.rapidapi.com/movies/independent',
  headers: {
    'X-RapidAPI-Key': '70f657fa73msh02069ed7178e759p15d430jsn0de064ecdace',
    'X-RapidAPI-Host': 'movies-api6.p.rapidapi.com'
  }
};

axios.request(allMoviesFromOneNewspaper).then(function (response) {
	console.log(response.data);
  document.getElementById("demo2").innerHTML = (response.data).map((article) => ("Source: " + article.source + " " + "Title: " + article.title + " " + "Link: " + article.url));
}).catch(function (error) {
	console.error(error);
});
