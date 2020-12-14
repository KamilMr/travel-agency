import React from 'react';
import OrderSummary from './OrderSummary.js';
// import style from './OrderForm.scss';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid'; 
import pricing from '../../../../src/data/pricing.json';
import OrderOption from '../OrderOption/OrderOption.js';

const OrderForm = (props) => (
  <Row>
    {pricing.map(options => (
      <Col md={4} key={options.id}>
        <OrderOption 
          {...options} 
          currentValue={props.optionsOrder} 
          setOrderOption={props.setOrderOption} 
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} orderOption={props.optionsOrder}/> 
    </Col>
  </Row>

);

OrderForm.propTypes = {
  cost: PropTypes.string,
  tripCost: PropTypes.string,
  optionsOrder: PropTypes.object,
  setOrderOption: PropTypes.func,
  
};

export default OrderForm;
