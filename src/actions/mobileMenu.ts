import { TypeKeys } from '../constants';

export type MobileMenuAction = ShowMobileMenu | HideMobileMenu;

export interface ShowMobileMenu {
  type: TypeKeys.SHOW_MOBILE_MENU;
}

export const showMobileMenu = (): ShowMobileMenu => ({
  type: TypeKeys.SHOW_MOBILE_MENU
});

export interface HideMobileMenu {
  type: TypeKeys.HIDE_MOBILE_MENU;
}

export const hideMobileMenu = (): HideMobileMenu => ({
  type: TypeKeys.HIDE_MOBILE_MENU
});
