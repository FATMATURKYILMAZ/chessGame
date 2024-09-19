import React from 'react'

const SquareBoard = ({brd}) => {
  const pieceImage = require(`../public/assets/Images/${brd.type}_${brd.color}.png`);

    console.log("brd",brd )
  return (
    <div>
      <img src={pieceImage} />
    </div>
  )
}

export default SquareBoard
