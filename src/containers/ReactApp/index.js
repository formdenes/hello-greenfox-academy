import { connect } from 'react-redux';
import { acornBought } from '../../actions/acornActions';
import { acornEaten } from '../../actions/acornActions';
import ReduxGoldenAcornApp from '../../components/ReduxGoldenAcornApp';

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

const ReduxGoldenAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxGoldenAcornApp);

export default ReduxGoldenAcorn;