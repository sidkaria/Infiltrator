#pragma strict

function OnMouseDown(){
	CheckVar.detectedtext = "You clicked the blude wire. The bomb blew up. You failed your mission. And you died.";
	yield WaitForSeconds(4);
	Application.LoadLevel(0);
}