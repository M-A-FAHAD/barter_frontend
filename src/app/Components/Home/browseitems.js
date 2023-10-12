import Image from 'next/image'

//Import images form public folder
//first row
import mobailesImg from '../../../../public/Icons/smartphone.png'
import electronicsImg from '../../../../public/Icons/monitor.png'
import vehiclesImg from '../../../../public/Icons/car.png'
import homeaplincesImg from '../../../../public/Icons/washing-machine.png'
//Second row
import petImg from '../../../../public/Icons/kitty.png'
import propertyImg from '../../../../public/Icons/house.png'
import womenclothImg from '../../../../public/Icons/womendress.png'
import menclothImg from '../../../../public/Icons/manfashion.png'
//Third row
import sportImg from '../../../../public/Icons/ball-sport.png'
import busnessImg from '../../../../public/Icons/factory.png'
import essentialsImg from '../../../../public/Icons/esentials.png'
import educationImg from '../../../../public/Icons/education.png'
//Fourth row
import agricultureImg from '../../../../public/Icons/agriculture.png'
import serviceImg from '../../../../public/Icons/customer-service.png'
import jobsImg from '../../../../public/Icons/job.png'
import overseasjobs from '../../../../public/Icons/remotejob.png'


//styles section
const rows = `flex `
const boxes = `flex justify-center items-center bg-gray-200 hover:bg-gray-100 m-2 w-[15rem] h-[5rem] p-2 rounded cursor-pointer shadow-md offset-x-10 offset-y-10 blur-10 hover:scale-105 transition-transform ease duration-200`
const imgDiv = ``
const imges = `w-10`
const textDiv = `pl-2`
const textOne = `text-[15px] font-bold w-[3rem]`
const textTwo = `opacity-[0.5]`
export default function Browseitems() {
    return (
        <div className='w-full flex justify-center pt-2 pb-2'>
            <div className='sm:flex overflow-x-auto'>
                {/* first row */}
                <div className={rows}>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={mobailesImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Mobiles</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={electronicsImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Electronics</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={vehiclesImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Vehicles</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={homeaplincesImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Home Apliences</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                </div>
                {/* second row */}
                <div className={rows}>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={petImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Pets & Animals</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={propertyImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Property</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={womenclothImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Women's Fashion </p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={menclothImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Men's Fashion</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                </div>
                {/* third row */}
                <div className={rows}>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={sportImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Sports</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={busnessImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}> Business </p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={essentialsImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Essentials</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={educationImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Education</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                </div>
                {/* frourth row */}
                <div className={rows}>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={agricultureImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Agriculture</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={serviceImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Services</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={jobsImg} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Jobs</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                    <div className={boxes}>
                        <div className={imgDiv}>
                            <Image className={imges} src={overseasjobs} />
                        </div>
                        <div className={textDiv}>
                            <p className={textOne}>Overseas Jobs</p>
                            <p className={textTwo}>999 ads</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

