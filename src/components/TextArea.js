import React, {Component} from 'react';
import './TextArea.css';

class TextArea extends Component {
  render() {
    const {disabled, content, changeFn} = this.props;
    return (
      <textarea className={"TextArea" + (disabled ? '' : ' TextArea--selected')}
                value={content}
                onChange={e => {/* avoid errors */}}
                onInput={e => changeFn && changeFn(e.target.value)}
      />
    );
  }
}

TextArea.defaultProps = {disabled: true, content: null, changeFn: null};

export default TextArea;
