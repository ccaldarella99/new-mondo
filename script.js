

//ONLOAD:
var dataLength = myData.length;

function loadData() {
	document.getElementById("container").innerHTML = "";
	for(var i=0; i< dataLength; i++)
	{
		//alert(i);
		var j = (Math.floor(i/2)+1);
		var fb = "";
		if(i % 2 == 0)
		{ fb = "f"; }
		else
		{ fb = "b"; }

		var addRack =
	`		<div class="rack-group ` + fb + `">
				<span class="name" id="r` + j + `-` + fb + `-name"></span>
				<div class="rack front" id="rack-one-` + fb +  `">
					<div class="slot s1" id="r` + j + `-s1-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s1-` + fb +  `-text"></span>
					</div>
					<div class="slot s2" id="r` + j + `-s2-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s2-` + fb +  `-text"></span>
					</div>
					<div class="slot s3" id="r` + j + `-s3-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s3-` + fb +  `-text"></span>
					</div>
					<div class="slot s4" id="r` + j + `-s4-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s4-` + fb +  `-text"></span>
					</div>
					<div class="tmc" id="r` + j + `-tmc-` + fb +  `">&nbsp;
						<span class="tmc-type tmc-type-top" id="r` + j + `-tmc-` + fb +  `-top-type"></span>
						<span class="tmc-text tmc-text-top" id="r` + j + `-tmc-` + fb +  `-top-text"></span>
						<span class="tmc-type tmc-type-bot" id="r` + j + `-tmc-` + fb +  `-bot-type"></span>
						<span class="tmc-text tmc-text-bot" id="r` + j + `-tmc-` + fb +  `-bot-text"></span>
					</div>
					<div class="slot s5" id="r` + j + `-s5-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s5-` + fb +  `-text"></span>
					</div>
					<div class="slot s6" id="r` + j + `-s6-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s6-` + fb +  `-text"></span>
					</div>
					<div class="slot s7" id="r` + j + `-s7-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s7-` + fb +  `-text"></span>
					</div>
					<div class="slot s8" id="r` + j + `-s8-` + fb +  `">
						<span class="slot-text" id="r` + j + `-s8-` + fb +  `-text"></span>
					</div>
				</div>
				<div>
					<i class="fa fa-edit rack-edit" id="edit-r` + j + `-` + fb +  `" onclick="editRack('` + i + `','` + fb +  `')"></i>
				</div>
			</div>`;

						//<span class="tmc-type tmc-top" id="r` + j + `-tmc-` + fb +  `-top-type"></span>
						//<span class="tmc-top-text" id="r` + j + `-tmc-` + fb +  `-top-text"></span>
						//<span class="tmc-type tmc-bot" id="r` + j + `-tmc-` + fb +  `-bot-type"></span>
						//<span class="tmc-bot-text" id="r` + j + `-tmc-` + fb +  `-bot-text"></span>
						//<span class="tmc-type" id="r` + j + `-tmc-` + fb +  `-type"></span>
						//<span class="tmc-text" id="r` + j + `-tmc-` + fb +  `-text"></span>
					//<i class="fa fa-edit rack-edit" id="edit-r` + j + `-` + fb +  `" onclick="editRack('r` + j + `-` + fb +  `')"></i>



		document.getElementById("container").innerHTML += addRack;

		document.getElementById(myData[i].id + "-name").innerHTML = myData[i].Name + " - " + myData[i].Position + "<br /><br />";
		document.getElementById(myData[i].Slot1.id + "-text").innerHTML = "Manager: " + myData[i].Slot1.Manager + "<br />Date: " + myData[i].Slot1.Date + "<br />HE: " + myData[i].Slot1.HE;
		document.getElementById(myData[i].Slot2.id + "-text").innerHTML = "Manager: " + myData[i].Slot2.Manager + "<br />Date: " + myData[i].Slot2.Date + "<br />HE: " + myData[i].Slot2.HE;
		document.getElementById(myData[i].Slot3.id + "-text").innerHTML = "Manager: " + myData[i].Slot3.Manager + "<br />Date: " + myData[i].Slot3.Date + "<br />HE: " + myData[i].Slot3.HE;
		document.getElementById(myData[i].Slot4.id + "-text").innerHTML = "Manager: " + myData[i].Slot4.Manager + "<br />Date: " + myData[i].Slot4.Date + "<br />HE: " + myData[i].Slot4.HE;
		document.getElementById(myData[i].Slot5.id + "-text").innerHTML = "Manager: " + myData[i].Slot5.Manager + "<br />Date: " + myData[i].Slot5.Date + "<br />HE: " + myData[i].Slot5.HE;
		document.getElementById(myData[i].Slot6.id + "-text").innerHTML = "Manager: " + myData[i].Slot6.Manager + "<br />Date: " + myData[i].Slot6.Date + "<br />HE: " + myData[i].Slot6.HE;
		document.getElementById(myData[i].Slot7.id + "-text").innerHTML = "Manager: " + myData[i].Slot7.Manager + "<br />Date: " + myData[i].Slot7.Date + "<br />HE: " + myData[i].Slot7.HE;
		document.getElementById(myData[i].Slot8.id + "-text").innerHTML = "Manager: " + myData[i].Slot8.Manager + "<br />Date: " + myData[i].Slot8.Date + "<br />HE: " + myData[i].Slot8.HE;
		//document.getElementById(myData[i].TMC.id + "-text").innerHTML = "IP: " + myData[i].TMC.IP + "<br />Name: " + myData[i].TMC.Name + "<br />" + myData[i].TMC.Number;
		//document.getElementById(myData[i].TMC.id + "-type").innerHTML = myData[i].TMC.Type;
		document.getElementById(myData[i].TMCTOP.id + "-text").innerHTML = "IP: " + myData[i].TMCTOP.IP + "<br />Name: " + myData[i].TMCTOP.Name + "<br />" + myData[i].TMCTOP.Number;
		document.getElementById(myData[i].TMCTOP.id + "-type").innerHTML = myData[i].TMCTOP.Type;
		document.getElementById(myData[i].TMCBOT.id + "-text").innerHTML = "IP: " + myData[i].TMCBOT.IP + "<br />Name: " + myData[i].TMCBOT.Name + "<br />" + myData[i].TMCBOT.Number;
		document.getElementById(myData[i].TMCBOT.id + "-type").innerHTML = myData[i].TMCBOT.Type;
	}

	return myData;
}

