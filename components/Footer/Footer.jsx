import React from 'react'
import styled from '../../styles/Footer.module.scss'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs'
import Inputs from '../Inputs.jsx'




const Footer = () => {
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
        <>

            <div className={styled.main}>
                <div className={styled.newlester}>
                    <h1>Our Newsletter</h1>
                    <form>
                        <Inputs
                            header="Destination"
                            type="email"
                            label="Enter your email"
                        />
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className={styled.info}>
                    <div>
                        <Image src={logo} alt="logo" />
                        <h1>Copyright © Travellian 2020 All rights reserved</h1>
                    </div>
                    <div>
                        <h1>Menu</h1>
                        <ul>
                            {menus.map((menus) => (
                                <Link key={menus.id} href={menus.link}>{menus.name}</Link>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h1>Contact Info</h1>
                        <p>+123 456 789</p>
                        <p>info@travellian.com</p>
                        <p>1245, New Yourk, USA</p>
                    </div>
                    <div>
                        <h1>Follow us on</h1>
                        <div>
                            <BsFacebook />
                            <BsPinterest />
                            <BsInstagram />
                            <BsTwitter />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer