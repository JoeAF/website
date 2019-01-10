var channelID = "UC0C-w0YjGpqDXGB8IHb662A";
var channelURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(channelURL)+channelID,
function(data) {
   var counter;
   var videos = '';
   for(counter=0;counter<10;counter++){ //Runs 9 times to get the lastest 9 videos
	   var link = data.items[counter].link;
	   var id = link.substr(link.indexOf("=")+1);
	   videos += '<div style="position:relative;"><p><iframe src = "https://youtube.com/embed/'+id+'?controls=0&showinfo=0&rel=0" width="420" height="315" frameborder="0" allow="autoplay" allowfullscreen></iframe></a></p><a  href="'+link+'" target="_blank" style="position:absolute; bottom:0; left:0; display:inline-block;"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png" width="420px" height="315px"></a></div>'
	   $('#videosholder').html(videos);//Youtube videos sent to the page
   }});

var LoggedIn = false;
function Login() {
	 if(LoggedIn==false){
		 var inputtedUsername= document.getElementById("LoginUsername");
		 var inputtedPassword= document.getElementById("LoginPassword");
		 //if the username and password you entered matches the one stored in local storage it successfully logs you in
		 if ((inputtedUsername.value == localStorage.getItem('Username')) && (inputtedPassword.value == localStorage.getItem('Password'))){
			 LoggedIn = true;
			 alert("You have been logged in! Your item is on the way.");} //Success Message
		 else{alert("Incorrect details have been entered!")}//Otherwise it tells you your details were incorrect
		 }
	 else{alert("You must log out first");}//if you're already logged in it won't log you in to the account you just entered, instead it will tell you to log out first.
    };

function SignUp() {
	 if(LoggedIn==false){
		 var inputtedUsername= document.getElementById("SignUpUsername");
		 var inputtedPassword= document.getElementById("SignUpPassword");
		 if((inputtedPassword.value).length<8){ //Enforces user to make a strong password
		 alert("Password must be at least 8 charachers long!")
		 }
		 else{
			 if(inputtedUsername.value == localStorage.getItem('Username')){ //Makes sure all usernames are unique
				alert("Username already taken");
			 }
			 else{
				 localStorage.setItem("Username", inputtedUsername.value);
				 localStorage.setItem("Password", inputtedPassword.value);
				 LoggedIn = true;
				 alert("You have signed up and have been logged in! Your item is on the way."); //Success Message
			 }
		 }
	 }
	 else{alert("You must log out first");} //if you're already logged in it won't log you in to the account you just entered, instead it will tell you to log out first.
    };
	
function Logout(){ //function allows user to log out and alerts them if it's successfull
	if(LoggedIn==true){
		alert("You have logged out");
		LoggedIn=false;
	}
	else{alert("You are already logged out");} //If pressed when they're already logged out, they will get this message.
}

function changeshirt(){
	var colour = document.getElementById("colouroptions");
	var logo = document.getElementById("logooptions");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
	$('#tshirtholder').html('<img src = "Assets/'+colour.value+logo.value+'.gif" width = 38%>'); //adds an image of the shirt they selected through json
	}
	else{}
}

function changehoodie(){
	var colour = document.getElementById("colouroptions2");
	var logo = document.getElementById("logooptions2");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
	$('#hoodiesholder').html('<img src = "Assets/'+colour.value+logo.value+'.gif" width = 38%>'); //adds an image of the hoodie they selected through json
	}
	else{}
}

function changehat(){
	var colour = document.getElementById("colouroptions3");
	var logo = document.getElementById("logooptions3");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
	$('#hatsholder').html('<img src = "Assets/'+colour.value+logo.value+'.gif" width = 38%>'); //adds an image of the hat they selected through json
	}
	else{}
}
var price = 0;
function addtobasket1(){ //Adds tshirts to basket
	var colour = document.getElementById("colouroptions");
	var logo = document.getElementById("logooptions");
	var size = document.getElementById("size1");
	var items = (document.getElementById("itemsholder")).innerHTML;	
	if((colour.value!='Colour')&&(logo.value!='Logo')){
		if(logo.value=="divideshirt"){items+=("("+colour.value+")"+" Divide Shirt Size: "+size.value+", ")}
		else if(logo.value=="plusshirt"){items+=("("+colour.value+")"+" Plus Shirt Size: "+size.value+", ")}
		else if(logo.value=="multiplyshirt"){items+=("("+colour.value+")"+" Multiply Shirt Size: "+size.value+", ")}
		$('#itemsholder').html(items); //Returns item information to page
		price+=10;
		$('#price').html('£'+price); //Returns new price of basket to page
	}
	else{alert("Select colour and logo!");}
}

function addtobasket2(){ //Adds hoodie to basket
	var colour = document.getElementById("colouroptions2");
	var logo = document.getElementById("logooptions2");
	var items = (document.getElementById("itemsholder")).innerHTML;
	var size = document.getElementById("size2");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
		if(logo.value=="dividehoodie"){items+=("("+colour.value+")"+" Divide Hoodie Size: "+size.value+", ")}
		else if(logo.value=="plushoodie"){items+=("("+colour.value+")"+" Plus Hoodie Size: "+size.value+", ")}
		else if(logo.value=="multiplyhoodie"){items+=("("+colour.value+")"+" Multiply Hoodie Size: "+size.value+", ")}
		$('#itemsholder').html(items); //Returns item information to page
		price+=15;
		$('#price').html('£'+price); //Returns new price of basket to page
	}
	else{alert("Select colour and logo!");}
}

function addtobasket3(){  //Adds hat to basket
	var colour = document.getElementById("colouroptions3");
	var logo = document.getElementById("logooptions3");
	var items = (document.getElementById("itemsholder")).innerHTML;
	var size = document.getElementById("size3");
	if((colour.value!='Colour')&&(logo.value!='Logo')){
		if(logo.value=="dividehat"){items+=("("+colour.value+")"+" Divide Hat Size: "+size.value+", ")}
		else if(logo.value=="plushat"){items+=("("+colour.value+")"+" Plus Hat Size: "+size.value+", ")}
		else{items+=("("+colour.value+")"+" Multiply Hat Size: "+size.value+", ")}
		$('#itemsholder').html(items); //Returns item information to page
		price+=6;
		$('#price').html('£'+price); //Returns new price of basket to page
	}
	else{alert("Select colour and logo!");}
}


window.onscroll = function() {scrollFunc()};
function scrollFunc() {//Allows navigation bar to stay at the top as you scroll
  var navbar = document.getElementById("mynavbar");
  var stay = mynavbar.offsetTop;
  if (window.pageYOffset > stay) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}