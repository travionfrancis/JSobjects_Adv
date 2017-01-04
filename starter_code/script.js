//Task 1: Console the year in which the song "Beat it" was relased 
console.log(library.music[0].albums[0].year)
//Task 2: Console the name of the song Lady Gaga released in 2008
console.log(library.music[5].albums[0].song)

$( document ).ready(function() {
    //Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    
$("#songs").html(library.music[6].albums[0].song)
    
    //Task 4: (project) Create a site that can display all songs from an artist specified by a user search. (This will require an input field for the user to type into.. OR a drop down menu populated with Artist names)
    
        //Step 4.1 - Loop through all the music objects and console.log the artists
        for (i = 0; i < library.music.length; i++) {
            var artist = library.music.[i].artist;
            console.log(artist);
            $('#artists')
                .append($("<option></option>")
                .attr("value", artist)
                .text(artist));
        }
        //Step 4.2 - fill in the "#artists" select box with each artist name as an option
        //      Examples: https://gist.github.com/paulund/5861214
        
        //Step 4.3 - Fill in the ID of the form field to handle the submission 
        $( "#songsearch" ).submit(function( event ) {
          event.preventDefault();
          
          // 4.3 - Log the selected artist name
  
          // 4.4 - Loop over all the artists in music object until you find a match
            
          // 4.5 - Log each of the songs from the artist to the console
          
          // 4.6 - Now, update the "songs" div with each of the song names
          
        });        
});


