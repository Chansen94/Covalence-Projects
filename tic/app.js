
let cells = document.querySelectorAll('.cell');

let i = 1;
cells.forEach(function(cell) {
    
        if (i % 2 == 1) {
            cell.addEventListener("click", cellClickedO);
        } else {
            cell.addEventListener("click", cellClickedX);
        }
    i++;
});


function cellClickedO(e) {

     e.target.textContent = 'O';
    
};

function cellClickedX(e) {
    e.target.textContent = 'X';
};


let btn = document.querySelector('button');

btn.addEventListener("click", function() {
    cells.forEach(function(cell) {
        cell.textContent = '';
    });
    }
);




