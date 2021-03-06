import React from 'react';

class Outer extends React.Component {
  render() {
    var { children, ...other } = this.props;

    return (
      <div className="l-content" {...other}> {children} </div>
    )
  }
}

export default Outer;
