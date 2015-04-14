#pragma strict
var Speed = 0.03;
var pointA : Transform;
var pointB : Transform;

function Start () {

}

function Update () {
	this.transform.position.x += Speed;
	if(this.transform.position.x >= pointA.position.x)
	{
		Speed = (-0.03);
		this.transform.rotation.y = 0;
	}
	else if(this.transform.position.x <= pointB.position.x)
	{
		Speed = 0.03;
		this.transform.rotation.y = 180;
	}
	
}