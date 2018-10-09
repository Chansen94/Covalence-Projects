
//      NEED TO SYNC W/ GIT USING: 
//      C:\Users\conno\Documents\Source\Projects


function xWin() {
    if (toprow == 'XXX') {
        alert("X Wins!");
    }
}

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
            tl.addEventListener('click', xAddToTop);
            xWin();
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

let topcell = document.querySelectorAll('.top');
let centercell = document.querySelectorAll('.center');
let botcell = document.querySelectorAll('.bottom');
let leftcell = document.querySelectorAll('.left');
let midcell = document.querySelectorAll('.middle');
let rightcell = document.querySelectorAll('.right')
 
let j = 1;
let k = 1;
let l = 1;
let m = 1;
let n = 1;
let p = 1;

topcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (j % 2 != 0) {
            toprow = toprow + 'O';
        } else {
            toprow = toprow + 'X';
        }
        console.log('Top: ' + toprow);
        if (toprow == 'XXX') {
            alert("X's wins in the center row!");
        } else if (toprow == 'OOO') {
            alert("O's wins in the center row!");
        }
        j++;
    });
});

centercell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (k % 2 != 0) {
            centerrow = centerrow + 'O';
        } else {
            centerrow = centerrow + 'X';
        }
        console.log('Center: ' + centerrow);
        if (centerrow == 'XXX') {
            alert("X's wins in the center row!");
        } else if (centerrow == 'OOO') {
            alert("O's wins in the center row!");
        }
        k++;
    });
});

botcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (l % 2 != 0) {
            botrow = botrow + 'O';
        } else {
            botrow = botrow + 'X';
        }
        console.log('Bottom: ' + botrow);
        if (botrow == 'XXX') {
            alert("X's wins in the bottom row!");
        } else if (botrow == 'OOO') {
            alert("O's wins in the bottom row!");
        }
        l++;
    });
});

leftcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (m % 2 != 0) {
            leftcol = leftcol + 'O';
        } else {
            leftcol = leftcol + 'X';
        }
        console.log('Left: ' + leftcol);
        if (leftcol == 'XXX') {
            alert("X's wins in the Left Column!");
        } else if (leftcol == 'OOO') {
            alert("O's wins in the Left Column!");
        }
        m++;
    });
});

midcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (n % 2 != 0) {
            midcol = midcol + 'O';
        } else {
            midcol = midcol + 'X';
        }
        console.log('Middle: ' + midcol);
        if (midcol == 'XXX') {
            alert("X's wins in the Middle Column!");
        } else if (midcol == 'OOO') {
            alert("O's wins in the Middle Column!");
        }
        n++;
    });
});

rightcell.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (p % 2 != 0) {
            rightcol = rightcol + 'O';
        } else {
            rightcol = rightcol + 'X';
        }
        console.log('Right: ' + rightcol);
        if (rightcol == 'XXX') {
            alert("X's wins in the Right Column!");
        } else if (rightcol == 'OOO') {
            alert("O's wins in the Right Column!");
        }
        p++;
    });
});


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
        tldiag = '';
        bldiag = '';
    });

}
);



// Set up (9) cases using multi-class selector.

//  Need to prevent a click from rewriting cells already containing a character.


let tl = document.querySelector('top.left');
let tm = document.querySelector('top.middle');
let tr = document.querySelector('top.right');

let cl = document.querySelector('center.left');
let cm = document.querySelector('center.middle');
let cr = document.querySelector('center.right');

let bl = document.querySelector('bottom.left');
let bm = document.querySelector('bottom.middle');
let br = document.querySelector('bottom.right');


tl.addEventListener('click', function() {
    xAddToTop;
    xAddToLeft;
    xAddToDiag1;
});

tm.addEventListener('click', function() {
    xAddToTop;
    xAddToMiddle;
});

tr.addEventListener('click', function() {
    xAddToTop;
    xAddToRight;
    xAddToDiag2;
});

cl.addEventListener('click', function() {
    xAddToCenter;
    xAddToLeft;
});

cm.addEventListener('click', function() {
    xAddToCenter;
    xAddToMiddle;
    xAddToDiag1;
    xAddToDiag2;
});

cr.addEventListener('click', function() {
    xAddToCenter;
    xAddToRight;
});

bl.addEventListener('click', function() {
    xAddToBottom;
    xAddToLeft;
    xAddToDiag2;
});

bm.addEventListener('click', function() {
    xAddToBottom;
    xAddToMiddle;
});

br.addEventListener('click', function() {
    xAddToBottom;
    xAddToRight;
    xAddToDiag1;
});


// Creating functions to add append text on turns

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




