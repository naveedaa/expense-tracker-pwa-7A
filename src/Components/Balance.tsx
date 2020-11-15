import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { transType } from '../Types/Types';

export const Balance = () => {
    const { transaction }: any = useContext(GlobalContext);
    const amounts = transaction.map(
        (transaction: transType, id: number) => 
        transaction.amount
    );
    const total = amounts.reduce((acc: any, item: any) => (
        acc += item), 0).toFixed(2);
    return (
        <div>
            <h4>Balance</h4>
            <br />
            <h1>${total}</h1>
        </div>
    )
}