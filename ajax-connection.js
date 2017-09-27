/*
	Author: Adams Asad
	Softvision Company 
	Description: A simple ajax call from an html file(index.html) to fetch the message "Hello World" printed in text file(server.txt)
	Repository: www.github.com/asadadams
*/
var xmlhttp = createXMLHttpRequestObject(); //Initializing XMLHttpRequest Object

function createXMLHttpRequestObject(){ // Function for creating XMLHttpRequest Object
	var xmlhttp;
	try{
		xmlhttp = new XMLHttpRequest();
	}catch(e){
		//Handling browsers older browsers and Internet Explorers
		var XMLHttpVersions = new array('MSXML.XMLHTTP.6.0','MSXML.XMLHTTP.5.0','MSXML.XMLHTTP.4.0','MSXML.XMLHTTP.3.0','MSXML.XMLHTTP.2.0','MSXML.XMLHTTP','MICROSOFT.XMLHTTP');
		for(var i=0;i < XMLHttpVersions.length && !xmlhttp;i++){
			try{
				xmlhttp = new ActiveXObject(XMLHttpVersions[i]);
			}catch(e){}
		}
	}
	//If local variable xmlhttp is set return else alert an error message
	if(!xmlhttp)
		alert("Could not create XMLHttpRequest Object");
	else
		return xmlhttp;
}

function getData(){ //Function called in html
	if(xmlhttp){
		try{
			xmlhttp.open('GET','server.txt',true); // Configuring XMLHttpRequest Object
			xmlhttp.onreadystatechange = handleServerResponse; 
			xmlhttp.send(null); // XMLHttpRequest Object sending request to server
		}catch(e){
			alert(e.toString()); // Handling error
		}
	}
}

function handleServerResponse(){ //Function for handling proccesses if 
	if(xmlhttp.readyState == 4){ 
		if(xmlhttp.status == 200){
			document.getElementById('fromServer').innerHTML = xmlhttp.responseText; //Fetching data from server and placeing it on the html element with id 'fromServer'
		}else{
			alert("Response was not successful" + xmlhttp.statusText); // If HTTP request is not OK
		}
	}
}
