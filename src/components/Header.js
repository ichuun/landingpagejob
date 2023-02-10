import React, { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="w-full p-10">
            <div className="container mx-auto md:flex md:flex-row md:items-center">
                <div className="basis-1/4">
                    <a className='font-bold text-xl' href="#">Jobless</a>
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-9 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <div className="basis-1/2">
                    <ul className={`md:flex md:flex-row md:justify-center md:gap-x-16 my-7 md:my-0 text-2xl md:text-xl ${open ? '' : 'hidden'}`}>
                        <li className="md:font-bold hover:underline"><a href="#">Home</a></li>
                        <li className="hover:underline"><a href="#">Discover</a></li>
                        <li className="hover:underline"><a href="#">Post a Job</a></li>
                        <li className="hover:underline"><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className={`basis-1/4 md:flex md:justify-end font-bold items-center ${open ? '' : 'hidden'}`}>
                    <a className='border-2 px-6 py-2' href="#">Sign Up</a>
                </div>
            </div>
        </section>
    )
}

export default Header;