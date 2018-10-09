
//      NEED TO SYNC W/ GIT USING: 
//      C:\Users\conno\Documents\Source\Projects


// Setting the X's and O's on the board. 
let cells = document.querySelectorAll('.cell');

let i = 1;
cells.forEach(function(cell) {

    cell.addEventListener("click", cellClicked);

});

function cellClicked(e) {

    if (i % 2 != 0) {
        e.target.textContent = 'O';
    } else {
        e.target.textContent = 'X';
    }
    i++;
};


//  Tracking the moves played.

 let toprow = '';
 let midrow = '';
 let botrow = '';
 let tldiag = '';
 let bldiag = '';
 
 let topcell = document.querySelectorAll('.top');
 let midcell = document.querySelectorAll('.middle');
 let botcell = document.querySelectorAll('.bottom');
 

topcell.forEach(function(tcell) {
    tcell.addEventListener("click", function() {
        toprow = toprow + 'x';
        console.log(toprow);
        if (toprow == 'xxx') {
            alert('X wins in the top row!');
        }
    });
});

midcell.forEach(function(mcell) {
    mcell.addEventListener("click", function() {
        midrow = midrow + 'x';
        console.log(midrow);
        if (midrow == 'xxx') {
            alert('X wins in the middle column!');
        }
    });
});

botcell.forEach(function(bcell) {
   bcell.addEventListener("click", function() {
        botrow = botrow + 'x';
        console.log(botrow);
        if (botrow == 'xxx') {
            alert('X wins in the bottom row!');
        }
    });
});





let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    cells.forEach(function(cell) {
        cell.textContent = '';
        i = 1;
        toprow = '';
        midrow = '';
        botrow = '';
        tldiag = '';
        bldiag = '';
    });

}
);



// Set up cases using multi-class selector.

//  Need to prevent a click from rewriting cells already containing a character.