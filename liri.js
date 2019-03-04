require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
 //var spotify = new Spotify(keys.spotify);
var dateFormat = require('dateformat');
var now = new Date();
var fs = require("fs");
// var firstTime = true;
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
    else if (process.argv[2]===`do-what-it-says`){
        fs.readFile('random.txt', 'utf-8', function(error, data){
            //console.log(data.split(",")[0]);
            var res = data.split(",")[1].replace('"', '');
            var replacedRes = res.replace('"', '');
            //console.log(replacedRes);
            // firstTime = false;
            // mainFunction(data.split(",")[0],replacedRes);
            //console.log(process.argv[2]);
            process.argv[2]=data.split(",")[0];
            process.argv[3]=replacedRes;
            //console.log(process.argv[2]);

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
                    //console.log(response.data)
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
    // else if (process.argv[2]===`spotify-this-song`){
    //     function spotif(){
    //         // var songId = process.argv.slice(3).join(” “);
    //         var Spotify = require('node-spotify-api');
 
    //         var spotify = new Spotify({
    //           id: <your spotify client id>,
    //           secret: <your spotify client secret>
    //         });
             
    //         spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    //           if (err) {
    //             return console.log('Error occurred: ' + err);
    //           }
             
        //     console.log(data); 
        //     });
        //       var songs = data.tracks.items;
        //       for (var i =0; i < songs.length; i++) {
        //         console.log(“Song name: “, songs[i].name);
        //         // console.log(“Artist: “, songs[i].album[1]);
        //         console.log(“Album: “, songs[i].album.name);
        //         console.log(“Preview song: “, songs[i].preview_url);
        //         console.log(“------------------------------------“);
        //       }
        //     });
        //    };   
    // }
}


// * `spotify-this-song`***needs work/ not working

