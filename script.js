/*Add your JavaScript here*/
var damonScore = 0;
var stefanScore = 0;

var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", addDamon);
q1a2.addEventListener("click", addStefan);
q2a1.addEventListener("click", addStefan);
q2a2.addEventListener("click", addDamon);
q3a1.addEventListener("click", addDamon);
q3a2.addEventListener("click", addStefan);

var answer = document.getElementById("result");

function addDamon() {
	damonScore += 1;
	questionCount += 1;
	console.log("questionCount = " + questionCount + " damonScore = " + damonScore);
	if (questionCount == 3) {
	console.log("The quiz is done!");
  }
	updateResult();
}


function addStefan () {
	stefanScore += 1;
  questionCount += 1;
	console.log("questionCount = " + questionCount + " stefanScore = " + stefanScore);
	if (questionCount == 3) {
	console.log("The quiz is done!");
  }
	updateResult();
}


function updateResult() {
	if (damonScore >= 2  && questionCount == 3 ) {
		result.innerHTML = "You are team Damon!";
		console.log("You are team Damon!");
	}
	else if (stefanScore >= 2 && questionCount == 3 ) {
		result.innerHTML = "You are team Stefan!";
		console.log("You are team Stefan!");
	}
}

var result = document.getElementById("result");
//q1a1
function deactivateq1a1() {
	document.getElementById("q1a1").disabled = true;
	document.getElementById("q1a2").disabled = true;
}

q1a1.addEventListener("click", colorChangeq1a1);
function colorChangeq1a1() {
	q1a1.style.backgroundColor = "#023E8A";
	q1a1.style.color = "white";
	//q1a2.style.opacity = "0.75";
}
//q1a2
function deactivateq1a2() {
	document.getElementById("q1a1").disabled = true;
	document.getElementById("q1a2").disabled = true;
}

q1a2.addEventListener("click", colorChangeq1a2);
function colorChangeq1a2() {
	q1a2.style.backgroundColor = "#023E8A";
	q1a2.style.color = "white";
}
//q2a1
function deactivateq2a1() {
	document.getElementById("q2a1").disabled = true;
	document.getElementById("q2a2").disabled = true;
}

q2a1.addEventListener("click", colorChangeq2a1);
function colorChangeq2a1() {
	q2a1.style.backgroundColor = "#023E8A";
	q2a1.style.color = "white";
}

//q2a2
function deactivateq2a2() {
	document.getElementById("q2a1").disabled = true;
	document.getElementById("q2a2").disabled = true;
}

q2a2.addEventListener("click", colorChangeq2a2);
function colorChangeq2a2() {
	q2a2.style.backgroundColor = "#023E8A";
	q2a2.style.color = "white";
}
//q3a1
function deactivateq3a1() {
	document.getElementById("q3a1").disabled = true;
	document.getElementById("q3a2").disabled = true;
}

q3a1.addEventListener("click", colorChangeq3a1);
function colorChangeq3a1() {
	q3a1.style.backgroundColor = "#023E8A";
	q3a1.style.color = "white";
}

//q3a2
function deactivateq3a2() {
	document.getElementById("q3a1").disabled = true;
	document.getElementById("q3a2").disabled = true;
}

q3a2.addEventListener("click", colorChangeq3a2);
function colorChangeq3a2() {
	q3a2.style.backgroundColor = "#023E8A";
	q3a2.style.color = "white";
}

function scrollAndRestart() {
	damonScore=0;
	stefanScore=0;
	questionCount=0;
	console.log(damonScore);
	console.log(stefanScore);
	console.log(questionCount);
	document.getElementById("q1a1").disabled = false;
	document.getElementById("q1a2").disabled = false;
	document.getElementById("q2a1").disabled = false;
	document.getElementById("q2a2").disabled = false;
	document.getElementById("q3a1").disabled = false;
	document.getElementById("q3a2").disabled = false;
	q1a1.style.backgroundColor = "#BDE0FE";
	q1a1.style.color = "black";

  q1a2.style.backgroundColor = "#BDE0FE";
	q1a2.style.color = "black";

	q2a1.style.backgroundColor = "#BDE0FE";
	q2a1.style.color = "black";

	q2a2.style.backgroundColor = "#BDE0FE";
	q2a2.style.color = "black";

	q3a1.style.backgroundColor = "#BDE0FE";
	q3a1.style.color = "black";

	q3a2.style.backgroundColor = "#BDE0FE";
	q3a2.style.color = "black";

	result.innerHTML = "Your result is...";
}