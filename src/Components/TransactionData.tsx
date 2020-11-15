import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'
import { Transaction } from './Transaction';
import { transType } from '../Types/Types';

export const TransactionData = () => {
    const { transaction }: any = useContext(GlobalContext);
    // console.log(transactions);
    
    return(
        <div>
        <h3>Transaction History</h3>
        <ul id="list" className="list">
            {transaction.map((transaction: transType, id: number) => (
                <Transaction key={transaction.id} transactions={transaction} />))}
        </ul>
        </div>
    )
}