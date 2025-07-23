import { useState } from "react";
export default function LudoBoard()
{
    let [moves,setmoves]=useState({blue:0,yellow:0,red:0,green:0});
    let [arr,setarr]=useState(["no moves"]);
    let updateBlue=()=>{
       // moves.blue+=1;
       // console.log(`Moves of blue = ${moves.blue}`);
       // setmoves({...moves});
       setarr((arr)=>{
        return [...arr,"blue moves"]
       });
       console.log(arr);
    }
    let updateYellow=()=>{
        moves.yellow+=1;
        console.log(`Moves of yellow= ${moves.yellow}`);
        setmoves({...moves});
    }
    let updateRed=()=>{
        moves.red+=1;
        console.log(`Moves of red= ${moves.red}`);
        setmoves({...moves});
    }
    let updateGreen=()=>{
        moves.green+=1;
        console.log(`Moves of grren= ${moves.green}`);
        setmoves({...moves});
    }
    return(
        <>
        <h1>Game Begins</h1>
        <div className="board">
              <p>Blue Moves={arr}</p>
              <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
              <p>Yellow Moves={moves.yellow}</p>
              <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
              <p>Red Moves={moves.red}</p>
              <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
              <p>Green Moves={moves.green}</p>
              <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        </div>
        </>
    );
}