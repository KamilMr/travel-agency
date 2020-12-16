import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => {
  const optionsOrder = getOrderOptions(state, props);


  return {
    optionsOrder,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: action => dispatch(setOrderOption(action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);