//global variables
		var love_choice1;
		var love_choice2;
		var love_choice3;
		var love_choice4;
		var job_choice1;
		var job_choice2;
		var job_choice3;
		var job_choice4;
		var car_choice1;
		var car_choice2;
		var car_choice3;
		var car_choice4;
		var money_choice1;
		var money_choice2;
		var money_choice3;
		var money_choice4;
		var pet_choice1;
		var pet_choice2;
		var pet_choice3;
		var pet_choice4;
		var place_choice1;
		var place_choice2;
		var place_choice3;
		var place_choice4;
		var started = false;
		var restarted = false;
		var inputs = document.querySelectorAll("INPUT");
        var divs =  document.querySelectorAll("DIV");
		var rButtons =  document.querySelectorAll(".random");
		var sp = document.querySelectorAll("SPAN");
		
		function start_mash() {
		
			var player_name = prompt("Please enter your name");
			if (player_name.length > 0) {
			document.getElementById("mash_title").innerHTML =
			player_name + "'s M.A.S.H.";}
			
			
		}
		

//player selection
function player_selection(){
		//Marriage
			
			
			  love_choice1 = document.getElementById("lc1").value;
				
					lc_list = document.getElementsByTagName("OL")[1];
					lc_list.getElementsByTagName("LI")[0].getElementsByTagName("span")[0].innerHTML = love_choice1;
				
			
					 love_choice2 = document.getElementById("lc2").value;
					lc_list.getElementsByTagName("LI")[1].getElementsByTagName("span")[0].innerHTML = love_choice2;

				
					 love_choice3 = document.getElementById("lc3").value;
				
					lc_list.getElementsByTagName("LI")[2].getElementsByTagName("span")[0].innerHTML = love_choice3;									
				
					 love_choice4 = document.getElementById("lc4").value;
				
					lc_list.getElementsByTagName("LI")[3].getElementsByTagName("span")[0].innerHTML = love_choice4;

			
				
		
//Occupation
			
			 job_choice1 = document.getElementById("jc1").value;
			 jc_list = document.getElementsByTagName("OL")[2];
			 jc_list.getElementsByTagName("LI")[0].getElementsByTagName("span")[0].innerHTML = job_choice1;
			 
			job_choice2 = document.getElementById("jc2").value;
			jc_list.getElementsByTagName("LI")[1].getElementsByTagName("span")[0].innerHTML = job_choice2;
			
			 job_choice3 = document.getElementById("jc3").value;
			 jc_list.getElementsByTagName("LI")[2].getElementsByTagName("span")[0].innerHTML = job_choice3;
					
			 job_choice4 = document.getElementById("jc4").value;
			jc_list.getElementsByTagName("LI")[3].getElementsByTagName("span")[0].innerHTML = job_choice4;


 

//Transportation
			
			 car_choice1 = document.getElementById("cc1").value;
					cc_list = document.getElementsByTagName("OL")[3];
					cc_list.getElementsByTagName("LI")[0].getElementsByTagName("span")[0].innerHTML = car_choice1;
					
			 car_choice2 = document.getElementById("cc2").value;
					cc_list.getElementsByTagName("LI")[1].getElementsByTagName("span")[0].innerHTML = car_choice2;
					
			car_choice3 = document.getElementById("cc3").value;
			cc_list.getElementsByTagName("LI")[2].getElementsByTagName("span")[0].innerHTML = car_choice3;
			
			 car_choice4 = document.getElementById("cc4").value;
			cc_list.getElementsByTagName("LI")[3].getElementsByTagName("span")[0].innerHTML = car_choice4;



        
//Money
			
			 money_choice1 = document.getElementById("mc1").value;
				mc_list = document.getElementsByTagName("OL")[4];
					mc_list.getElementsByTagName("LI")[0].getElementsByTagName("span")[0].innerHTML = money_choice1;
					
			 money_choice2 =  document.getElementById("mc2").value;
				mc_list.getElementsByTagName("LI")[1].getElementsByTagName("span")[0].innerHTML = money_choice2;
				
			 money_choice3 =  document.getElementById("mc3").value;
			mc_list.getElementsByTagName("LI")[2].getElementsByTagName("span")[0].innerHTML = money_choice3;
			
			money_choice4 =  document.getElementById("mc4").value;
			mc_list.getElementsByTagName("LI")[3].getElementsByTagName("span")[0].innerHTML = money_choice4;

 
		
//Pets
			
			 pet_choice1 = document.getElementById("pc1").value;
				pc_list = document.getElementsByTagName("OL")[5];
					pc_list.getElementsByTagName("LI")[0].getElementsByTagName("span")[0].innerHTML = pet_choice1
					
			pet_choice2 = document.getElementById("pc2").value;
				pc_list.getElementsByTagName("LI")[1].getElementsByTagName("span")[0].innerHTML = pet_choice2;
				
			pet_choice3 = document.getElementById("pc3").value;
				pc_list.getElementsByTagName("LI")[2].getElementsByTagName("span")[0].innerHTML = pet_choice3;
				
			pet_choice4 = document.getElementById("pc4").value;
			pc_list.getElementsByTagName("LI")[3].getElementsByTagName("span")[0].innerHTML = pet_choice4;

 
        
//Places
			
			 place_choice1 = document.getElementById("plc1").value;
				plc_list = document.getElementsByTagName("OL")[6];
					plc_list.getElementsByTagName("LI")[0].getElementsByTagName("span")[0].innerHTML = place_choice1;
					
			 place_choice2 = document.getElementById("plc2").value;
				plc_list.getElementsByTagName("LI")[1].getElementsByTagName("span")[0].innerHTML = place_choice2;
				
			 place_choice3 = document.getElementById("plc3").value;
			plc_list.getElementsByTagName("LI")[2].getElementsByTagName("span")[0].innerHTML = place_choice3;
			
			 place_choice4 = document.getElementById("plc4").value;
			plc_list.getElementsByTagName("LI")[3].getElementsByTagName("span")[0].innerHTML = place_choice4;


	 
 
		
}
  //clear background of yellow highlights
  function clear_background(){
	  
  var xx = document.querySelectorAll("LI");

	for (var i = 0; i < xx.length; i++) {
    xx[i].style.backgroundColor="transparent";
}
  }
  
