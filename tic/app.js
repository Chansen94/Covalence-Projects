

// let cells = document.querySelectorAll('.cell');

// let i = 1;
// cells.forEach(function(cell) {
//             // Setting the X's and O's on the board. 
//         if (i % 2 == 1) {
//             cell.addEventListener("click", cellClickedO);
//         } else {
//             cell.addEventListener("click", cellClickedX);
//         }

//     i++;
// });


// function cellClickedO(e) {

//      e.target.textContent = 'O';
    
// };

// function cellClickedX(e) {
//     e.target.textContent = 'X';
// };


//
// 

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







// 
// 
 //  Tracking the moves played.

 let toprow = '';
 let midrow = '';
 let botrow = '';
 let tldiag = '';
 let bldiag = '';
 
 let topcell = document.querySelectorAll('.top');
 let midcell = document.querySelectorAll('.mid');
 let botcell = document.querySelectorAll('.bot');
 

topcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        toprow = toprow + 'x';
        console.log(toprow);
        if (toprow == 'xxx') {
            alert('X wins!');
        }
    });
});

midcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        midrow = midrow + 'x';
        if (midrow == 'xxx') {
            alert('X wins!');
        }
    });
});

botcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        botrow = botrow + 'x';
        if (botrow == 'xxx') {
            alert('X wins!');
        }
    });
});


// if (cell.bottom) {
//     botrow = botrow + 'x';
// } else if (cell.middle) {
//     midrow = midrow + 'x';
// } else if (cell.top) {
//     toprow = toprow + 'x';
// }





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


let word = 'a';

word = word + 's';
console.log(word);
console.log(toprow);
