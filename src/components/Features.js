import React from "react";
import Iconfront from '../assets/iconfront.png'
import Iconfb from '../assets/iconfb.png'
import Iconwrite from '../assets/iconwriter.png'

const Features = () => {
    return (
        <section className="w-full">
            <div className="container mx-auto">
                <div className="font-semibold p-2 text-center mb-[20px] lg:text-left lg:mb-[5px]">Features Job</div>
                <div className="flex flex-col items-center gap-y-[20px] md:flex-row md:justify-between">
                    <div className="bg-[#001AFF] rounded-lg border-2 w-[360px] h-[249px] p-[25px]">
                        <div className="flex flex-row">
                            <img src={Iconfront} />
                            <div className="pl-2">
                                <h1 className="font-semibold text-white">Front-End Developer</h1>
                                <p className="text-white opacity-80">Figma</p>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <p className="text-white opacity-80">We are looking for an experienced front-end developer to join our team.</p>
                        </div>
                        <div className="mt-[20px] pt-[20px] border-t flex flex-row justify-between items-center">
                            <button className="bg-blue-600/75 hover:border-2 text-white py-2 px-4 rounded-lg" type="button">Rush</button>
                            <p className="text-white font-semibold">$70,000-$90,000</p>
                        </div>
                    </div>
                    <div className="rounded-lg border-2 w-[360px] h-[249px] p-[25px]">
                        <div className="flex flex-row">
                            <img src={Iconfb} />
                            <div className="pl-2">
                                <h1 className="font-semibold text-black">Data Scientist</h1>
                                <p className="text-black opacity-80">Facebook</p>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <p className="text-black opacity-80">We are looking for an experienced front-end developer to join our team.</p>
                        </div>
                        <div className="mt-[20px] pt-[20px] border-t flex flex-row justify-between items-center">
                            <button className="text-black border-2 py-2 px-4 rounded-lg font-semibold" type="button">Python</button>
                            <p className="text-black font-semibold">$70,000-$90,000</p>
                        </div>
                    </div>
                    <div className="rounded-lg border-2 w-[360px] h-[249px] p-[25px]">
                        <div className="flex flex-row">
                            <img src={Iconwrite} />
                            <div className="pl-2">
                                <h1 className="font-semibold text-black">Front-End Developer</h1>
                                <p className="text-black opacity-80">Figma</p>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <p className="text-black opacity-80">We are looking for an experienced front-end developer to join our team.</p>
                        </div>
                        <div className="mt-[20px] pt-[20px] border-t flex flex-row justify-between items-center">
                            <button className="text-black border-2 py-2 px-4 rounded-lg font-semibold" type="button">Documentation</button>
                            <p className="text-black font-semibold">$70,000-$90,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;