import React from 'react';
import firebase from '../firebase';
import { IconContext } from 'react-icons';
import { FaBell } from 'react-icons/fa';
import styles from './Header.module.css';

export const Header = () => {
    const clickHandler = async () => {
        try {
            const messaging = firebase.messaging();
            await messaging.requestPermission();
            const token = await messaging.getToken();
            console.log(`Token: ${token}`);
        }
        catch (err) {
            console.log('Error: '+err);
        }
    }
    return(
        <div>
            <IconContext.Provider value={{ size: "50px" }}>
                <button className={styles.notifiactions} onClick={clickHandler}>
                    <FaBell title="Allow Notifiactions"/>
                </button>
            </IconContext.Provider>
        <h1>
           Expense Tracker by Naveeda Hanif
        </h1>
        <br />
        <h3>Manage Your Personal Expenses</h3>
        </div>
    )
}