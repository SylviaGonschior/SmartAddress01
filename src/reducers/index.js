import historyReducer from './historyReducer';
import blacklistReducer from './blacklistReducer';
import blacklistActivationReducer from './blacklistActivationReducer';
import statusReducer from './status';
import userdataReducer from './userdataReducer';
import linesReducer from './linesReducer';
import contactsReducer from './contactsReducer';
import defaultOutgoingLineReducer from './defaultOutgoingLineReducer';
import defaultIncomingLineReducer from './defaultIncomingLineReducer';

export default {
    history: historyReducer,
    blacklist: blacklistReducer,
    status: statusReducer,
    blacklistActivation: blacklistActivationReducer,
    user: userdataReducer,
    lines: linesReducer,
    contacts: contactsReducer,
    defaultOutgoingLine: defaultOutgoingLineReducer,
    defaultIncomingLine: defaultIncomingLineReducer
};
