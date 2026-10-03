const themes=[
{
name:"MIDNIGHT ECHOES",
image:"../images/midnightechoessand.gif",
id:"midnightechoes"
},
{
name:"SKY LETTERS",
image:"../images/skyletterssand.gif",
id:"skyletters"
},
{
name:"STRAWBERRY MEMORIES",
image:"../images/strawberrymemoriessand.gif",
id:"strawberrymemories"
},
{
name:"VELVET RAIN",
image:"../images/velvetrainsand.gif",
id:"velvetrain"
}
];
let current=0;
const title=document.getElementById("theme-title");
const image=document.getElementById("theme-image");
function updateTheme(){
title.textContent=themes[current].name;
image.src=themes[current].image;
}
updateTheme();
document
.getElementById("nextBtn")
.addEventListener("click",()=>{
current++;
if(current>=themes.length){
current=0;
}
updateTheme();
});
document
.getElementById("prevBtn")
.addEventListener("click",()=>{
current--;
if(current<0){
current=themes.length-1;
}
updateTheme();
});
image.onclick=()=>{
window.location.href=
`../html/postcard.html?theme=${themes[current].id}`;
}