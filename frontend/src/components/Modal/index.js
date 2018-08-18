import React, { Component } from 'react';
import classnames from 'classnames';

import './Modal.scss';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.startOpen || false,
    };
  }

  componentDidMount() {
    if (Object.prototype.hasOwnProperty.call(this.props, 'onRef')) {
      this.props.onRef(this)
    }
  }

  componentWillUnmount() {
    if (Object.prototype.hasOwnProperty.call(this.props, 'onRef')) {
      this.props.onRef(undefined)
    }
  }

  closeModal = () => this.setState({
    open: false,
  })

  detectEscape = event => {
    if (this.state.open) {
      if (event.keyCode === 27) {
        this.closeModal();
      }
    }
  }

  openModal = () => {
    this.setState({
      open: true,
    });
    document.addEventListener("keydown", this.detectEscape);
  };

  render() {
    return (
      <div className={classnames({
        "Modal__Wrapper": true,
        "Modal__Wrapper--Open": this.state.open,
      })}>
        <div className="Modal__Background" onClick={this.closeModal}></div>
        <div className="Modal__Container">
          <a className="Modal__CloseButtoon" onClick={this.closeModal}>X</a>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
