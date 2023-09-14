import React from 'react'

import ShortcutItems from './ShortcutItems'
import { shortcutItemsList } from './ShortcutItemLists'

import styles from "./ShortcutBar.module.scss"

const ShortcutBar = () => {
    return (
        <div className='w-full h-[46px] flex justify-center bg-[#fff]'>
            <ul className={`${styles["sc-nav-item"]}`}>
                {shortcutItemsList.map((menu, index) => {
                    return <ShortcutItems items={menu} key={index}/>
                })}
            </ul>
        </div>
    )
}

export default ShortcutBar