import * as React from 'react';
import { connect } from 'react-redux';
import { showMobileMenu, hideMobileMenu } from '../actions';

interface Props {
  children: (
    mobileMenu: {
      visible: boolean;
      show: () => void;
      hide: () => void;
    }
  ) => JSX.Element;
}
interface PropsFromState {
  visible: boolean;
}

const mapStateToProps = (state: any) => ({
  visible: state.mobileMenu.visible
});

interface PropsFromDispatch {
  show: () => void;
  hide: () => void;
}

const mapDispatchToProps = (dispatch: any) => ({
  show: () => {
    dispatch(showMobileMenu());
  },
  hide: () => {
    dispatch(hideMobileMenu());
  }
});

export default connect<PropsFromState, PropsFromDispatch, Props>(
  mapStateToProps,
  mapDispatchToProps
)(({ children, visible, show, hide }) => {
  return children({ visible, show, hide });
});
