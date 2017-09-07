var names= ["小红", "小白", "小黑", "小绿", "小青", "小蓝"];
var students = new Array();
var table = document.getElementById("table");
var originalTableContent = table.innerHTML;

function createStudent(name, chi, math, eng)
{
	this.name = name;
	this.chi = chi;
	this.math = math;
	this.eng = eng;
	this.total = chi+math+eng;
	this.innerContent = "";
	this.createInnerHTML = function(){
		this.innerContent= "<tr><td>"+this.name+"</td>"
						+"<td>"+this.chi+"</td>"
						+"<td>"+this.math+"</td>"
						+"<td>"+this.eng+"</td>"
						+"<td>"+this.total+"</td></tr>"
		return this.innerContent;
	}
}

function generate()
{
	var table = document.getElementById("table");
	var insertContent = "";
	for(var i = 0; i < names.length; i++)
	{
		var name = names[i];
		var chi = Math.round(Math.random()*100);
		var math = Math.round(Math.random()*100);
		var eng = Math.round(Math.random()*100);

		// create student object
		var student = new createStudent(name, chi, math, eng);
		// console.log("name:" + student.name);
		// console.log("total:" + student.total);
		insertContent += student.createInnerHTML();
		students.push(student);
		// console.log("insertContent:" + insertContent);

		// var total = chi+math+eng;
		// insertContent+= "<tr><td>"+name+"</td>"
		// 				+"<td>"+chi+"</td>"
		// 				+"<td>"+math+"</td>"
		// 				+"<td>"+eng+"</td>"
		// 				+"<td>"+total+"</td></tr>"
	}

	table.innerHTML += insertContent;
}

function reorder(students)
{
	var table = document.getElementById("table");

	var insertContent = "";
	for(var i = 0; i < students.length; i++)
	{
		insertContent += students[i].createInnerHTML();
		console.log("insertContent:" + insertContent);
	}
	// console.log("originalTableContent:" + originalTableContent);
	// console.log("originalTableContent:" + originalTableContent);
	table.innerHTML = originalTableContent + insertContent;
}

function ascendChinese()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return a.chi - b.chi;
	});

	reorder(students);
	bind();
}

function descChinese()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return b.chi - a.chi;
	});

	reorder(students);
	bind();
}

function ascendMath()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return a.math - b.math;
	});

	reorder(students);
}

function descMath()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return b.math - a.math;
	});

	reorder(students);
}

function ascendEng()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return a.eng - b.eng;
	});

	reorder(students);
}

function descEng()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return b.eng - a.eng;
	});

	reorder(students);
}

function ascendTotal()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return a.total - b.total;
	});

	reorder(students);
}

function descTotal()
{
	// console.log("hit");
	students = students.sort(function(a, b){
		return b.total - a.total;
	});

	reorder(students);
}

function bind()
{
	document.getElementById("ch_up").onclick = ascendChinese;
	document.getElementById("ch_down").onclick = descChinese;
}


function initial()
{
	generate();
	bind();
}

initial();
