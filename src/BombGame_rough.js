// import React, { useState, useEffect } from 'react';
// import './MyFunctionalComponent.css';
// import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
// import Grid from '@mui/material/Grid';
import React, { useState } from "react";

function BombGame() {
    
    let cells = new Array(5);
    // console.log(cells)
    for (let i=0; i<cells.length; i++){
        cells[i] = [];
        for (let a=0; a<cells.length; a++){
            cells[i][a] = null
        }
    }
    for (let i=0; i<5; i++){
        // console.log(cells)
        let overlap = true
        while (overlap) {
            let x = Math.floor(Math.random()*4)
            let y = Math.floor(Math.random()*4)
            if (cells[x][y] !== "💣") {
                cells[x][y] = "💣"
                overlap = false
            }
            // else{console.log("Overlap occured")}

            // console.log(x,y)
            // cells[x][y]="💣"
            // console.log(cells)
        }
    }
    console.log(cells)
    // const rows = cells.map((row) => (
    //     <>
    //         {/ {console.log(row)} /}
    //         {row.map((cell) => 
    //             // console.log(cell)
    //             <h3 color="cyan">{cell}</h3>
    //         )}
    //     </>
    // ))
    function userChoice(input) {
        return input === "💣" ? input: input
    }
    function idGenerate(rowIndex,cellIndex){
        return (rowIndex.toString()+cellIndex.toString())
    }
    function hideNshow(elementId) {
        var x = document.getElementById(elementId)
        if (x.style.display === "none") {
            x.style.display = "block"
        } else {
            x.style.display = "none"
        }
    }
    function restart(){
        window.location.reload(); // Reload the page to reset the entire application
    };
    
    // const GameoverDiv = () => {
    //     if (bomb === true){
    //         // console.log(bomb)
    //         return <>💣</>
    //     }
    // }
    function changeEmoji(elementId) {
        document.getElementById(elementId).innerHTML = "💣"
        disableButton(elementId)
    }
    const [disabled, setDisabled] = useState(false);
    const disableButton = (elementId) => {
        setDisabled(true);
        console.log("input disable")
    };
    
    var chosen = 0

    const board = cells.map((row, rowIndex) =>
        <tr>
            {row.map((cell, cellIndex) =>
                <td>
                    <button
                        onClick={()=>{
                            const choice = userChoice(cell);
                            console.log(choice)
                            const elementId = idGenerate(rowIndex,cellIndex)
                            // console.log(rowIndex)
                            // console.log(cellIndex)
                            
                            if (choice !== "💣" && cell !== "chosen"){
                                document.getElementById(elementId).style.backgroundColor = "cyan"
                                cell = "chosen"
                                ++chosen
                                // console.log(rowIndex)
                                // console.log(cellIndex)
                            } else if (cell !== "chosen"){
                                document.getElementById(elementId).style.backgroundColor = "red"
                                // setTimeout(hideNshow, 1000, "board")
                                // hide("board")
                                changeEmoji(elementId)
                                setTimeout(hideNshow, 1100,"gameover")
                                setTimeout(hideNshow, 1100,"fullscreen-bg")
                            } else {
                                console.log("This is chosen")
                            }
                            console.log(chosen)
                            if (chosen === 20){
                                setTimeout(hideNshow, 200,"fullscreen-bg")
                                setTimeout(hideNshow, 200,"gamecomplete")
                            }
                            }} 
                        class="cell" 
                        id={idGenerate(rowIndex,cellIndex)}
                        disabled={disabled}>
                        <b>O</b>
                    </button>
                    {/* {cell === "💣" ? cell : <b>O</b>} */}
                    
                    
                </td>
            )}
        </tr>
    )

    return (
        
        <div className="App">
            <table id="board">{board}</table>
            <div id="fullscreen-bg" style={{display:"none"}}></div>
            <div id="gameover" style={{display:"none"}}>
                <h1 >Game Over</h1>
                <button onClick={restart} id="restartbtn">restart</button>
            </div>
            <div id="gamecomplete" style={{display:"none"}}>
                <h1 >You Win!</h1>
                <button onClick={restart} id="restartbtn">restart</button>
            </div>
            
        </div>
    );
}

export default BombGame;






// const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("/bombgame")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);  // Log the received data
    //             setData(data);      // Set the data state
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);