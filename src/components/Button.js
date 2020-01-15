import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {onClick, className, children, ...btnProps} = props;
  const btnClassName = `btn ${className}`.trim();

  return (
    <button onClick={onClick} className={btnClassName} {...btnProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
