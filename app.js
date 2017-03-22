var API_KEY = 'AIzaSyB3VvtdxQmkEarQrg0_gMW2xHB7wVTNOLc';


// Search for a specified string.
function search() {
    var q = $('#query').val();
    var listTemplate = '';
    
    var URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + API_KEY + "&q=" + q + "&type=video";
     $.get(URL, function(data) {
        console.log(data);
        console.log(data.items[0].id);
        for (var i = 0 ; i < data.items.length ; i++)
        {
            var videoIDTemp = "https://www.youtube.com/watch?v=";
            videoIDTemp += data.items[i].id.videoId;
            listTemplate += ("<a href=" + videoIDTemp + ">" + "<img src=" + 
                              data.items[i].snippet.thumbnails.medium.url + 
                              " alt=item" + i + ">" + "</a>");
        }
        $('.result').html(listTemplate);
        
    });
   
}