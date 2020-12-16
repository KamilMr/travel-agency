import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';


const OrderOptionText = (props) => {
  return ( 
    <div className={styles.component}>
      <input
        type='text'
        // value how does it works in here?
        onChange={event => props.setOptionValue(event.currentTarget.value)}
      >
      </input>
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};
 
export default OrderOptionText;
