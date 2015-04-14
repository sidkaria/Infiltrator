#pragma strict

function OnMouseDown(){
	CheckVar.detectedtext = "You were successfull in your mission.";
	yield WaitForSeconds(4);
	Application.LoadLevel(0);
}