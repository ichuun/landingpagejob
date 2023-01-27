import React from "react";

const Hero = ()=> {
    return(
        <section className="w-full h-[400px]">
            <div className="container mt-[135px] mx-auto flex flex-col items-center">
                <div className="text-center">
                    <h1 className="font-semibold text-4xl">Get Connected to the Best Remote<br></br>Jobs in Your Field</h1>
                    <p className="text-base mt-[16px]">Discover a wide range of remote opportunities on our platform and <br></br>take control of your career</p>
                </div>
                <div className="mt-[40px] flex gap-x-4 items-center">
                    <button  className='border-2 py-2 px-6 rounded-lg bg-[#001AFF] text-white' type='button'>Explore Remote Jobs</button>
                    <a className='font-semibold underline underline-offset-4 text-[#001AFF]' href="#">How It Works?</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;