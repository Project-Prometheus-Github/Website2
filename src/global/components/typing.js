import React from "react";
import Typed from 'typed.js';


class Typing extends React.Component {
  componentDidMount() {

    const { words } = this.props;

    const options = {
      strings: words,
      typeSpeed: 30,
      backSpeed: 50,
      loop: false,
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