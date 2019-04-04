import { connect } from 'react-redux';
import Display from '../../components/DisplayAcorn';

const mapStateToProps = (state) => {
  return {
    value: state.acorns.amount,
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
)(Display);

export default DisplayAcorn;