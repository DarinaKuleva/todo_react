import React from 'react'

class ClearButton extends React.PureComponent {
  render() {
    return (
      <div>
        <button
          onClick={this.props.clearAll}
          clearAll={ this.clearAll }>
          CLEAR ALL
        </button>
      </div>
    )
  }
}

export default ClearButton