//MASH result calculation   

		function mash_results(){
			clear_background();
			if (!started){
			player_selection();
			
			}
		if (restarted){
			for (var i = 0; i < sp.length; i++) {
				sp[i].style.display="inline-block";
				
		}
		}

//display MASH text
  document.getElementById("mash_house").style.display = "inline-block";
  //change div width
  for (i = 0; i <divs.length; i++){
	  divs[i].style.width = "24%";
  }
  
		alert("Your future is...(imagine a drumroll or tense gameshow music then press ok)");
		

		 
			//Mash array
		var mashHouse = ["Mansion", "House", "Apartment", "Shack"];
			var mash_number = Math.floor((Math.random() * 4));
			var mashHouseResult = mashHouse [mash_number];
			alert("You live in a " + mashHouseResult);
			var mash_list = document.getElementsByTagName("OL")[0];
			mash_list.getElementsByTagName("LI")[mash_number].style.backgroundColor = "yellow";
			
			
			
			//love result
			var love_results =[love_choice1, love_choice2, love_choice3, love_choice4];
var love_number = Math.floor((Math.random() * 4));

alert ("You are married to " + love_results[love_number]);
lc_list.getElementsByTagName("LI")[love_number].style.backgroundColor = "yellow";



//job result
var job_results =[job_choice1, job_choice2, job_choice3, job_choice4];
var job_number = Math.floor((Math.random() * 4));
alert ("You work as a " + job_results[job_number]);
jc_list.getElementsByTagName("LI")[job_number].style.backgroundColor = "yellow";


//car result
var car_results= [car_choice1, car_choice2, car_choice3, car_choice4];
var car_number = Math.floor((Math.random() * 4));
alert ("You drive a " + car_results[car_number]);
cc_list.getElementsByTagName("LI")[car_number].style.backgroundColor = "yellow";

 
//money result
var money_results = [money_choice1, money_choice2, money_choice3, money_choice4];
var money_number = Math.floor((Math.random() * 4));
alert ("You make " + money_results[money_number] + " a year");
mc_list.getElementsByTagName("LI")[money_number].style.backgroundColor = "yellow";


//pet result
var pet_results= [pet_choice1, pet_choice2, pet_choice3, pet_choice4];
var pet_number = Math.floor((Math.random() * 4));
alert ("You have a pet "+ pet_results[pet_number]);
pc_list.getElementsByTagName("LI")[pet_number].style.backgroundColor = "yellow";


//place result
var place_results= [place_choice1, place_choice2, place_choice3, place_choice4];
var place_number = Math.floor((Math.random() * 4));
alert ("and You live in " + place_results[place_number]);	
plc_list.getElementsByTagName("LI")[place_number].style.backgroundColor = "yellow";	

//change get future button
document.getElementById("futurebutton").innerHTML = "Re-Calculate Future";
//change 'started' to true so results can be re-calculated
started = true;

//hide text input 
for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.display="none";
}
for (var i = 0; i < rButtons.length; i++) {
    rButtons[i].style.display="none";
}
}

