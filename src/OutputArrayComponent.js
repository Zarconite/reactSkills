import React, { Component } from 'react';

class OutputArrayComponent extends Component {

  render() {
    //Loop through the array of data, convert it into an array of div elements.
    let outputData = this.props.data.map((element) => {
      return <div>{element.id} - {element.myData}</div>
    });

    return (
      <div>
        {outputData}
      </div>
    );
  }
}

export default OutputArrayComponent;