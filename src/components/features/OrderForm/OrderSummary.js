import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';


const OrderSummary = (props) =>(
  <h2 className={styles.component}>Total <strong>{formatPrice(calculateTotal(props.tripCost, props.orderOption))}</strong></h2>

);

OrderSummary.propTypes = {
  cost: PropTypes.string, 
  tripCost: PropTypes.string,
  orderOption: PropTypes.node,
};

export default OrderSummary;