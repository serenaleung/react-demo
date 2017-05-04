

// function BlueSq (props) {
//   const style = {
//     height: '50px',
//     width: '50px',
//     backgroundColor: 'Blue'
//   }
//
//   return <div style={style} className="blue sq"></div>
// }



// export function Square (props) {
//   const { color = 'Blue' } = props;
//   // ð syntax sugar for ð
//   // const color = props.color !== undefined ? props.color : 'Blue';
//
//   const style = {
//      height: '50px',
//      width: '50px',
//      backgroundColor: color
//    }
//    return <div style={style} className="square"></div>
//  }
//
//  export function BlueSq (props) {
//    // using {...props} inside a JSX element will
//    // pass all the properties of props as props of that
//    // element
//    return <Square color="blue" {...props} />
//  }



import React from 'react';
import Shape from './Shape';

export function Square (props) {
  const { color = 'Blue' } = props;

  return <Shape {...props} color={color} />
}

export function BlueSquare (props) {
  // using {...props} inside a JSX element will
  // pass all the properties of props as props of that
  // element
  return <Square color="blue" {...props} />
}

export default Square;
