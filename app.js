//============================================================
// Settings
//============================================================

// Tagging and X and Y co-ordinante
suckToHereX = "196";
suckToHereY = "-15";
shiftUpDialed = "-80";
shiftUpEllapsed = "0";
shiftDownHangUp = "785";
shiftBackDialed = "0";
shiftBackEllapsed = "92";
shiftBackHangUp = "742";
bumpUp = "4.2";

// Defining the sucked In animation curve
suckedIn = "spring(500,40,200)"
shift = "spring(800,35,1200)"

// Set opacity of Keypad
PSD.Hide.opacity = 0;
PSD.hidePressed.opacity = 0;
PSD.One.opacity = 0;
PSD.Two.opacity = 0;
PSD.Three.opacity = 0;
PSD.Four.opacity = 0;
PSD.Five.opacity = 0;
PSD.Six.opacity = 0;
PSD.Seven.opacity = 0;
PSD.Eight.opacity = 0;
PSD.Nine.opacity = 0;
PSD.Hash.opacity = 0;
PSD.Zero.opacity = 0;
PSD.Star.opacity = 0;

// Set scale 
PSD.One.scale = 0.2;
PSD.Two.scale = 0.2;
PSD.Three.scale = 0.2;
PSD.Four.scale = 0.2;
PSD.Five.scale = 0.2;
PSD.Six.scale = 0.2;
PSD.Seven.scale = 0.2;
PSD.Eight.scale = 0.2;
PSD.Nine.scale = 0.2;
PSD.Hash.scale = 0.2;
PSD.Zero.scale = 0.2;
PSD.Star.scale = 0.2;

// Set initial XY positon
PSD.Hide.y = 880;
PSD.hidePressed.y = 880;
PSD.One.x = 190;
PSD.One.y = 254;
PSD.Two.x = 190;
PSD.Two.y = 254; 
PSD.Three.x = 190;
PSD.Three.y = 254; 
PSD.Four.x = 190;
PSD.Four.y = 254; 
PSD.Five.x = 190;
PSD.Five.y = 254; 
PSD.Six.x = 190;
PSD.Six.y = 254; 
PSD.Seven.x = 190;
PSD.Seven.y = 254; 
PSD.Eight.x = 190;
PSD.Eight.y = 254; 
PSD.Nine.x = 190;
PSD.Nine.y = 254; 
PSD.Hash.x = 190;
PSD.Hash.y = 254; 
PSD.Zero.x = 190;
PSD.Zero.y = 254; 
PSD.Star.x = 190;
PSD.Star.y = 254; 
 



// Set opacity of Keypad
PSD.calltime00.visible = true;
PSD.calltime01.visible = false;
PSD.calltime02.visible = false;
PSD.calltime03.visible = false;
PSD.calltime04.visible = false;
PSD.calltime05.visible = false;
PSD.calltime06.visible = false;
PSD.calltime07.visible = false;
PSD.calltime08.visible = false;
PSD.calltime09.visible = false;
PSD.calltime10.visible = false;
PSD.calltime11.visible = false;
PSD.calltime12.visible = false;
PSD.calltime13.visible = false;
PSD.calltime14.visible = false;
PSD.calltime15.visible = false;
PSD.calltime16.visible = false;
PSD.calltime17.visible = false;
PSD.calltime18.visible = false;
PSD.calltime19.visible = false;
PSD.calltime20.visible = false;
PSD.calltime21.visible = false;
PSD.calltime22.visible = false;
PSD.calltime23.visible = false;
PSD.calltime24.visible = false;
PSD.calltime25.visible = false;
PSD.calltime26.visible = false;
PSD.calltime27.visible = false;
PSD.calltime28.visible = false;
PSD.calltime29.visible = false;
PSD.calltime30.visible = false;
PSD.keypadPressed.visible = false;

// ==========================================================================
// Defining the timer animation and setting the delay
// ==========================================================================

