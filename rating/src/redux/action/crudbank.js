import * as AllAction from '../action/actionTypes';

export const createbank = (IdNo,TownShipName) => ({
    type : AllAction.ADD_BANK,
    payload : {
        idno : IdNo,
        township_name : TownShipName
    }
});
