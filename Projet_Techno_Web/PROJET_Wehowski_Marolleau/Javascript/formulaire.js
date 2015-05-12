	 function chemin(){
  aventure = document.getElementsByName("objectif");
  aventurechoix = aventure.value;
  chmin = document.getElementById("spawn");
  choix=chmin.selectedIndex;
  path=chmin.options[choix].value;
  if (aventurechoix= 1){
	  if (path >= 0 && path <= 2) { var txt=" Nous vous déconseillons ces spawns, ils sont peu intéressant 1111111111";} 
	else if (path >= 3 && path <= 7) { var txt=" Grimdale / The Lost Castle / Yongton Abbey / Arbreton / Aspermont / Lazerville / Water Spire / Castle Byesford";}
	else if (path >= 8 && path <= 16) { var txt=" Pravus / Yawpton / Logging Camp / Whitehaven / Devil's Castle / McLovinville / The Forest / Sanctuary of Peace / Crowmure / Ghost Fleet ou Fort Saward ou Mantle ou Hell Tree";}
	else if (path >= 17 && path <=22) { var txt=" Portsmouth / Consolio University / Evergreen Manor et Evergreen Dam / Whitehaven / Paluster / Frostbain / Crymoore Pond /Dark Mansion ou Necromancer's tower";}
	else if (path >= 23 && path <=29) { var txt=" Romero (Camp Bell avant si vous êtes proches) / Huntsgrove / Spire / Ridgevale / Ravine / Fort Erie / Knoxmoor Inn / Shrine of the Dusk / Camp Kharj / Sunken Tower / Al Hasa / Fort Kharj";}
	else if (path >= 30 && path <=35) { var txt=" Carmi / Saens / St.Roseluck Island / Afaya / Anvalia / Tristitia (attention à pas ne pas vous perdre!) / Red Demon Temple / Grayvale (uniquement si vous avez un bouton) / Eillom / Camp Azara / Wizard Tower ou Cave of the Dead Lady";}
	else if (path >= 36 && path <=40) { var txt=" Geuten / (optionnel : Grandfather's Curse - Mount Longton - Jacsebalon Mansion - Heartless Mansion) / Worthington / Cole Castle / Aeternalis Cathedral / Fort Rockwood et Forth wind / Pileus / Meteor Crater / Agni Ignis";}
  }
  else if (aventurechoix = 2){
	  if (path >= 0 && path <= 2) { var txt=" Nous vous déconseillons ces spawns, ils sont peu intéressant 222222222222";} 
  else if (path >= 3 && path <= 7) { var txt=" Grimdale / The Lost Castle / Yongton Abbey / Arbreton / Aspermont / Lazerville / Water Spire / Castle Byesford";}
  else if (path >= 8 && path <= 16) { var txt=" Pravus / Yawpton / Logging Camp / Whitehaven / Devil's Castle / McLovinville / The Forest / Sanctuary of Peace / Crowmure / Ghost Fleet ou Fort Saward ou Mantle ou Hell Tree";}
  else if (path >= 17 && path <=22) { var txt=" Portsmouth / Consolio University / Evergreen Manor et Evergreen Dam / Whitehaven / Paluster / Frostbain / Crymoore Pond /Dark Mansion ou Necromancer's tower";}
  else if (path >= 23 && path <=29) { var txt=" Romero (Camp Bell avant si vous êtes proches) / Huntsgrove / Spire / Ridgevale / Ravine / Fort Erie / Knoxmoor Inn / Shrine of the Dusk / Camp Kharj / Sunken Tower / Al Hasa / Fort Kharj";}
  else if (path >= 30 && path <=35) { var txt=" Carmi / Saens / St.Roseluck Island / Afaya / Anvalia / Tristitia (attention à pas ne pas vous perdre!) / Red Demon Temple / Grayvale (uniquement si vous avez un bouton) / Eillom / Camp Azara / Wizard Tower ou Cave of the Dead Lady";}
  else if (path >= 36 && path <=40) { var txt=" Geuten / (optionnel : Grandfather's Curse - Mount Longton - Jacsebalon Mansion - Heartless Mansion) / Worthington / Cole Castle / Aeternalis Cathedral / Fort Rockwood et Forth wind / Pileus / Meteor Crater / Agni Ignis";}
  }
  
  else if (aventurechoix = 3){
	  if (path >= 0 && path <= 2) { var txt=" Nous vous déconseillons ces spawns, ils sont peu intéressant 3333333333";} 
  else if (path >= 3 && path <= 7) { var txt=" Grimdale / The Lost Castle / Yongton Abbey / Arbreton / Aspermont / Lazerville / Water Spire / Castle Byesford";}
  else if (path >= 8 && path <= 16) { var txt=" Pravus / Yawpton / Logging Camp / Whitehaven / Devil's Castle / McLovinville / The Forest / Sanctuary of Peace / Crowmure / Ghost Fleet ou Fort Saward ou Mantle ou Hell Tree";}
  else if (path >= 17 && path <=22) { var txt=" Portsmouth / Consolio University / Evergreen Manor et Evergreen Dam / Whitehaven / Paluster / Frostbain / Crymoore Pond /Dark Mansion ou Necromancer's tower";}
  else if (path >= 23 && path <=29) { var txt=" Romero (Camp Bell avant si vous êtes proches) / Huntsgrove / Spire / Ridgevale / Ravine / Fort Erie / Knoxmoor Inn / Shrine of the Dusk / Camp Kharj / Sunken Tower / Al Hasa / Fort Kharj";}
  else if (path >= 30 && path <=35) { var txt=" Carmi / Saens / St.Roseluck Island / Afaya / Anvalia / Tristitia (attention à pas ne pas vous perdre!) / Red Demon Temple / Grayvale (uniquement si vous avez un bouton) / Eillom / Camp Azara / Wizard Tower ou Cave of the Dead Lady";}
  else if (path >= 36 && path <=40) { var txt=" Geuten / (optionnel : Grandfather's Curse - Mount Longton - Jacsebalon Mansion - Heartless Mansion) / Worthington / Cole Castle / Aeternalis Cathedral / Fort Rockwood et Forth wind / Pileus / Meteor Crater / Agni Ignis";}
  
  } 
 
  
  alert('Votre chemin proposé est :'+txt);
}
	 
	 
	 

  
