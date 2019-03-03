require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
 //var spotify = new Spotify(keys.spotify);
var dateFormat = require('dateformat');
var now = new Date();
var fs = require("fs");
var firstTime = true;
mainFunction();
 
function mainFunction(action,search){
// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
   
    if (process.argv[2]==='concert-this'){
    axios
    .get("https://rest.bandsintown.com/artists/" + process.argv[3] + "/events?app_id=codingbootcamp")
    .then(function(response) {
        console.log("Headliner is",response.data[0].lineup[0]); //remove [0]for complete object
        for (i=0; i<response.data.length; i++){
            console.log(response.data[i].venue.name);
            console.log(response.data[i].venue.city,',',response.data[i].venue.country);
            console.log(dateFormat(response.data[i].datetime, "dddd, mmmm dS, yyyy, h:MM TT"))
        }
    })
    .catch(function(error) {
        if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
        } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        }
        console.log(error.config);
    });
    } 
    else if (process.argv[2]===`movie-this`){
            axios
    .get("http://www.omdbapi.com/?apikey=trilogy&t=" + process.argv[3])
    .then(function(response) {
        console.log('Title:', response.data.Title); 
        console.log('Year:', response.data.Year); 
        console.log('IMDB Rating:', response.data.imdbRating);
        console.log('Metascore:', response.data.Metascore);
        console.log('Produced in',response.data.Country);
        console.log('Language:',response.data.Language);
        console.log('Plot:', response.data.Plot);
        console.log('Actors:', response.data.Actors);
        })
    .catch(function(error) {
        if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        } else if (error.request) {
        console.log(error.request);
        } else {
        console.log("Error", error.message);
        }
        console.log(error.config);
    });
    } 
    else if (firstTime === true && process.argv[2]===`do-what-it-says`){
        fs.readFile('random.txt', 'utf-8', function(error, data){
            //console.log(data.split(",")[0]);
            var res = data.split(",")[1].replace('"', '');
            var replacedRes = res.replace('"', '');
            console.log(replacedRes);
            // firstTime = false;
            // mainFunction(data.split(",")[0],replacedRes);
            console.log(process.argv[2]);
            process.argv[2]=data.split(",")[0];
            process.argv[3]=replacedRes;
            console.log(process.argv[2]);

            if (process.argv[2]==='concert-this'){
                axios
                .get("https://rest.bandsintown.com/artists/" + process.argv[3] + "/events?app_id=codingbootcamp")
                .then(function(response) {
                    console.log("Headliner is",response.data[0].lineup[0]); //remove [0]for complete object
                    for (i=0; i<response.data.length; i++){
                        console.log(response.data[i].venue.name);
                        console.log(response.data[i].venue.city,',',response.data[i].venue.country);
                        console.log(dateFormat(response.data[i].datetime, "dddd, mmmm dS, yyyy, h:MM TT"))
                    }
                })
                .catch(function(error) {
                    if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    console.log(error.request);
                    } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                    }
                    console.log(error.config);
                });
                } 
                else if (process.argv[2]===`movie-this`){
                        axios
                .get("http://www.omdbapi.com/?apikey=trilogy&t=" + process.argv[3])
                .then(function(response) {
                    console.log(response.data)
                    console.log('Title:', response.data.Title); 
                    console.log('Year:', response.data.Year); 
                    console.log('IMDB Rating:', response.data.imdbRating);
                    console.log('Rotten Tomatoes:', response.data.Ratings[1].Value);
                    console.log('Produced in',response.data.Country);
                    console.log('Language:',response.data.Language);
                    console.log('Plot:', response.data.Plot);
                    console.log('Actors:', response.data.Actors);
                    })
                .catch(function(error) {
                    if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    } else if (error.request) {
                    console.log(error.request);
                    } else {
                    console.log("Error", error.message);
                    }
                    console.log(error.config);
                });
                } 

        });
    } 
    
}    

// * `spotify-this-song`***needs work/ not working

// `movie-this`******** working DONE
    //    * Title of the movie.
    //    * Year the movie came out.
    //    * IMDB Rating of the movie.
    //    * Rotten Tomatoes Rating of the movie.
    //    * Country where the movie was produced.
    //    * Language of the movie.
    //    * Plot of the movie.
    //    * Actors in the movie.
    //  ```