//restarts and resets game
function reset_game(){
	restarted = true;
	start_mash();
	clear_background();
	document.getElementById("futurebutton").innerHTML = "Calculate Future!";
	document.getElementById("mash_house").style.display = "none";
	
	//unhide inputs and clear values
	for (var i = 0; i < inputs.length; i++) {
    inputs[i].style.display="inline-block";
	inputs[i].value = "";
	inputs[i].placeholder= "Type here or pick a random entry";
	}
	for (var i = 0; i < rButtons.length; i++) {
    rButtons[i].style.display="inline-block";
}
	
	//change div width back
	for (i = 0; i <divs.length; i++){
	  divs[i].style.width = "30%";
  }
	
	//clear past choices
  

for (var i = 0; i < sp.length; i++) {
    sp[i].value="";
	sp[i].style.display="none";
}
//started is false so player_selection() will be activated
	started = false;
}

//generate a random name 
function randomName(id){
	//placeholder text to show api is still loading
	document.getElementById(id).placeholder = "Loading...";
	var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
        var person = JSON.parse(this.responseText);
		document.getElementById(id).value = person.name + " " + person.surname + " from " + person.region;
		
    }
};
xmlhttp.open("GET", "https://uinames.com/api/", true);
xmlhttp.send();	
}

//get a random Occupation
function randomJob(id){
	//placeholder text to show api is still loading
	document.getElementById(id).placeholder = "Loading...";
	var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
        var mainList = JSON.parse(this.responseText);
		var num = Math.floor((Math.random() * mainList.occupation_data.length));
		var num2 = Math.floor((Math.random() * mainList.occupation_data[num].occupations.length));
		document.getElementById(id).value = mainList.occupation_data[num].occupations[num2].title;
		
    }
};
xmlhttp.open("GET", "https://cors.io/?http://api.cteresource.org/occupations", true);
xmlhttp.send();	
}

//generate a random car 
function randomCar(id){
	//placeholder text to show api is still loading
	document.getElementById(id).placeholder = "Loading...";
	var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
        var carList = JSON.parse(this.responseText);
		var num = Math.floor((Math.random() * carList.Results.length));
		
		document.getElementById(id).value = carList.Results[num].Mfr_CommonName;
		
    }
};
xmlhttp.open("GET", "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json", true);
xmlhttp.send();
	 
	
   
	
	
}
//generate a random Pet 
function randomPet(id){
	//placeholder text to show api is still loading
	document.getElementById(id).placeholder = "Loading...";
	var xmlhttp = new XMLHttpRequest();
	var animals = ["barnyard", "bird", "cat", "dog", "horse", "reptile", "smallfurry", "rabbit"];
	var num = Math.floor((Math.random() * animals.length));
		var petType = animals[num];
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
        var petList = JSON.parse(this.responseText);
		
		var pet = petList.petfinder.breeds.breed;
		var num2 = Math.floor((Math.random() * pet.length));
		
		document.getElementById(id).value = pet[num2].$t + " (" + petType + ")" ;
		
    }
};
xmlhttp.open("GET", "https://cors.io/?https://api.petfinder.com/breed.list?key=9bce8b750600914be2415a1932012ee0&format=json&animal=" + petType, true);
xmlhttp.send();
	 
	
   
	
	
}

//get a random country
function randomPlace(id){
	var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
        var cList = JSON.parse(this.responseText);
		var num = Math.floor((Math.random() * cList.length));
		document.getElementById(id).value = cList[num].name;		
    }
};
xmlhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
xmlhttp.send();
}