callTimer = function () {

	callTime0 = function() { PSD.calltime00.visible = false; PSD.calltime01.visible = true;};
	callTime1 = function() { PSD.calltime01.visible = false; PSD.calltime02.visible = true;};
	callTime2 = function() { PSD.calltime02.visible = false; PSD.calltime03.visible = true;};
	callTime3 = function() { PSD.calltime03.visible = false; PSD.calltime04.visible = true;};
	callTime4 = function() { PSD.calltime04.visible = false; PSD.calltime05.visible = true;};
	callTime5 = function() { PSD.calltime05.visible = false; PSD.calltime06.visible = true;};
	callTime6 = function() { PSD.calltime06.visible = false; PSD.calltime07.visible = true;};
	callTime7 = function() { PSD.calltime07.visible = false; PSD.calltime08.visible = true;};
	callTime8 = function() { PSD.calltime08.visible = false; PSD.calltime09.visible = true;};
	callTime9 = function() { PSD.calltime09.visible = false; PSD.calltime10.visible = true;};
	callTime10 = function() { PSD.calltime10.visible = false; PSD.calltime11.visible = true;};
	callTime11 = function() { PSD.calltime11.visible = false; PSD.calltime12.visible = true;};
	callTime12 = function() { PSD.calltime12.visible = false; PSD.calltime13.visible = true;};
	callTime13 = function() { PSD.calltime13.visible = false; PSD.calltime14.visible = true;};
	callTime14 = function() { PSD.calltime14.visible = false; PSD.calltime15.visible = true;};
	callTime15 = function() { PSD.calltime15.visible = false; PSD.calltime16.visible = true;};
	callTime16 = function() { PSD.calltime16.visible = false; PSD.calltime17.visible = true;};
	callTime17 = function() { PSD.calltime17.visible = false; PSD.calltime18.visible = true;};
	callTime18 = function() { PSD.calltime18.visible = false; PSD.calltime19.visible = true;};
	callTime19 = function() { PSD.calltime19.visible = false; PSD.calltime20.visible = true;};
	callTime20 = function() { PSD.calltime20.visible = false; PSD.calltime21.visible = true;};
	callTime21 = function() { PSD.calltime21.visible = false; PSD.calltime22.visible = true;};
	callTime22 = function() { PSD.calltime22.visible = false; PSD.calltime23.visible = true;};
	callTime23 = function() { PSD.calltime23.visible = false; PSD.calltime24.visible = true;};
	callTime24 = function() { PSD.calltime24.visible = false; PSD.calltime25.visible = true;};
	callTime25 = function() { PSD.calltime25.visible = false; PSD.calltime26.visible = true;};
	callTime26 = function() { PSD.calltime26.visible = false; PSD.calltime27.visible = true;};
	callTime27 = function() { PSD.calltime27.visible = false; PSD.calltime28.visible = true;};
	callTime28 = function() { PSD.calltime28.visible = false; PSD.calltime29.visible = true;};
	callTime29 = function() { PSD.calltime29.visible = false; PSD.calltime30.visible = true;};
	callTime30 = function() { PSD.calltime30.visible = false; PSD.calltime00.visible = true;};

	utils.delay(1000, callTime0)
	utils.delay(1000*2, callTime1)
	utils.delay(1000*3, callTime2)
	utils.delay(1000*4, callTime3)
	utils.delay(1000*5, callTime4)
	utils.delay(1000*6, callTime5)
	utils.delay(1000*7, callTime6)
	utils.delay(1000*8, callTime7)
	utils.delay(1000*9, callTime8)
	utils.delay(1000*10, callTime9)
	utils.delay(1000*11, callTime10)
	utils.delay(1000*12, callTime11)
	utils.delay(1000*13, callTime12)
	utils.delay(1000*14, callTime13)
	utils.delay(1000*15, callTime14)
	utils.delay(1000*16, callTime15)
	utils.delay(1000*17, callTime16)
	utils.delay(1000*18, callTime17)
	utils.delay(1000*19, callTime18)
	utils.delay(1000*20, callTime19)
	utils.delay(1000*21, callTime20)
	utils.delay(1000*22, callTime21)
	utils.delay(1000*23, callTime22)
	utils.delay(1000*24, callTime23)
	utils.delay(1000*25, callTime24)
	utils.delay(1000*26, callTime25)
	utils.delay(1000*27, callTime26)
	utils.delay(1000*28, callTime27)
	utils.delay(1000*29, callTime28)
	utils.delay(1000*30, callTime29)
	utils.delay(1000*31, callTime30)
};

// Show the number Keypad
showNumbers = function () {
PSD["Hide"].animate({properties:{  opacity:1, scale:1}, 	curve: "spring(500,30,200)"})
PSD["One"].animate({properties:{ 	x:0, y:100+20, opacity:1, scale:1}, 	curve: "spring(500,30,200)"})
PSD["Two"].animate({properties:{ 	x:190, y:100+20, opacity:1, scale:1}, 	curve: "spring(550,30,200)"})
PSD["Three"].animate({properties:{ 	x:380, y:100+20, opacity:1, scale:1}, 	curve: "spring(600,30,200)"})
PSD["Four"].animate({properties:{ 	x:0, y:272+20, opacity:1, scale:1}, 	curve: "spring(650,30,200)"})
PSD["Five"].animate({properties:{ 	x:190, y:272+20, opacity:1, scale:1}, 	curve: "spring(700,30,200)"})
PSD["Six"].animate({properties:{ 	x:380, y:272+20, opacity:1, scale:1}, 	curve: "spring(750,30,200)"})
PSD["Seven"].animate({properties:{ 	x:0, y:443+20, opacity:1, scale:1}, 	curve: "spring(800,30,200)"})
PSD["Eight"].animate({properties:{ 	x:190, y:443+20, opacity:1, scale:1}, 	curve: "spring(850,30,200)"})
PSD["Nine"].animate({properties:{ 	x:380, y:443+20, opacity:1, scale:1}, 	curve: "spring(900,30,200)"})
PSD["Hash"].animate({properties:{ 	x:0, y:616+20, opacity:1, scale:1}, 	curve: "spring(950,30,200)"})
PSD["Zero"].animate({properties:{ 	x:190, y:616+20, opacity:1, scale:1}, 	curve: "spring(1000,30,200)"})
PSD["Star"].animate({properties:{ 	x:380, y:616+20, opacity:1, scale:1}, 	curve: "spring(1050,30,200)"})
}

