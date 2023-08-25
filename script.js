//Storing user preference color chage,size change;


//finding part
const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

//
const setValues = (fontSize,bgColor) =>{
        selectFontSize.value =fontSize;
        selectBgColor.value = bgColor;
        mainElement.style.fontSize = fontSize;
        mainElement.style.backgroundColor = bgColor;
}

//load local storage value
const initialSetup = ()=>{
   const fontSize = localStorage.getItem("fontSize");
   const bgColor  =  localStorage.getItem("bgColor");

   if(fontSize && bgColor)
   {
        setValues(fontSize,bgColor);
    }

    if(!fontSize && !bgColor)
   {
       setValues("16px","aqua");
    }

    if(fontSize && !bgColor)
    {
        setValues(fontSize,"aqua");
     }
     if(!fontSize && bgColor)
     {
         setValues("16px",bgColor);
      }
   
}


//function create for listener;
const changeFontSize = (event) => {
    const  sclectedFontSize = event.target.value;
    mainElement.style.fontSize = sclectedFontSize;
    localStorage.setItem("fontSize", sclectedFontSize)
   }

const changeBgColor = (event) => {
    const  sclectedBgColor = event.target.value;
    mainElement.style.backgroundColor = sclectedBgColor;
    localStorage.setItem("bgColor",sclectedBgColor);
   }
   //clear localStorage
   const clearLocalStorage = () => {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    setValues("16px","aqua");
   }

//add listener
selectFontSize.addEventListener("change",changeFontSize);
selectBgColor.addEventListener("change",changeBgColor);
resetButton.addEventListener("click",clearLocalStorage);


initialSetup();
