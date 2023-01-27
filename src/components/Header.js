import React from "react";

const Header = ()=> {
    return(
        <section className="w-full p-10">
            <div className="container mx-auto flex flex-row">
                <div className="basis-1/4">
                    <a className='font-bold' href="#">Jobless</a>
                </div>
                <div className="basis-1/2">
                    <ul className="flex flex-row justify-center gap-x-16">
                        <li className="font-bold"><a href="#">Home</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Post a Job</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="basis-1/4 text-right font-bold items-center">
                        <a className='border-2 px-6 py-2' href="#">Sign Up</a>
                </div>
            </div>
        </section>
    )
}

export default Header;