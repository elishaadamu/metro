import React from "react";
import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import { homeCards } from "../constant/homeCards";
import logo from "../assets/logo.png";

function Home() {
    return (
        <>
            <Navbar />

            <div className="mt-[6rem] mx-auto px-4 max-w-[69rem]">
                {/* logo */}
                <div className="select-none flex items-center justify-center md:justify-start gap-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="aspect-square w-[5rem] md:w-[6rem]  object-cover rounded-lg"
                    />
                    <div className="font-semibold uppercase text-sm md:text-[1rem]">
                        <p> metropolitan </p>
                        <p> planning </p>
                        <p> organisation</p>
                    </div>
                </div>

                {/* hero */}
                <div className="w-full overflow-hidden rounded-xl h-[20rem] md:h-[30rem] mt-12 ">
                    <img
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="hero image"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* cards */}
                <div className="mt-20 grid card-grid-temp gap-5">
                    {homeCards?.map((card, i) => (
                        <div className="soft-bg rounded-xl p-4">
                            <img
                                src={card.image}
                                className="h-[15rem] w-full object-contain rounded-lg"
                            />
                            <p className="my-4">{card.text}</p>
                            {card.link && (
                                <a
                                    href={card.link.link}
                                    className="text-sky-500 font-semibold hover:opacity-50 capitalize"
                                >
                                    {card.link.title}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* youtube vids */}
                <div className="flex flex-col gap-8 mt-20 lg:flex-row">
                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="404"
                            src="https://www.youtube.com/embed/SWUP81TuUmc"
                            title="NFRMPO Planning Council Meeting - January 9, 2025"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <p>NFRMPO Planning Council Meeting - January 9, 2025</p>
                    </div>

                    <div className="w-full">
                        <iframe
                            width="100%"
                            height="404"
                            src="https://www.youtube.com/embed/FkYKbZ7U8Ic"
                            title="NFRMPO TAC Meeting - January 16, 2025"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        <p>
                            NFRMPO Technical Advisory Committee (TAC) Meeting -
                            January 15, 2025
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