//get a random number for salary
function randomSal(id){
	var num = Math.floor((Math.random() * 1000000));
		document.getElementById(id).value = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
	

function change_background(){

 var pageimage = document.getElementsByTagName("body")[0];
  
    if (pageimage.style.backgroundImage.match("https://lh3.googleusercontent.com/2iIWFIsblnAFf-2uGvwwazM5H236g4VI3A30wqi3p1wqSgBGwbWDEeHwNOMlGKtZnVxp2lEK9c6nbOIA9GzgIP7JRCZxNVFQBFhhW2eRCzdDFeyyjBUncqOG4UD58L0H123boDzKCPZnM2L38IzUxgoeLiVe4SeRVsw5nNtvlYbA0kMqYSX50CcH7U-9SAGJyJkCnbJAgB8S0Fn5KL5qj3pG5W7sg_h3fvNaj69pptcr2_3oXAzaWIRnj_j5gLPb9xyilTTSD6Ut1CO_HAYAhyzccC66OIFlqrJJoX-23M0XJgux-leMrB3ER0L7D-ThbCLluv9CP2MyhIwf_wRF0uCmwGSsSpu1_V7xmEx143megcHLPKNlujZ4cTiIcO9PbQ3Kz_BMZWwrB1SngR4RV8Fr9zOXI6Jl_aA8DuEpBKnX1dM1a0R6Xo_Q0TKcXNrKhgqEW7Hz5APqGIQ0snQnrG9F58MLwWgHsDIrUZlGyyzIPUoFK4758LhjVQhMC97W6w1HpyuBxopOIxAjbqWmB1R9yvcCkMk8coLiY_tGHjzAa6rprqUKNSCCfv2_HN5JDNecbqXh7ch_DvDoQsOLKVRCzK-OlncHdiK-Hqr6=w500-h322-no")) {
        pageimage.style.backgroundImage = "url(https://lh3.googleusercontent.com/M_LQF_XPbDFTrv-1j3wnMWiRSyqAijywKy07jxk5imf0DyRdaoNjLDLZHJd5eedgR8aaPmPHk8xBXuWSflz3nJ6_TFc21FklbabBzTeFrl8cDKupeoNEAqW78Gba7IFA4wSIkW_tRqEULGj8x5tXcHWumh_P2oa6sYbMvK_7HaZ1SH7NM19f55Y8eyrjC0Rm8LnLPcmAL7DqRLgaVyipeQyW-yM7u7h1NJO4Z_K39_rgfj89q7Wb3gWxC0rqvr1qPkc2YfvDpayyED0E2A9xKO_uRRB-gEpvzHsgc2mvl7E41nnj75fbhMgoNelwRBYvdC_Nb7Khsx-jF7-zysKU9EekbP0u1aQDP1VjAeoF1v9anE72ktwNMneBU_kR-_c8iswpEfwA_QJ3R7nJWAiox_lhxoS1FLcVFLOatGxDhw8OvDJv-OwlMjh0tr1jIKce_uT_MLWk6LbYngAnmeFKvAMKJEXy8FuvaXF2O2I1iZrCKNPHv3d_L7nWZYHfx09PxRTy0_4jaxabPSn77bbr0_eTXRDxL-5VSW1bn3T1dRcGei72IUAlVKmE69Gfn-Xzus5tKr_y3bsl8mcuxIpBt-_j2_BzqXinJmO7T-8l=w609-h340-no)";
		
		
    } 
	else {
        pageimage.style.backgroundImage = "url(https://lh3.googleusercontent.com/2iIWFIsblnAFf-2uGvwwazM5H236g4VI3A30wqi3p1wqSgBGwbWDEeHwNOMlGKtZnVxp2lEK9c6nbOIA9GzgIP7JRCZxNVFQBFhhW2eRCzdDFeyyjBUncqOG4UD58L0H123boDzKCPZnM2L38IzUxgoeLiVe4SeRVsw5nNtvlYbA0kMqYSX50CcH7U-9SAGJyJkCnbJAgB8S0Fn5KL5qj3pG5W7sg_h3fvNaj69pptcr2_3oXAzaWIRnj_j5gLPb9xyilTTSD6Ut1CO_HAYAhyzccC66OIFlqrJJoX-23M0XJgux-leMrB3ER0L7D-ThbCLluv9CP2MyhIwf_wRF0uCmwGSsSpu1_V7xmEx143megcHLPKNlujZ4cTiIcO9PbQ3Kz_BMZWwrB1SngR4RV8Fr9zOXI6Jl_aA8DuEpBKnX1dM1a0R6Xo_Q0TKcXNrKhgqEW7Hz5APqGIQ0snQnrG9F58MLwWgHsDIrUZlGyyzIPUoFK4758LhjVQhMC97W6w1HpyuBxopOIxAjbqWmB1R9yvcCkMk8coLiY_tGHjzAa6rprqUKNSCCfv2_HN5JDNecbqXh7ch_DvDoQsOLKVRCzK-OlncHdiK-Hqr6=w500-h322-no)";
		
    }
	}
