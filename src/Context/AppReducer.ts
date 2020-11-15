import { transactionType, actionType } from '../Types/Types';

const AppReducer  = (state: transactionType, action: actionType) => {
    switch(action.type) {
        case "REMOVE_TRANSACTION":
            return {
                ...state,
                transaction: state.transaction.filter((transactions: any) =>
                    transactions.id !== action.payload
                )}
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        default: 
        return state;
    }
}

export default AppReducer;