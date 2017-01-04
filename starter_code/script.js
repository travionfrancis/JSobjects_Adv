//Task 1: Console the year in which the song "Beat it" was relased 
//console.log(library.music.Michael_Jackson[0].year);
console.log(library.music[0].albums[0].year);

//Task 2: Console the name of the song Lady Gaga released in 2006 
//console.log(library.music.two_thousands["Lady_Gaga"][0].song);
console.log(library.music[5].albums[0].song);

$( document ).ready(function() {
    //Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    
    $("#song").html(library.music[6].albums[0].song);
    
    //Task 4: (project) Create a site that can display all songs from an artist specified by a user search. (This will require an input field for the user to type into.. OR a drop down menu populated with Artist names)
    /*var years = Object.keys(library.music);
    for( var x =0; x< years.length; x++){
        var artists = Object.keys(library.music[years[x]]);
        
        for (var y=0; y< artists.length; y++){
            var value = artists[y];
            
            $("#artists").append($('<option/>', { 
                value: value,
                text : value 
            }));
        }
        
    }*/
    
    var my_artists = library.music;
    for (var x = 0; x < my_artists.length; x++){
        console.log(my_artists[x]);
    }
    
    // Search
    $( "#songsearch" ).submit(function( event ) {
      event.preventDefault();
      var artists = $("#artists").val();
      console.log(artists);
      
      
    });
    
});
