import React from 'react';

/*
function HelloWorld (props) {
  // when inlining an object in jsx, do not forget
  // the braces for evaluating js and the braces for
  // declaring the object
  return <h1
    style={{color: 'DeepPink'}}>{`Hello, ${props.name}`}</h1>
  // ð transpiled into ð by Babel
  // return React.createElement('h1', null, `Hello, ${props.name}`)
}
*/

// ð is a class-based of the functional component above âï¸
class HelloWorld extends React.Component {
  constructor (props) {
    // super(props) must be called in all class-based components
    // super(props) will call the same name method in the super class
    // (or, parent class, or extended class)
    // (eg. super(props) will call the constructor of React.Component with
    // props as argument)
    // it must also be called before `this` is mutated
    super(props);

    // state is a property of this. it's plain javascript object
    // that represents the current state of the component (e.g. whether a user
    // is logged in, whether a list item is checked, whether a component is
    // is hovered, contains a list of questions queried from the databases)
    this.state = {
      hovered: false
    };

    // Everytime you pass method as callback, you must bind this
    // to it with the .bind method. Otherwise, this will be null when
    // the method is finally called. In this case, this.hover is the
    // callback for the onMouseEnter prop of the h1 below.
    this.hover = this.hover.bind(this);
    this.unHover = this.unHover.bind(this);
  }

  hover() {
    // this.setState method is used to update the state
    // based on user interactions
    // it merges the given boject with this.state asynchronously
    this.setState({hovered: true});
  }

  unHover () {
    this.setState({hovered: false});
  }

  render() {
    const hovered = this.state.hovered;
    return (
      <h1
        onMouseEnter={this.hover}
        onMouseLeave={this.unHover}
        style={{color: 'DeepPink'}}>
        {`${hovered ? 'Hello' : 'Bye'}, ${this.props.name}`}
      </h1>
    )
  }
}

export default HelloWorld;
