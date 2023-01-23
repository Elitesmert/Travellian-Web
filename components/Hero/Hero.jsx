import React from 'react'
import styled from '../../styles/Hero.module.scss'
import bgPhoto from "../../public/hero.jpg"
import Image from 'next/image'
import Inputs from '../Inputs'
import { BsArrowRightShort } from '@react-icons/all-files/bs/BsArrowRightShort'

const Hero = () => {
    return (
        <>

            <div id='home' className={styled.hero} >

                <Image src={bgPhoto}
                    objectFit="cover"
                />
                <div className={styled.title}>
                    <h1>Start your unforgettable journey with us.</h1>
                    <p>The best travel for your journey begins now</p>
                </div>
                <form className={styled.search}>
                    <div className={styled.searchL}>

                        <div className={styled.inputs}>
                            <Inputs
                                header="Destination"
                                type="text"
                                label="Destination"
                            />
                        </div>
                        <div className={styled.inputs}>
                            <Inputs
                                header="Person"
                                type="number"
                                label="Person"
                            />
                        </div>
                        <div className={styled.inputs}>
                            <Inputs
                                header="Check-in"
                                type="date"
                            // label="Check-in"
                            />
                        </div>
                        <div className={styled.inputs}>
                            <Inputs
                                header="Check-out"
                                type="date"
                            // label="Person"
                            />

                        </div>
                    </div>
                    <div className={styled.searchR}>
                        <div>
                            <p>Book Now</p>
                            <BsArrowRightShort />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Hero