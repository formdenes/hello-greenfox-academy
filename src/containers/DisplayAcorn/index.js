import { connect } from 'react-redux';
import { acornBought } from '../../actions/acornActions';
import { acornEaten } from '../../actions/acornActions';
import Display from '../../components/DisplayAcorn';

const mapStateToProps = (state) => {
  return {
    value: state.acorns.amount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onKeyDown: (e) => {
      if (e.keyCode === 38) {
        dispatch(acornBought(1));
      } else if (e.keyCode === 40) {
        dispatch(acornEaten(1));
      }
    },
  };
};

const DisplayAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);

export default DisplayAcorn;