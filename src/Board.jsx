import React from 'react'
import Square from './Spuare'
import SquareBoard from './SquareBoard'



const Board = ({board}) => {
    //console.log("boardd",board)
    const colorCntrl = (i) => {
      const x = i % 8;
      const y = Math.abs(Math.floor(i/8)-7)
      return (x+y)%2==0
    }
  return (
    <div className="w-[640px] h-[640px] bg-green-700 flex flex-wrap">
     {
        board.flat().map((brd,i) => (
            <Square colorValue = {colorCntrl(i)}>
                {brd && <SquareBoard brd={brd} />}
            </Square>
        ))
     }
    </div>
  )
}

export default Board
