//Task 1: Console the year in which the song "Beat it" was relased 

//Task 2: Console the name of the song Lady Gaga released in 2006 


$( document ).ready(function() {
    //Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    

    
    //Task 4: (project) Create a site that can display all songs from an artist specified by a user search. (This will require an input field for the user to type into.. OR a drop down menu populated with Artist names)
    
        //Step 4.1 - Loop through all the music objects and console.log the artists
        
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


