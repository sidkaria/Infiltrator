#pragma strict

static var Detected:int;

function Start(){
	Detected = 0;
	CheckVar.detectedtextsize = 20;
	CheckVar.detectedtext = "Your mission is to infiltrate the enemy base.";
	yield WaitForSeconds(3);
	CheckVar.detectedtext = "We feel as if they are up to something.";
	yield WaitForSeconds(2);
	CheckVar.detectedtext = "Find out what it is.";
	yield WaitForSeconds(2);
	CheckVar.detectedtext = "Do not get detected.";
	yield WaitForSeconds(2);
	CheckVar.detectedtext = "";
}

function OnTriggerEnter(other:Collider){
	if (other.tag == "AIView"){
		CheckVar.detectedtextsize = 80;
		CheckVar.detectedtext = "Detected";
		yield WaitForSeconds(3);
		Application.LoadLevel(0);
	}
	if (other.tag == "BombSceneTrigger"){
		CheckVar.detectedtextsize = 80;
		CheckVar.detectedtext = "It's a bomb!";
		yield WaitForSeconds(1.5);
		CheckVar.detectedtextsize = 20;
		CheckVar.detectedtext = "Choose the red or blue wire to cut:";
	}
	if (other.tag == "KillBox"){
		Application.LoadLevel(0);
	}
}