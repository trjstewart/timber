import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = props.defaultValue;

    this.renderChildren = this.renderChildren.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    const self = this;

    return (event) => {
      let Update = {};
      Update[name] = event.target.value;
      self.setState(Update);

      if (self.props.onChange !== undefined) {
        self.props.onChange({ // Fake the rough structure of a window onChange event
          target: {
            value: {
              ...self.state,
              ...Update
            }
          }
        });
      }
    };
  }

  renderChildren(Children) {
    if (typeof Children === 'object' && Children !== null) {
      if (Children.constructor !== Array) { // Passed as object if only one child
        Children = [Children];
      }

      return React.Children.map(Children, (child, index) => {
        if (child !== null && typeof child === 'object') {
          if (Object.prototype.hasOwnProperty.call(child.props, 'NoPropogateFormSearch') === false) {
            if (Object.prototype.hasOwnProperty.call(child, 'props')) {
              if (Object.prototype.hasOwnProperty.call(child.props, 'name')) { // It is an input we want to monitor
                if (Object.prototype.hasOwnProperty.call(this.props.defaultValue, child.props.name)) {
                  return React.cloneElement(child, {
                    children: (child.props.children),
                    onChange: this.handleChange(child.props.name),
                    defaultValue: this.props.defaultValue[child.props.name]
                  });
                }
                return React.cloneElement(child, {
                  children: (child.props.children),
                  onChange: this.handleChange(child.props.name)
                });
              }
            }

            if (Object.prototype.hasOwnProperty.call(child, 'props') && child.type !== 'Form') { // We don't want to double track other forms
              if (Object.prototype.hasOwnProperty.call(child.props, 'children')) {
                return React.cloneElement(child, {
                  children: this.renderChildren(child.props.children)
                });
              }
            }
          }
        }
        return child;
      });
    }
    return Children;
  }

  render() {
    return (
      // eslint-disable-next-line space-in-parens
      <div className={'Form' + ((this.props.className !== undefined) ? (' ' + this.props.className) : '')}>
        {this.renderChildren(this.props.children)}
      </div>
    );
  }
};

Form.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  className: PropTypes.string,
  defaultValue: PropTypes.object
};

Form.defaultProps = {
  defaultValue: {}
};

export default Form;
