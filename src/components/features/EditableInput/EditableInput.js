import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Editable = ({
  text,
  type,
  placeholder,
  children,
  ...props
}) => {
 
  const [isEditing, setEditing] = useState(false);

  const handleKeyDown = (event, type) => {

  };
  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div
          onClick={() => setEditing(true)}
        >
          <span>
            {text || placeholder || 'Editable content'}
          </span>
        </div>
      )}
    </section>
  );
};

Editable.propTypes = {
  text: PropTypes.node,
  type: PropTypes.node,
  placeholder: PropTypes.node,
  children: PropTypes.node,
};

export default Editable;