function editRack(i, fb) {
	var j = (Math.floor(i/2) + 1);
	var addRack =
	`<table class="t-pos">
<tr><th><h2>NAME:</h2></th><th><input type="text" id="r` + j + `-` + fb + `-name-form"></th></tr>
<tr><th><h2>Position:</h2></th><th><input type="text" id="r` + j + `-` + fb + `-position"></th></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 1:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s1-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s1-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s1-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 2:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s2-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s2-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s2-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 3:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s3-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s3-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s3-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 4:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s4-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s4-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s4-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 5:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s5-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s5-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s5-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 6:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s6-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s6-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s6-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 7:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s7-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s7-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s7-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 8:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s8-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s8-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s8-` + fb +  `-text-he"></td></tr>

<tr><td><div id="cancel" class="save-btn" onclick="closeOverlay();">Cancel</div></td><td><a download="info.txt" id="downloadlink" class="save-btn">Save & Create File</a></td></tr>
</table>`;

		document.getElementById("edit-rack").innerHTML = addRack;

		//console.log("j=" + j);
		//console.log("NAME: " + myData[i].Name);
		//console.log("POS:  " + myData[i].Position);
		document.getElementById(myData[i].id + "-name-form").value = myData[i].Name;
		document.getElementById(myData[i].id + "-position").value = myData[i].Position;

		document.getElementById(myData[i].Slot1.id + "-text-mgr").value =  myData[i].Slot1.Manager;
		document.getElementById(myData[i].Slot1.id + "-text-date").value = myData[i].Slot1.Date;
		document.getElementById(myData[i].Slot1.id + "-text-he").value =   myData[i].Slot1.HE;

		document.getElementById(myData[i].Slot2.id + "-text-mgr").value =  myData[i].Slot2.Manager;
		document.getElementById(myData[i].Slot2.id + "-text-date").value = myData[i].Slot2.Date;
		document.getElementById(myData[i].Slot2.id + "-text-he").value =   myData[i].Slot2.HE;

		document.getElementById(myData[i].Slot3.id + "-text-mgr").value =  myData[i].Slot3.Manager;
		document.getElementById(myData[i].Slot3.id + "-text-date").value = myData[i].Slot3.Date;
		document.getElementById(myData[i].Slot3.id + "-text-he").value =   myData[i].Slot3.HE;

		document.getElementById(myData[i].Slot4.id + "-text-mgr").value =  myData[i].Slot4.Manager;
		document.getElementById(myData[i].Slot4.id + "-text-date").value = myData[i].Slot4.Date;
		document.getElementById(myData[i].Slot4.id + "-text-he").value =   myData[i].Slot4.HE;

		document.getElementById(myData[i].Slot5.id + "-text-mgr").value =  myData[i].Slot5.Manager;
		document.getElementById(myData[i].Slot5.id + "-text-date").value = myData[i].Slot5.Date;
		document.getElementById(myData[i].Slot5.id + "-text-he").value =   myData[i].Slot5.HE;

		document.getElementById(myData[i].Slot6.id + "-text-mgr").value =  myData[i].Slot6.Manager;
		document.getElementById(myData[i].Slot6.id + "-text-date").value = myData[i].Slot6.Date;
		document.getElementById(myData[i].Slot6.id + "-text-he").value =   myData[i].Slot6.HE;

		document.getElementById(myData[i].Slot7.id + "-text-mgr").value =  myData[i].Slot7.Manager;
		document.getElementById(myData[i].Slot7.id + "-text-date").value = myData[i].Slot7.Date;
		document.getElementById(myData[i].Slot7.id + "-text-he").value =   myData[i].Slot7.HE;

		document.getElementById(myData[i].Slot8.id + "-text-mgr").value =  myData[i].Slot8.Manager;
		document.getElementById(myData[i].Slot8.id + "-text-date").value = myData[i].Slot8.Date;
		document.getElementById(myData[i].Slot8.id + "-text-he").value =   myData[i].Slot8.HE;

	openOverlay();
}

