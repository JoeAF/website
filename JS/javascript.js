function myFunction() {
    var background_colour = $('#Colour').val();
	alert(background_colour)
	localStorage.getItem('background');
	if(localStorage && localStorage.getItem('background'))
	{ var colour = localStorage.getItem('background');
	alert('colour should be '+colour);}
	$('#Colour').change(function(){
		console.log($('#Colour').val());
		localStorage.setItem(name,value);
	});
}

var channelID = "UC0C-w0YjGpqDXGB8IHb662A";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID,
function(data) {
   var i;
   var videos = '';
   for(i=0;i<10;i++){
	   var link = data.items[i].link;
	   var id = link.substr(link.indexOf("=")+1);
	   videos += '<div style="position:relative;"><p><iframe src = "https://youtube.com/embed/'+id+'?controls=0&showinfo=0&rel=0" width="420" height="315" frameborder="0" allow="autoplay" allowfullscreen></iframe></a></p><a  href="'+link+'" target="_blank" style="position:absolute; bottom:0; left:0; display:inline-block;"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="420px" height="315px"></a></div>'
	   $('#videosholder').html(videos);
   }});

var LoggedIn = false;
function Login() {
	 if(LoggedIn==false){
     var inputUsername= document.getElementById("LoginUsername");
     var inputPassword= document.getElementById("LoginPassword");
	 console.log(inputUsername.value);
	 if ((inputUsername.value == localStorage.getItem('Username')) && (inputPassword.value == localStorage.getItem('Password'))){
		 LoggedIn = true;
		 console.log("You have been logged in!");}
	 }
	 else{alert("You must log out first");)
    };

function SignUp() {
	 if(LoggedIn==false){
     var inputUsername= document.getElementById("SignUpUsername");
     var inputPassword= document.getElementById("SignUpPassword");
	 if((inputPassword.value).length<8){
	 alert("Password must be at least 8 charachers long!")
	 }
	 else{
		 if(inputUsername.value == localStorage.getItem('Username')){
			alert("Error");
		 }
		 else{
			 console.log(inputUsername.value);
			 localStorage.setItem("Username", inputUsername.value);
			 localStorage.setItem("Password", inputPassword.value);
			 console.log(localStorage.getItem("Username"));
			 LoggedIn = true;
			 alert("You have signed up and have been logged in!");
			 $('#User').html('<p>'+inputUsername.value+'</p>');
		 }
	 }
	 }
	 else{alert("You must log out first");)
    };