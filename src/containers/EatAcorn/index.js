import { connect } from 'react-redux';
import { acornEaten } from '../../actions/acornActions';
import Button from '../../components/Button';

const mapStateToProps = (state) => {
  return {
    value: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(acornEaten(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;