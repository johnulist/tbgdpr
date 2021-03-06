import React from 'react';
import PropTypes from 'prop-types';

export default class ResetButton extends React.Component {
  static propTypes = {
    translations: PropTypes.object,
    resetSort: PropTypes.func,
  };

  render() {
    const { translations, resetSort } = this.props;
    
    return (
      <button type="button" className="btn btn-warning" onClick={resetSort}>
        <i className="icon-eraser"/> {translations.reset}
      </button>
    );
  }
}
