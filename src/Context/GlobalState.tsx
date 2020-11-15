import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import { transType, transactionType, contextProps } from '../Types/Types';

const initialState: transactionType = {
    transaction:[]
}

export const GlobalContext = createContext<Partial<contextProps>>({});

// Provider Component
export const GlobalProvider = ({ children }: any) =>{
    const[state, dispatch] = useReducer(AppReducer, initialState);

function removeTransaction(id: number){
    dispatch({
        type: 'REMOVE_TRANSACTION',
        payload: id
    })
}    
function Addtransaction(transaction: transType){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}    
    return(
        <GlobalContext.Provider 
            value={{
            transaction: state.transaction,
            removeTransaction,
            Addtransaction
        }}
        >
            {children}
        </GlobalContext.Provider>
    )

}