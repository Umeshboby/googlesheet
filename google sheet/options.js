const cellNamePlaceholder = document.querySelector("#active-cell");
const fontSizeInput = document.querySelector("#fontsize");
const fontFamilyInput = document.querySelector("#fontfamily");
const form = document.querySelector("#form")


let activeElement = null;

const state = {};

const defaultProperties={
    fontFamily:'sans',
    fontSize:16 ,
    color:"#000000",
    textAlign:"left" ,
    backgroundColor:"#ffffff",
    isBold: false,
    isItalic:false,
    isUnderlined:false
}

function onCellFocus(event){
    // alert(event.target.id)
    // console.log(event.target.id);
    const elementId = event.target.id;
    cellNamePlaceholder.innerText = elementId;
    activeElement= event.target;
    if(state[elementId]){
        // already selected cell.
        resetOptions(state[elementId]);
    }
    else{
        //selected for first time.
        // fill the option in default state
        resetOptions(defaultProperties);
    }
}

function resetOptions(optionsState){
    // this function verified already function selected or not by lokking state object.
  
    // fontSizeInput.value =  optionsState.fontSize;
    // fontFamilyInput.value = optionsState.fontFamily;
    form.fontFamily.value = optionsState.fontFamily;
form.fontsize.value = optionsState.fontSize;
form.textalign.value = optionsState.textAlign;
form.bold.checked = optionsState.isBold;
form.italic.checked = optionsState.isItalic;
form.underlined.checked = optionsState.isUnderlined;
form.textcolor.value = optionsState.color;
form.bgcolor.value = optionsState.backgroundColor;
}





function onFormChange() {

    if(!activeElement){
alert("please select cell");
form.reset();
return;
    }

    let currentState = {
        textColor : form.textcolor.value,
        backgroundColor: form.bgcolor.value,
        fontSize: form.fontsize.value,
        fontFamily: form.fontfamily.value,
            isBold: form.bold.checked,
            isItalic: form.italic.checked,
            isUnderlined: form.underlined.checked,
            textAlign: form.textalign.value

    }
    // below function apply all the style to the active cell.
    applyStyleToCell(currentState);
    //update the state object for the current cell.
    state[activeElement.id] = currentState; 
}

function applyStyleToCell(styleObject){
    //it will take style objects and apply  it to be current slected cell.
    activeElement.style.fontSize =  `${styleObject.fontSize}px`
    activeElement.style.fontfamily = styleObject.fontfamily;
    activeElement.style.color = styleObject.textColor;
    activeElement.style.backgroundColor = styleObject.backgroundColor;
    activeElement.style.textAlign = styleObject.textAlign;
    if(styleObject.isBold){
        activeElement.style.fontWeight = "bold";

    }
    if(styleObject.isItalic){
        activeElement.style.fontStyle= "italic";

    }
    if(styleObject.isUnderlined){
        activeElement.style.textDecoration = "underline";

    }
    
}
