import React from 'react';
import _base from '../styles';

export default React.createClass({
  render: function() {
    var { children, ...other } = this.props;

    var style = {
      position: 'fixed',
      marginLeft: _base['sidebar_width'],
      height: 50,
      width: '100%',
      background: _base['color-base']
    };

    return (
      <div style={style} {...other}>
        {children}
      </div>
    );
  }
});
