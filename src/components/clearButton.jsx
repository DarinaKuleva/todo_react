import React from 'react'

// class ClearButton extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={ this.props.clearAll }>
//           CLEAR ALL
//         </button>
//       </div>
//     )
//   }
// }

const ClearButton = ( { clearAll} ) => {
  return (
    <div>
      <button onClick={ clearAll }>
        CLEAR ALL
      </button>
    </div>
  )
}


export default ClearButton
