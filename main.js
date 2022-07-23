let turn = 'x';
let title = document.querySelector('.title');
let squares =  [];
/*
let squares = Array.from( document.getElementsByClassName('square'));
squares.map(square => {    
    square.addEventListener('click', (e) => {
        //console.log(e.target.innerText);
    });
});
*/
function newGame(x,y,z){
    title.innerHTML = `${squares[x]} is the winner`
        document.getElementById('item'+x).style.backgroundColor ='black';
        document.getElementById('item'+y).style.backgroundColor ='black';
        document.getElementById('item'+z).style.backgroundColor ='black';
        setInterval(() => {
            title.innerHTML += '.'
        }, 1000);
        //new game
        setTimeout(() => {
            location.reload();
        }, 3000);
}
function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('item'+i).innerHTML;
    }
    if(squares[1]==squares[2]
        && squares[2]==squares[3] && squares[1]!='')
    {
        newGame(1,2,3);
    }
    else if(squares[4]==squares[5]
        && squares[5]==squares[6] && squares[5]!='')
    {
        newGame(4,5,6);

    } else if(squares[7]==squares[8]
        && squares[8]==squares[9] && squares[8]!='')
    {
        newGame(7,8,9);

    }

    else if(squares[1]==squares[4]
        && squares[4]==squares[7] && squares[4]!='')
    {
        newGame(1,4,7);

    }
    else if(squares[2]==squares[5]
        && squares[5]==squares[8] && squares[5]!='')
    {
        newGame(2,5,8);

    }
    else if(squares[3]==squares[6]
        && squares[6]==squares[9] && squares[6]!='')
    {
        newGame(3,6,9);

    }

    else if(squares[1]==squares[5]
        && squares[5]==squares[9] && squares[5]!='')
    {
        newGame(1,5,9);

    }
    else if(squares[3]==squares[5]
        && squares[5]==squares[7] && squares[5]!='')
    {
        newGame(3,5,7);

    }


}
function game(id){
    let e = document.getElementById(id);
    if(turn === 'x' &&  e.innerHTML == '' ){
        e.innerHTML = 'X';
        turn = 'o';
        title.innerHTML='O';
    }
    else if(turn === 'o' &&  e.innerHTML == '' ){
        e.innerHTML = 'O';
        turn = 'x';
        title.innerHTML='X';
    }
    winner();
}