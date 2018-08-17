

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
	`		<div class="rack-group">
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
						<span class="tmc-type" id="r` + j + `-tmc-` + fb +  `-type"></span>
						<span class="tmc-text" id="r` + j + `-tmc-` + fb +  `-text"></span>
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
					<i class="fa fa-edit rack-edit" id="edit-r` + j + `-` + fb +  `" onclick="editRack('edit-r` + j + `-` + fb +  `')"></i>
				</div>
			</div>`;

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
		document.getElementById(myData[i].TMC.id + "-text").innerHTML = "IP: " + myData[i].TMC.IP + "<br />Name: " + myData[i].TMC.Name + "<br />" + myData[i].TMC.Number;
		document.getElementById(myData[i].TMC.id + "-type").innerHTML = myData[i].TMC.Type;
	}
}

function editRack(id) {
	//alert(id + " Clicked");
}



loadData();
