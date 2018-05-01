import { combineReducers } from 'redux';
import mobileMenu, { MobileMenu } from './mobileMenu';

export interface AppState {
  mobileMenu: MobileMenu;
}

export default combineReducers({
  mobileMenu
});
