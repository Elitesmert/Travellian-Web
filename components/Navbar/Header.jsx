import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Header.module.scss'
import logo from '../../public/logo.svg'
import ActiveLink from './ActiveLink.jsx'

const Header = () => {
    const [select, setSelect] = useState("home");
    const [nav, setNav] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 150) {
                setScrollNav(true)
            } else {
                setScrollNav(false)
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    console.log()


    const menus = [
        {
            id: 1,
            name: 'Home',
            link: '#home'
        },

        {
            id: 2,
            name: 'Destination',
            link: '#destination'
        },

        {
            id: 3,
            name: 'Travel',
            link: '#travel'
        },

        {
            id: 4,
            name: 'Blog',
            link: '#blog'
        },
        {
            id: 5,
            name: 'Pricing',
            link: '#pricing'
        }
    ]
    return (
        <header className={`${styles.header} && ${scrollNav ? " z-10 ease-in duration-300 bg-gray-500/80"
            : " z-10 ease-in duration-300 nav bg-transparent"}`}>
            <div className='header-logo'>
                <Image src={logo} alt="logo" objectFit='contain' />
            </div>
            <div className={styles.menu}>
                <ul>
                    {menus.map((menu) => (
                        <li key={menu.id}>
                            <ActiveLink href={menu.link}{...menu} select={select} setSelect={setSelect}>{menu.name}</ActiveLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.buttons}>
                <button className={styles.buttonL}>Login</button>
                <button className={styles.buttonSU}>Sign Up</button>
            </div>
        </header>
    )
}

export default Header