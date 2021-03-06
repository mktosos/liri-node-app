# liri-node-app
This project allows a user to search for movie info using the OMDB API, concerts by artists with Bands in Town API, and songs from Spotify API. The search parameters are inputed in the terminal in the format: node liri.js <parameter1 - action> <parameter2 - name>. Action commands are:
*`concert-this`
*`spotify-this-song`
*`movie-this`
*`do-what-it-says`
example request: node liri.js movie-this harry potter

Sceenshot images of app running different parameters.
*[ app screenshot concert-this](/images/concert-this.png)
*[ app screenshot concert-this2](/images/concert-this2.png)
*[ app screenshot do-what-it-says](/images/do-what-it-says.png)
*[ app screenshot do-what-it-says2](/images/do-what-it-says2.png)
*[ app screenshot do-what-it-says3](/images/do-what-it-says3.png)
*[ app screenshot movie-this](/images/movie-this.png)
*[ app screenshot movie-this2](/images/movie-this2.png)

Known issues: 
Spotify search not working properly. TypeError: Spotify is not a constructor. 

The project uses Axios and API access to get data sets which are parsed for specific key values to display via console.log in the terminal. This application is run completely in the terminal uning node.js and required modules, some installed using NPM install. API keys for spotify are kept in a .gitignore(d) .env file to keep them private.


Credits: The game project student developer is Mike Taniguchi.

License The MIT License (MIT)

Copyright (c) 2019 Mike Taniguchi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.