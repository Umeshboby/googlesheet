let columns = 26;
let rows = 100;

const headerContainer = document.querySelector(".header");
const serialNumbersContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");

function createHeaderCells(){

    for(let i=0; i<=columns+1;i++){
        const headerCell=document.createElement("div");
        headerCell.className="header-cell cell";
        if(i !==0){
// i=1 => char=> 64+1 => A ; 
            headerCell.innerText= String.fromCharCode(64 + i);
        }
            headerContainer.appendChild(headerCell)
    }
}

function createSerialNumberCells() {
  for(let i=1;i<=rows;i++){
    const snocell = document.createElement("div");
    snocell.innerText =i;
    snocell.className="sno-cell cell";
    serialNumbersContainer.appendChild(snocell);
  }
}


function createRow(rowNumber){
    //create a row and each row  26 columns.
    const row = document.createElement("div");
    row.className="row";
    for(let i=1;i<= columns;i++){
        const cell = document.createElement("div");
         cell.className="main-cell cell";
         cell.contentEditable=true;
         row.appendChild(cell);
       cell.id = String.fromCharCode(64+i) + rowNumber;

       cell.addEventListener("focus" , onCellFocus);

       
    }
    mainContainer.appendChild(row);
}


function buildMainSection(){
    //loop 100 times.
    for(let i=1;i<=rows;i++){
        createRow(i);
    }
}

createHeaderCells();
createSerialNumberCells();
// createRow();
buildMainSection();