

var dataLength = myData.length;

for(var i=0; i< dataLength; i++)
{
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

/*
	document.getElementById(myData[0].id + "-name").innerHTML = myData[0].Name + " - " + myData[0].Position + "<br /><br />";
	document.getElementById(myData[0].Slot1.id + "-text").innerHTML = "Manager: " + myData[0].Slot1.Manager + "<br />Date: " + myData[0].Slot1.Date + "<br />HE: " + myData[0].Slot1.HE;
	document.getElementById("r1-s2-f-text").innerHTML = "Manager: " + myData[0].Slot2.Manager + "<br />Date: " + myData[0].Slot2.Date + "<br />HE: " + myData[0].Slot2.HE;
	document.getElementById("r1-s3-f-text").innerHTML = "Manager: " + myData[0].Slot3.Manager + "<br />Date: " + myData[0].Slot3.Date + "<br />HE: " + myData[0].Slot3.HE;
	document.getElementById("r1-s4-f-text").innerHTML = "Manager: " + myData[0].Slot4.Manager + "<br />Date: " + myData[0].Slot4.Date + "<br />HE: " + myData[0].Slot4.HE;
	document.getElementById("r1-s5-f-text").innerHTML = "Manager: " + myData[0].Slot5.Manager + "<br />Date: " + myData[0].Slot5.Date + "<br />HE: " + myData[0].Slot5.HE;
	document.getElementById("r1-s6-f-text").innerHTML = "Manager: " + myData[0].Slot6.Manager + "<br />Date: " + myData[0].Slot6.Date + "<br />HE: " + myData[0].Slot6.HE;
	document.getElementById("r1-s7-f-text").innerHTML = "Manager: " + myData[0].Slot7.Manager + "<br />Date: " + myData[0].Slot7.Date + "<br />HE: " + myData[0].Slot7.HE;
	document.getElementById("r1-s8-f-text").innerHTML = "Manager: " + myData[0].Slot8.Manager + "<br />Date: " + myData[0].Slot8.Date + "<br />HE: " + myData[0].Slot8.HE;
	document.getElementById("r1-tmc-f-text").innerHTML = "IP: " + myData[0].TMC.IP + "<br />Name: " + myData[0].TMC.Name + "<br />" + myData[0].TMC.Number;
	document.getElementById(myData[0].TMC.id + "-type").innerHTML = myData[0].TMC.Type;

document.getElementById("r1-b-name").innerHTML = myData[1].Name + " - " + myData[1].Position + "<br /><br />";
document.getElementById("r1-s1-b-text").innerHTML = "Manager: " + myData[1].Slot1.Manager + "<br />Date: " + myData[1].Slot1.Date + "<br />HE: " + myData[1].Slot1.HE;
document.getElementById("r1-s2-b-text").innerHTML = "Manager: " + myData[1].Slot2.Manager + "<br />Date: " + myData[1].Slot2.Date + "<br />HE: " + myData[1].Slot2.HE;
document.getElementById("r1-s3-b-text").innerHTML = "Manager: " + myData[1].Slot3.Manager + "<br />Date: " + myData[1].Slot3.Date + "<br />HE: " + myData[1].Slot3.HE;
document.getElementById("r1-s4-b-text").innerHTML = "Manager: " + myData[1].Slot4.Manager + "<br />Date: " + myData[1].Slot4.Date + "<br />HE: " + myData[1].Slot4.HE;
document.getElementById("r1-s5-b-text").innerHTML = "Manager: " + myData[1].Slot5.Manager + "<br />Date: " + myData[1].Slot5.Date + "<br />HE: " + myData[1].Slot5.HE;
document.getElementById("r1-s6-b-text").innerHTML = "Manager: " + myData[1].Slot6.Manager + "<br />Date: " + myData[1].Slot6.Date + "<br />HE: " + myData[1].Slot6.HE;
document.getElementById("r1-s7-b-text").innerHTML = "Manager: " + myData[1].Slot7.Manager + "<br />Date: " + myData[1].Slot7.Date + "<br />HE: " + myData[1].Slot7.HE;
document.getElementById("r1-s8-b-text").innerHTML = "Manager: " + myData[1].Slot8.Manager + "<br />Date: " + myData[1].Slot8.Date + "<br />HE: " + myData[1].Slot8.HE;
document.getElementById("r1-tmc-b-text").innerHTML = "IP: " + myData[1].TMC.IP + "<br />Name: " + myData[1].TMC.Name + "<br />" + myData[1].TMC.Number;


document.getElementById("r2-f-name").innerHTML = myData[2].Name + " - " + myData[2].Position + "<br /><br />";
document.getElementById("r2-s1-f-text").innerHTML = "Manager: " + myData[2].Slot1.Manager + "<br />Date: " + myData[2].Slot1.Date + "<br />HE: " + myData[2].Slot1.HE;
document.getElementById("r2-s2-f-text").innerHTML = "Manager: " + myData[2].Slot2.Manager + "<br />Date: " + myData[2].Slot2.Date + "<br />HE: " + myData[2].Slot2.HE;
document.getElementById("r2-s3-f-text").innerHTML = "Manager: " + myData[2].Slot3.Manager + "<br />Date: " + myData[2].Slot3.Date + "<br />HE: " + myData[2].Slot3.HE;
document.getElementById("r2-s4-f-text").innerHTML = "Manager: " + myData[2].Slot4.Manager + "<br />Date: " + myData[2].Slot4.Date + "<br />HE: " + myData[2].Slot4.HE;
document.getElementById("r2-s5-f-text").innerHTML = "Manager: " + myData[2].Slot5.Manager + "<br />Date: " + myData[2].Slot5.Date + "<br />HE: " + myData[2].Slot5.HE;
document.getElementById("r2-s6-f-text").innerHTML = "Manager: " + myData[2].Slot6.Manager + "<br />Date: " + myData[2].Slot6.Date + "<br />HE: " + myData[2].Slot6.HE;
document.getElementById("r2-s7-f-text").innerHTML = "Manager: " + myData[2].Slot7.Manager + "<br />Date: " + myData[2].Slot7.Date + "<br />HE: " + myData[2].Slot7.HE;
document.getElementById("r2-s8-f-text").innerHTML = "Manager: " + myData[2].Slot8.Manager + "<br />Date: " + myData[2].Slot8.Date + "<br />HE: " + myData[2].Slot8.HE;
document.getElementById("r1-tmc-f-text").innerHTML = "IP: " + myData[2].TMC.IP + "<br />Name: " + myData[2].TMC.Name + "<br />" + myData[2].TMC.Number;


document.getElementById("r2-b-name").innerHTML = myData[3].Name + " - " + myData[3].Position + "<br /><br />";
document.getElementById("r2-s1-b-text").innerHTML = "Manager: " + myData[3].Slot1.Manager + "<br />Date: " + myData[3].Slot1.Date + "<br />HE: " + myData[3].Slot1.HE;
document.getElementById("r2-s2-b-text").innerHTML = "Manager: " + myData[3].Slot2.Manager + "<br />Date: " + myData[3].Slot2.Date + "<br />HE: " + myData[3].Slot2.HE;
document.getElementById("r2-s3-b-text").innerHTML = "Manager: " + myData[3].Slot3.Manager + "<br />Date: " + myData[3].Slot3.Date + "<br />HE: " + myData[3].Slot3.HE;
document.getElementById("r2-s4-b-text").innerHTML = "Manager: " + myData[3].Slot4.Manager + "<br />Date: " + myData[3].Slot4.Date + "<br />HE: " + myData[3].Slot4.HE;
document.getElementById("r2-s5-b-text").innerHTML = "Manager: " + myData[3].Slot5.Manager + "<br />Date: " + myData[3].Slot5.Date + "<br />HE: " + myData[3].Slot5.HE;
document.getElementById("r2-s6-b-text").innerHTML = "Manager: " + myData[3].Slot6.Manager + "<br />Date: " + myData[3].Slot6.Date + "<br />HE: " + myData[3].Slot6.HE;
document.getElementById("r2-s7-b-text").innerHTML = "Manager: " + myData[3].Slot7.Manager + "<br />Date: " + myData[3].Slot7.Date + "<br />HE: " + myData[3].Slot7.HE;
document.getElementById("r2-s8-b-text").innerHTML = "Manager: " + myData[3].Slot8.Manager + "<br />Date: " + myData[3].Slot8.Date + "<br />HE: " + myData[3].Slot8.HE;
document.getElementById("r2-tmc-b-text").innerHTML = "IP: " + myData[3].TMC.IP + "<br />Name: " + myData[3].TMC.Name + "<br />" + myData[3].TMC.Number;


/*document.getElementById("r1-tmc-f-type").innerHTML = myData[0].TMC.Type;
/*document.getElementById("r1-tmc-b").innerHTML = myData[1].TMC.Type;
document.getElementById("r2-tmc-f").innerHTML = myData[2].TMC.Type;
document.getElementById("r2-tmc-b").innerHTML = myData[3].TMC.Type;
//*/
