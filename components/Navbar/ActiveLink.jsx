import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/ActiveLink.module.scss'

export const Header = ({ setSelect, select, link, name }) => {
    // console.log(select === name)
    return (
        <div className={styles.link}>

            <Link href={link} onClick={() => setSelect(name)} className={select === name && styles.active} >
                {name}
            </Link>
        </div>

    )
}
export default Header