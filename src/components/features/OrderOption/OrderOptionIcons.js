import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.icon} 
  >
    {required ? false : (
      <div  value=''> <Icon name={'times-circle'}/></div>
    )}
    {values.map(value => (
      <div 
        className={styles.icon} 
        key={value.id}
        value={currentValue}
        onClick={() => setOptionValue(value.id)} 
      >
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);


OrderOptionIcons.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  currentValue: PropTypes.object,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  required: PropTypes.node,

};

export default OrderOptionIcons;