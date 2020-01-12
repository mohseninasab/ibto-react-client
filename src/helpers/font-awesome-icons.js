import {
  faCheckSquare,
  faCoffee,
  faEyeSlash,
  faEye,
  faBars,
  faAngleLeft,
  faAngleRight,
  faInbox,
  faEnvelope,
  faMoneyCheckAlt,
  faMoneyBillAlt,
  faWallet,
  faHandHoldingUsd,
  faChartLine,
  faExchangeAlt,
  faBell,
  faSearch,
  faUserCircle,
  faCoins,
  faUsers,
  faPeopleCarry,
  faTachometerAlt,
  faEdit,
  faMarker,
  faTrashAlt,
  faCreditCard,

} from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

// #############################################################################
// initialize the font icons
// #############################################################################

export const initFontAwesomeIcons = () => {
  library.add(
    faCheckSquare,
    faCoffee,
    faEyeSlash,
    faEye,
    faBars,
    faAngleLeft,
    faAngleRight,
    faInbox,
    faEnvelope,
    faMoneyCheckAlt,
    faMoneyBillAlt,
    faGoogle,
    faWallet,
    faHandHoldingUsd,
    faChartLine,
    faExchangeAlt,
    faBell,
    faSearch,
    faUserCircle,
    faCoins,
    faUsers,
    faPeopleCarry,
    faTachometerAlt,
    faEdit,
    faMarker,
    faTrashAlt,
    faCreditCard,
  );
}