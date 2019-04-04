import { connect } from 'react-redux';
import { acornBought } from '../../actions/acornActions';
import Button from '../../components/Button';

const mapStateToProps = (state) => {
  return {
    value: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(acornBought(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;