function addServer()  {
	//alert("For Adding a new Mondo");
	
	var j = "x";
	var fb = "y";
	
	var addRack =
	`<table class="t-pos">
<tr><th><h2>NAME:</h2></th><th><input type="text" id="r` + j + `-` + fb + `-name-form"></th></tr>
<tr><th><h2>Position:</h2></th><th><input type="text" id="r` + j + `-` + fb + `-position"></th></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 1:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s1-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s1-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s1-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 2:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s2-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s2-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s2-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 3:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s3-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s3-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s3-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 4:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s4-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s4-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s4-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 5:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s5-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s5-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s5-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 6:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s6-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s6-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s6-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 7:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s7-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s7-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s7-` + fb +  `-text-he"></td></tr>

<tr><th colspan="2" class="t-slot-head"   >SLOT 8:</th></tr>
<tr><td>Manager:</td><td><input id="r` + j + `-s8-` + fb +  `-text-mgr"></td></tr>
<tr><td>Date:</td><td><input id="r`    + j + `-s8-` + fb +  `-text-date"></td></tr>
<tr><td>HE:</td><td><input id="r` +      j + `-s8-` + fb +  `-text-he"></td></tr>

<tr><td><div id="cancel" class="save-btn" onclick="closeOverlay();">Cancel</div></td><td><a download="data1.js" id="downloadlink" class="save-btn" href="makeTextFile('r` + j + `-` + fb + `-name-form')">Save & Create File</a></td></tr>
</table>`;

		document.getElementById("edit-rack").innerHTML = addRack;

	
	openOverlay();
}


var newData = loadData();


var blankObject = {
		"Name" : "Mondo Rack One",
		"Type" : "Mondo Rack",
		"Num" : "One",
		"Number" : "1",
		"id" : "r1-f",
		"Position" : "Front",
		/*"TMC" : {
			"id" : "r1-tmc-f",
			"Type" : "SIT",
			"IP" : "96.37.180.13",
			"Name" : "CTECM3S5TMC3",
			"Number" : "CA#"
		},//*/
		"TMCTOP" : {
			"id" : "r1-tmc-f-top",
			"Type" : "SIT",
			"IP" : "96.37.180.13",
			"Name" : "CTECM3S5TMC3",
			"Number" : "CA#"
		},
		"TMCBOT" : {
			"id" : "r1-tmc-f-bot",
			"Type" : "SIT",
			"IP" : "96.37.180.13",
			"Name" : "CTECM3S5TMC3",
			"Number" : "CA#"
		},//*/
		"Slot1" : {
			"id" : "r1-s1-f",
			"Manager" : "Herbie Hancock",
			"Date" : "04-24-2018",
			"HE" : "??"
		},
		"Slot2" : {
			"id" : "r1-s2-f",
			"Manager" : "",
			"Date" : "",
			"HE" : ""
		},
		"Slot3" : {
			"id" : "r1-s3-f",
			"Manager" : "",
			"Date" : "",
			"HE" : ""
		},
		"Slot4" : {
			"id" : "r1-s4-f",
			"Manager" : "",
			"Date" : "",
			"HE" : ""
		},
		"Slot5" : {
			"id" : "r1-s5-f",
			"Manager" : "",
			"Date" : "",
			"HE" : ""
		},
		"Slot6" : {
			"id" : "r1-s6-f",
			"Manager" : "",
			"Date" : "",
			"HE" : ""
		},
		"Slot7" : {
			"id" : "r1-s7-f",
			"Manager" : "",
			"Date" : "",
			"HE" : ""
		},
		"Slot8" : {
			"id" : "r1-s8-f",
			"Manager" : "Herbie Hancock",
			"Date" : "04-24-2018",
			"HE" : "??"
		}
	};



function openOverlay() {
    document.getElementById("OverlayEdit").style.width = "100%";
}

function closeOverlay() {
    document.getElementById("OverlayEdit").style.width = "0%";
}


function objectDataToText(txt){
	return document.getElementById(txt).value;
}

(function () {
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    return textFile;
  };


  var create = document.getElementById('downloadlink'),
    textbox = document.getElementById('r1-f-name');
    //textbox = document.getElementById('textbox');

  create.addEventListener('click', function () {
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
  }, false);
})();

