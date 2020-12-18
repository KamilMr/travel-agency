import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
// import {formatPrice} from '../../../utils/formatPrice';


const OrderOptionNumber = (props) => { console.log(props); return (
  <div className={styles.number}>
    <input 
      className={styles.inputSmall} 
      type='number' 
      value={props.currentValue.adults} 
      min={props.limits.min}
      max={props.limits.max}
      onChange={event => props.setOptionValue(event.currentTarget.value)}
    >
    </input>
    {props.price}
  </div>
);
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.object,
  limits: PropTypes.object,
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
};
export default OrderOptionNumber;