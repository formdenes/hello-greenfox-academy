import { connect } from 'react-redux';
import { acornEaten } from '../../actions/acornActions';
import Button from '../../components/Button';

const mapStateToProps = (state) => {
  return {
    value: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(acornEaten(1));
    },
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default EatAcorn;