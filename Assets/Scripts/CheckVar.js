#pragma strict

static var detectedtext;
static var detectedtextsize;

function Start(){
	detectedtextsize = 80;
	detectedtext = "";
}
function Update(){
	this.guiText.fontSize = detectedtextsize;
	this.guiText.text = detectedtext;
}