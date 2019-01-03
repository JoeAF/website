function myFunction() {
	var SpotifyLink = $('#SpotifyLink').val();
	alert(SpotifyLink)
	return SpotifyLink;
}
var channelID = "UC0C-w0YjGpqDXGB8IHb662A";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID,
function(data) {
   var i;
   var videos = '';
   for(i=0;i<10;i++){
	   var link = data.items[i].link;
	   console.log(link);
	   var id = link.substr(link.indexOf("=")+1);
	   console.log("https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
	   videos += '<div style="position:relative;"><p><iframe src = "https://youtube.com/embed/'+id+'?controls=0&showinfo=0&rel=0" width="420" height="315" frameborder="0" allow="autoplay" allowfullscreen></iframe></a></p><a  href="'+link+'" target="_blank" style="position:absolute; bottom:0; left:0; display:inline-block;"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="420px" height="315px"></a></div>'
	   $('#videosholder').html(videos);
   }});