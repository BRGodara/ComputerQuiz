var Atd = 0;
var Fw = 0;
var Bc = 0;

var Score = 0;

var Answered = 0;
var QueMax = 9999;
var QueN = 0;

var Que = "Question";
var OpA = "OptionA";
var OpB = "OptionB";
var OpC = "OptionC";
var OpD = "OptionD";
var Ans = 1;


function Exit(){
	if(confirm("Are you sure that you wanna 'EXIT'?")){
		Atd = Fw - Bc;
		Atd = Atd-1;
		Score = Score-1;
		alert("Your Score is "+Score+"/"+Atd+"!");
		window.location = "index.html";
	}
}

function NextX(){
	if(Answered == 1){
		Next();
	}
}
function Next(){
	if(QueN != QueMax){
		QueN = QueN + 1;
	}
	
	Question(QueN);
	
	var QueX = document.getElementById("Que").innerText = Que;
	var OpAX = document.getElementById("OpA").innerText = OpA;
	var OpBX = document.getElementById("OpB").innerText = OpB;
	var OpCX = document.getElementById("OpC").innerText = OpC;
	var OpDX = document.getElementById("OpD").innerText = OpD;
	var JustQ = document.getElementById("JustQ").innerText = QueN;
	
	Attended(1);
	Reset();
}

function Previous(){
	if(QueN != 1){
		QueN = QueN - 1;
	}
	
	Question(QueN);
	
	var QueX = document.getElementById("Que").innerText = Que;
	var OpAX = document.getElementById("OpA").innerText = OpA;
	var OpBX = document.getElementById("OpB").innerText = OpB;
	var OpCX = document.getElementById("OpC").innerText = OpC;
	var OpDX = document.getElementById("OpD").innerText = OpD;
	var JustQ = document.getElementById("JustQ").innerText = QueN;
	
	document.getElementById("Correct").style.display = "none";
	document.getElementById("Incorrect").style.display = "none";
	Attended(0);
}

function Check(Op){
	if(Ans == Op){
		Score = Score+1;
		document.getElementById("Option"+Op).style.background = "#00FF00";
		document.getElementById("Correct").style.display = "block";
		document.getElementById("Incorrect").style.display = "none";
	}else{
		document.getElementById("Option"+Op).style.background = "#FF000F";
		document.getElementById("Option"+Ans).style.background = "#00FF00";
		document.getElementById("Incorrect").style.display = "block";
		document.getElementById("Correct").style.display = "none";
	}
	Answered = 1;
}

function Reset(){
	document.getElementById("Correct").style.display = "none";
	document.getElementById("Incorrect").style.display = "none";
	var Ax = document.getElementById("Option1").style.background = "#E2FFC5";
	var Bx = document.getElementById("Option2").style.background = "#E2FFC5";
	var Cx = document.getElementById("Option3").style.background = "#E2FFC5";
	var Dx = document.getElementById("Option4").style.background = "#E2FFC5";
	Answered = 0;
}

function Question(Zq){
	if(Zq == 1){
		Que = "The term 'Computer' is derived from_____.";
		OpA = "Latin";
		OpB = "German";
		OpC = "French";
		OpD = "None of the Above";
		Ans = 1;
	}else if(Zq == 2){
		Que = "Who is the inventor of 'Difference Engine'?";
		OpA = "Augusta Adaming";
		OpB = "Simur Cray";
		OpC = "Charles Babbage";
		OpD = "Allen Turing";
		Ans = 3;
	}else if(Zq == 3){
		Que = "Who is the father of Computer?";
		OpA = "Allen Turing";
		OpB = "Simur Cray";
		OpC = "Augusta Adaming";
		OpD = "Charles Babbage";
		Ans = 4;
	}else if(Zq == 4){
		Que = "Who is the father of Computer science?";
		OpA = "Augusta Adaming";
		OpB = "Edward Robert";
		OpC = "Charles Babbage";
		OpD = "Allen Turing";
		Ans = 4;
	}else if(Zq == 5){
		Que = "Who is the father of personal computer?";
		OpA = "Augusta Adaming";
		OpB = "Edward Robert";
		OpC = "Simur Cray";
		OpD = "Charles Babbage";
		Ans = 2;
	}else if(Zq == 6){
		Que = "A CPU contains?";
		OpA = "an arithmetic logic unit and a card reader";
		OpB = "an analytical engine and a control unit";
		OpC = "a control unit and an arithmetic logic unit";
		OpD = "a card reader and a printing device";
		Ans = 3;
	}else if(Zq == 7){
		Que = "Which of the following controls the process of interaction between the user and the operating system?";
		OpA = "Platform";
		OpB = "User interface";
		OpC = "Screen saver";
		OpD = "Language translator";
		Ans = 2;
	}else if(Zq == 8){
		Que = "The first computers were programmed using?";
		OpA = "assembly language";
		OpB = "machine language";
		OpC = "Programming language";
		OpD = "All of the above";
		Ans = 2;
	}else if(Zq == 9){
		Que = "Full form of ATM is?";
		OpA = "Automatic Transfer Money";
		OpB = "Automatic Teller Machine";
		OpC = "Any Time Money";
		OpD = "None of the above";
		Ans = 2;
	}else if(Zq == 10){
		Que = "Full form of USB";
		OpA = "United Service Bank";
		OpB = "Universal Serial Bus";
		OpC = "Universal Service Broadband";
		OpD = "None of the above";
		Ans = 2;
	}
	
	
	
	
	
	QueMax = 10;
}

function Attended(Zzz){
	if(Zzz == 1){
		
		Fw = Fw + 1;
		
	}else{
		
		Bc = Bc + 1;
		
	}
	
	
	//alert(Atd +" , "+Fw+" , "+Bc);
}








