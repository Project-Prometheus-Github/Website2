import React from "react";
import Typed from 'typed.js';


class Typing extends React.Component {
  componentDidMount() {

    const { words, loop } = this.props; // {words: [...], loops: true, arjunwalia: idwaidwjaiej} props acting as parameter... they are properties of a component

    const options = {
      strings: words,
      typeSpeed: 30,
      backSpeed: 50,
      loop: loop,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span
          className={this.props.className}
          style={{ whiteSpace: "pre"}}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}



export default Typing;