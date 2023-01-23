import Image from 'next/image'
import React from 'react'
import { MdChevronLeft } from '@react-icons/all-files/md/MdChevronLeft'
import { MdChevronRight } from '@react-icons/all-files/md/MdChevronRight'
import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn'
import { data } from './photos'
import styled from '../../styles/Destination.module.scss'

const Destination = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <div className={styled.destination} id="destination">
            <div className={styled.popular}>
                <h1 >Popular Destinations</h1>
                <p>Most popular destinations around the world, from historical places to natural wonders.</p>
                <MdChevronLeft className='absolute  cursor-pointer hover:opacity-100 mr-16 bg-[#172432] rounded-lg' onClick={slideLeft} size={40} />
                <MdChevronRight className='absolute  cursor-pointer hover:opacity-100 bg-[#FF7757] rounded-lg' onClick={slideRight} size={40} />
            </div>




            <div className={styled.carousel} >

                <div id='slider' className={`${styled.upG} ${"scroll overflow-hidden scrollbar-hide"}`}>
                    {/* <div className={`${styled["upG scrollbar-hide scroll"]}`}> */}
                    {data.map((item) => (
                        <div key={item.id} className={styled.group} >
                            <div className={styled.tBlock}>

                                <h1 className={styled.header}>{item.title}</h1>
                                <p><MdLocationOn />{item.location}</p>
                            </div>
                            <Image
                                className=""
                                src={item.img}
                                alt='/'
                                objectFit='cover'
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Destination