// Hide the number Keypad
hideNumbers = function () {
PSD["Hide"].animate({properties:{  opacity:0, scale:0.2}, 	curve: "spring(500,30,200)"})
PSD["One"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(500,30,200)"})
PSD["Two"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(550,30,200)"})
PSD["Three"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(600,30,200)"})
PSD["Four"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(650,30,200)"})
PSD["Five"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(700,30,200)"})
PSD["Six"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(750,30,200)"})
PSD["Seven"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(800,30,200)"})
PSD["Eight"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(850,30,200)"})
PSD["Nine"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(900,30,200)"})
PSD["Hash"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(950,30,200)"})
PSD["Zero"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(1000,30,200)"})
PSD["Star"].animate({properties:{ 	x:200, y:280, opacity:0, scale:0.2}, 	curve: "spring(1050,30,200)"})
}

// Scales the option Keys
bumpUp = function () {
PSD.mute.scale = 1.2;
PSD.keypad.scale = 1.2;
PSD.speaker.scale = 1.2;
PSD.addCall.scale = 1.2;
PSD.faceTime.scale = 1.2;
PSD.contacts.scale = 1.2;
}

// Hides the option Keys
hideOptions = function () {
PSD["mute"].animate({properties:{x:suckToHereX, y:suckToHereY, opacity:0, scale:0.2}, curve: suckedIn})
PSD["keypad"].animate({properties:{x:suckToHereX, y:suckToHereY, opacity:0, scale:0.2}, curve: suckedIn})
PSD["speaker"].animate({properties:{x:suckToHereX, y:suckToHereY, opacity:0, scale:0.2}, curve: suckedIn})
PSD["addCall"].animate({properties:{x:suckToHereX, y:suckToHereY, opacity:0, scale:0.2}, curve: suckedIn})
PSD["faceTime"].animate({properties:{x:suckToHereX, y:suckToHereY, opacity:0, scale:0.2}, curve: suckedIn})
PSD["contacts"].animate({properties:{x:suckToHereX, y:suckToHereY, opacity:0, scale:0.2}, curve: suckedIn})
}

showOptions = function () {
PSD["mute"].animate({properties:{x:0, y:0, opacity:1, scale:1}, curve: suckedIn})
PSD["keypad"].animate({properties:{x:196, y:0, opacity:1, scale:1}, curve: suckedIn})
PSD["speaker"].animate({properties:{x:392, y:0, opacity:1, scale:1}, curve: suckedIn})
PSD["addCall"].animate({properties:{x:0, y:238, opacity:1, scale:1}, curve: suckedIn})
PSD["faceTime"].animate({properties:{x:196, y:238, opacity:1, scale:1}, curve: suckedIn})
PSD["contacts"].animate({properties:{x:392, y:237, opacity:1, scale:1}, curve: suckedIn})
}

// Move the time and Dialed Number Up
shiftTo = function () {
PSD["dialedNumber"].animate({properties:{y:shiftUpDialed}, curve: shift})
PSD["elapsedCallTime"].animate({properties:{y:shiftUpEllapsed}, curve: shift})
PSD["hangUp"].animate({properties:{y:shiftDownHangUp}, curve: shift})
}

shiftBack = function () {
PSD["dialedNumber"].animate({properties:{y:shiftBackDialed}, curve: shift})
PSD["elapsedCallTime"].animate({properties:{y:shiftBackEllapsed}, curve: shift})
PSD["hangUp"].animate({properties:{y:shiftBackHangUp}, curve: shift})
}

//================================================================
// Call time - Loops every 30 seconds
//================================================================

utils.delay(0, callTimer)
utils.interval(1000*31, callTimer)



//================================================================
// onSelect Functions
//================================================================

PSD.keypad.on("touchstart", function() { 
	PSD.keypadPressed.visible = true; 
	PSD.keypad.visible = false;
	PSD.hidePressed.visible = true; 
	PSD.Hide.visible = false;
})

PSD.keypad.on("touchend", function() { 
	PSD.keypadPressed.visible = false; 
	PSD.keypad.visible = true;
	PSD.hidePressed.visible = false; 
	PSD.Hide.visible = true;
	bumpUp();
	hideOptions();
	utils.delay(20, showNumbers)
	utils.delay(20, shiftTo)
})

PSD.Hide.on("touchstart", function() { 
	PSD.hidePressed.visible = true; 
	PSD.Hide.visible = true;
})

PSD.Hide.on("touchend", function() { 
	PSD.hidePressed.visible = false; 
	PSD.Hide.visible = true;
	hideNumbers();
	showOptions();
	shiftBack ();
})














