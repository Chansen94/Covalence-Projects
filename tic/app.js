
//      NEED TO SYNC W/ GIT USING: 
//      C:\Users\conno\Documents\Source\Projects


// Setting the X's and O's on the board. 
let cells = document.querySelectorAll('.cell');

let i = 1;

cells.forEach(function(cell) {

    cell.addEventListener("click", cellClicked);

});

function cellClicked(e) {
    if  (e.target.textContent != '') {
        alert('This square has already been played!');
    } else if (e.target.textContent == '') {
        if (i % 2 != 0) {
            e.target.textContent = 'O';

        } else {
            e.target.textContent = 'X';

        }
    i++;
    }
};







//  Tracking the moves played.

let toprow = '';
let centerrow = '';
let botrow = '';
let leftcol = '';
let midcol = '';
let rightcol = '';
let diag1 = '';
let diag2 = '';


// Creating the button to clear the board and reinitialize the moves lists

let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    cells.forEach(function(cell) {
        cell.textContent = '';
        i = 1;
        toprow = '';
        centerrow = '';
        botrow = '';
        leftcol= '';
        midcol = '';
        rightcol = '';
        diag1 = '';
        diag2 = '';
    });

}
);



// Set up (9) cases using multi-class selector.

//  Need to prevent a click from rewriting cells already containing a character.


let tlCell = document.querySelector('.top.left');
let tmCell = document.querySelector('.top.middle');
let trCell = document.querySelector('.top.right');

let clCell = document.querySelector('.center.left');
let cmCell = document.querySelector('.center.middle');
let crCell = document.querySelector('.center.right');

let blCell = document.querySelector('.bottom.left');
let bmCell = document.querySelector('.bottom.middle');
let brCell = document.querySelector('.bottom.right');




tlCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToTop();
        xAddToLeft();
        xAddToDiag1();
    } else {
        oAddToTop();
        oAddToLeft();
        oAddToDiag1();
    }
    console.log('top: ' + toprow);
    console.log('left: ' + leftcol);
    console.log('diag1: ' + diag1);
});

tmCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToTop();
        xAddToMiddle();
    } else {
        oAddToTop();
        oAddToMiddle();
    }
    console.log('top: ' + toprow);
    console.log('mid: ' + midcol);
});

trCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToTop();
        xAddToRight();
        xAddToDiag2();
    } else {
        oAddToTop();
        oAddToRight();
        oAddToDiag2();
    }
    console.log('top: ' + toprow);
    console.log('right: ' + rightcol);
    console.log('diag2: ' + diag2);
});

clCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToCenter();
        xAddToLeft();
    } else {
        oAddToCenter();
        oAddToLeft();
    }
    console.log('center: ' + centerrow);
    console.log('left: ' + leftcol);
});

cmCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToCenter();
        xAddToMiddle();
        xAddToDiag1();
        xAddToDiag2();
    } else {
        oAddToCenter();
        oAddToMiddle();
        oAddToDiag1();
        oAddToDiag2();
    }
    console.log('top: ' + toprow);
    console.log('middle: ' + midcol);
    console.log('diag1: ' + diag1);
    console.log('diag2: ' + diag2);
});

crCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToCenter();
        xAddToRight();
    } else {
        oAddToCenter();
        oAddToRight();
    }
    console.log('center: ' + centerrow);
    console.log('right: ' + righttcol);
});

blCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToBottom();
        xAddToLeft();
        xAddToDiag2();
    } else {
        oAddToBottom();
        oAddToLeft();
        oAddToDiag2();
    }
    console.log('bottom: ' + botrow);
    console.log('left: ' + leftcol);
    console.log('diag2: ' + diag2);
});

bmCell.addEventListener('click', function() {
    if (i % 2 != 0) {
        xAddToBottom();
        xAddToMiddle();
    } else {
        oAddToBottom();
        oAddToMiddle();
    }
    console.log('bottom: ' + botrow);
    console.log('middle: ' + midcol);
});

brCell.addEventListener('click', function() {
        if (i % 2 != 0) {
            xAddToBottom();
            xAddToRight();
            xAddToDiag1();
        } else {
            oAddToBottom();
            oAddToRight();
            oAddToDiag1();
        }
    console.log('bottom: ' + botrow);
    console.log('right: ' + rightcol);
    console.log('diag1: ' + diag1);
});


// Creating functions to add append text on turns

// X functions:
function xAddToTop() {
    toprow = toprow + 'X';
};

function xAddToCenter() {
    centerrow = centerrow = 'X';
};

function xAddToBottom() {
    botrow = botrow + 'X';
};

function xAddToLeft() {
    leftcol = leftcol + 'X';
};

function xAddToMiddle() {
    midcol = midcol + 'X';
};

function xAddToRight() {
    rightcol = rightcol + 'X';
};

function xAddToDiag1() {
    diag1 = diag1 + 'X';
};

function xAddToDiag2() {
    diag2 = diag2 + 'X';
};

// O functions:

function oAddToTop() {
    toprow = toprow + 'O';
};

function oAddToCenter() {
    centerrow = centerrow = 'O';
};

function oAddToBottom() {
    botrow = botrow + 'O';
};

function oAddToLeft() {
    leftcol = leftcol + 'O';
};

function oAddToMiddle() {
    midcol = midcol + 'O';
};

function oAddToRight() {
    rightcol = rightcol + 'O';
};

function oAddToDiag1() {
    diag1 = diag1 + 'O';
};

function oAddToDiag2() {
    diag2 = diag2 + 'O';
};


