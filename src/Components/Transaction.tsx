import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Transaction = ({ transactions }: any) => {
    const { removeTransaction }: any = useContext(GlobalContext);
    const sign: any = transactions.amount < 0 ? '-' : '+';
    return (
        <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
            {transactions.text}{" "}
            <span>
                {sign}${Math.abs(transactions.amount)}</span>
            <button onClick={() => removeTransaction(transactions.id)} className="delete-btn">X</button>
        </li>
    )
}