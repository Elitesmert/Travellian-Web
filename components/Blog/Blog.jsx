import React from 'react'
import styled from '../../styles/Blog.module.scss'
import { BsArrowRightShort } from '@react-icons/all-files/bs/BsArrowRightShort'
import Image from 'next/image'
import blog from '../../public/blog.png'

const Blog = () => {
    return (
        <div className={styled.blog} id="blog">
            <div className={styled.tittle}>
                <h1>Our Blog</h1>
                <p>An insight the incredible experience in the world</p>
            </div>
            <div className={styled.main}>
                <div className={styled.mainL}><div>
                    <Image src={blog} alt="blog1" objectFit='cover' />
                </div></div>
                <div className={styled.mainR}>
                    <h1>Beautiful Italy Let’s travel</h1>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
                    <button><span>Read More</span><BsArrowRightShort /></button>
                </div>
            </div>
        </div>
    )
}

export default Blog