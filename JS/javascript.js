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
			 alert("You have been logged in! Your item is on the way.");}
		 else{alert("Incorrect details have been entered!")}
		 }
	 else{alert("You must log out first");}
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
				alert("Username already taken");
			 }
			 else{
				 console.log(inputUsername.value);
				 localStorage.setItem("Username", inputUsername.value);
				 localStorage.setItem("Password", inputPassword.value);
				 console.log(localStorage.getItem("Username"));
				 LoggedIn = true;
				 alert("You have signed up and have been logged in! Your item is on the way.");
			 }
		 }
	 }
	 else{alert("You must log out first");}
    };
	
function Logout(){
	if(LoggedIn==true){
		alert("You have logged out");
		LoggedIn=false;
	}
	else{alert("You are already logged out");}
}

function changeshirt(){
	var colour = document.getElementById("colouroptions");
	var logo = document.getElementById("logooptions");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
	$('#tshirtholder').html('<img src = "Assets/'+colour.value+logo.value+'.gif" width = 38%>');
	}
	else{}
}

function changehoodie(){
	var colour = document.getElementById("colouroptions2");
	var logo = document.getElementById("logooptions2");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
	$('#hoodiesholder').html('<img src = "Assets/'+colour.value+logo.value+'.gif" width = 38%>');
	}
	else{}
}

function changehat(){
	var colour = document.getElementById("colouroptions3");
	var logo = document.getElementById("logooptions3");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
	$('#hatsholder').html('<img src = "Assets/'+colour.value+logo.value+'.gif" width = 38%>');
	}
	else{}
}
var price = 0;
function addtobasket1(){
	var colour = document.getElementById("colouroptions");
	var logo = document.getElementById("logooptions");
	var item = colour.value+logo.value;
	var size = document.getElementById("size1");
	var items = (document.getElementById("itemsholder")).innerHTML;	
	if((colour.value!='Colour')&&(logo.value!='Logo')){
		if(logo.value=="divideshirt"){items+=(colour.value+" Divide Shirt Size: "+size.value+", ")}
		else if(logo.value=="plusshirt"){items+=(colour.value+" Plus Shirt Size: "+size.value+", ")}
		else if(logo.value=="multiplyshirt"){items+=(colour.value+" Multiply Shirt Size: "+size.value+", ")}
		$('#itemsholder').html(items);
		price+=10;
		$('#price').html('£'+price);
	}
	else{alert("Select colour and logo!");}
}

function addtobasket2(){
	var colour = document.getElementById("colouroptions2");
	var logo = document.getElementById("logooptions2");
	var item = colour.value+logo.value;
	var items = (document.getElementById("itemsholder")).innerHTML;
	var size = document.getElementById("size2");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
		if(logo.value=="dividehoodie"){items+=(colour.value+" Divide Hoodie Size: "+size.value+", ")}
		else if(logo.value=="plushoodie"){items+=(colour.value+" Plus Hoodie Size: "+size.value+", ")}
		else if(logo.value=="multiplyhoodie"){items+=(colour.value+" Multiply Hoodie Size: "+size.value+", ")}
		$('#itemsholder').html(items);
		price+=15;
		$('#price').html('£'+price);
	}
	else{alert("Select colour and logo!");}
}

function addtobasket3(){
	var colour = document.getElementById("colouroptions3");
	var logo = document.getElementById("logooptions3");
	var item = colour.value+logo.value;
	var items = (document.getElementById("itemsholder")).innerHTML;
	var size = document.getElementById("size3");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
		if(logo.value=="dividehat"){items+=(colour.value+" Divide Hat Size: "+size.value+", ")}
		else if(logo.value=="plushat"){items+=(colour.value+" Plus Hat Size: "+size.value+", ")}
		else{items+=(colour.value+" Multiply Hat Size: "+size.value+", ")}
		$('#itemsholder').html(items);
		price+=6;
		$('#price').html('£'+price);
	}
	else{alert("Select colour and logo!");}
}