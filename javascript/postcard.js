const params=
new URLSearchParams(
window.location.search
);
const selectedTheme=
params.get("theme");
const themeName=
document.getElementById(
"theme-name"
);
const artImage=
document.getElementById(
"artImage"
);
const themes={
skyletters:{
title:"SKY LETTERS",
art:"../images/skyletterspostcard.png"
},
midnightechoes:{
title:"MIDNIGHT ECHOES",
art:"../images/midnightechoespostcard.png"
},
velvetrain:{
title:"VELVET RAIN",
art:"../images/velvetrainpostcard.png"
},
strawberrymemories:{
title:"STRAWBERRY MEMORIES",
art:"../images/strawberrymemoriespostcard.png"
}
};
if(themes[selectedTheme]){
themeName.textContent=
themes[selectedTheme].title;
artImage.src=
themes[selectedTheme].art;
}
