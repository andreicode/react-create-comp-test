import React from 'react';
import './style.scss';

// This is an example of how to update the props of a rendered component.
// the basic idea is to simply call `render` again and provide the same container
// that your first call created for you.
// https://testing-library.com/docs/example-update-props

let idCounter = 1;

class SimpleTest extends React.Component {
  id = idCounter++;
  render() {
    return (
      <div className="container">
        <p>SimpleTest</p>
      Display number: <span data-testid="number-display">{this.props.number}</span>
        <br />
      Instance id: <span data-testid="instance-id">{this.id}</span>
        <br />
        <button data-testid="disabledBtn" disabled onClick={() => alert('clicked disabled btn')}>Cannot click me</button>
        <br />
        <button data-testid="enableBtn" onClick={() => this.props.number++ }>Can click me</button>
        <br />
        <span data-testid="btnMessage"> {this.props.number}</span>
      </div>
    );
  }
};

// Can we have same test without using a class component?

//  const SimpleTest = (props) => {
//   let id = idCounter++;
//   return (
//     <div className="container">
//       <p>SimpleTest</p>
//       Display number: <span data-testid="number-display">{props.number}</span>
//       <br/>
//       Instance id: <span data-testid="instance-id">{id}</span>
//     </div>
//   );
// };

export default SimpleTest;
