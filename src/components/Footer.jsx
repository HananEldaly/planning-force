
import { useEffect, useRef, useState } from "react";
import { Brand } from "./Navbar";
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";
import {
    SiVisa,
    SiMastercard,
    SiPaypal,
    SiApplepay,
} from "react-icons/si";
import { FaSnapchat } from "react-icons/fa";
import MadaLogo from "../assets/Mada_Logo 1.png";
import STC from "../assets/STC.png";

function Footer() {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -30px 0px"
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animationClass = (delay = 0) => ({
        transitionDelay: isVisible ? `${delay}ms` : "0ms"
    });

    const revealClass = `
        transition-all duration-700 ease-out
        motion-reduce:transition-none
        ${isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[25px] opacity-0"
        }
    `;

    return (
        <footer
            ref={footerRef}
            className="border-t border-white/[0.13] bg-[rgba(1,31,42,0.4)]"
        >
            {/* Footer Main */}
            <div className="mx-auto grid w-[min(1110px,calc(100%_-_48px))] grid-cols-2 gap-8 py-[42px] pb-[35px] sm:grid-cols-3 lg:grid-cols-[1.4fr_0.8fr_1.5fr_0.9fr_1.2fr] lg:gap-[30px]">

                {/* About */}
                <div
                    style={animationClass(0)}
                    className={`col-span-2 sm:col-span-1 ${revealClass}`}
                >
                    <Brand light />

                    <p className="mt-4 max-w-[220px] text-[10px] leading-[1.6] text-[#afc0c5]">
                        Planning Force is a professional training and management
                        company that provides specialized training and management
                        consultancy services in project management.
                    </p>

                    {/* Payment Methods */}
                    <div className="mt-4 grid w-max grid-cols-[repeat(4,68px)] gap-x-5 gap-y-5">

                        <span className="flex h-[45px] w-[68px] items-center justify-center rounded-[9px] bg-white">
                            <SiVisa size={36} color="#1A1F71" />
                        </span>

                        <span className="flex h-[45px] w-[68px] items-center justify-center rounded-[9px] bg-white">
                            <SiMastercard size={34} color="#EB001B" />
                        </span>

                        <span className="flex h-[45px] w-[68px] items-center justify-center rounded-[9px] bg-white">
                            <SiPaypal size={35} color="#003087" />
                        </span>

                        <span className="flex h-[45px] w-[68px] items-center justify-center rounded-[9px] bg-white">
                            <SiApplepay size={35} color="#000000" />
                        </span>

                        <span className="flex h-[45px] w-[68px] items-center justify-center rounded-[9px] bg-white px-1">
                            <img
                                src={MadaLogo}
                                alt="Mada"
                                loading="lazy"
                                className="h-[27px] w-auto object-contain"
                            />
                        </span>

                        <span className="flex h-[45px] w-[68px] items-center justify-center rounded-[9px] bg-white px-1">
                            <img
                                src={STC}
                                alt="STC Pay"
                                loading="lazy"
                                className="h-[27px] w-auto object-contain"
                            />
                        </span>
                    </div>
                </div>

                {/* Quick Links */}
                <div
                    style={animationClass(120)}
                    className={`flex flex-col items-start ${revealClass}`}
                >
                    <h4 className="mb-[18px] mt-1 text-[11px] font-bold text-white">
                        Quick Links
                    </h4>

                    {[
                        ["Popular Courses", "#courses"],
                        ["Home", "#about"],
                        ["Courses", "#courses"],
                        ["Free Resources", "#resources"],
                        ["About Us", "#blogs"],
                    ].map(([label, link]) => (
                        <a
                            key={label}
                            href={link}
                            className="mb-[10px] text-[10px] text-[#b1c1c6] transition-colors duration-300 hover:text-white"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* Courses */}
                <div
                    style={animationClass(240)}
                    className={`flex flex-col items-start ${revealClass}`}
                >
                    <h4 className="mb-[18px] mt-1 text-[11px] font-bold text-white">
                        Courses
                    </h4>

                    {[
                        "Delay Analysis & EOT Claims (DAC)",
                        "Planning and Scheduling for Consultants (PSC)",
                        "Planning, Scheduling and Reporting",
                        "P6P Preparation Course (Arabic)",
                    ].map((course) => (
                        <a
                            key={course}
                            href="#courses"
                            className="mb-[10px] text-[10px] text-[#b1c1c6] transition-colors duration-300 hover:text-white"
                        >
                            {course}
                        </a>
                    ))}
                </div>

                {/* Support */}
                <div
                    style={animationClass(360)}
                    className={`flex flex-col items-start ${revealClass}`}
                >
                    <h4 className="mb-[18px] mt-1 text-[11px] font-bold text-white">
                        Support
                    </h4>

                    {[
                        "Contact Us",
                        "Help And FAQs",
                        "Service Status",
                        "Technical Requirements",
                    ].map((item) => (
                        <a
                            key={item}
                            href="#contact"
                            className="mb-[10px] text-[10px] text-[#b1c1c6] transition-colors duration-300 hover:text-white"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* App & Social Media */}
                <div
                    style={animationClass(480)}
                    className={`flex flex-col items-start ${revealClass}`}
                >
                    <h4 className="mb-[18px] mt-1 text-[11px] font-bold text-white">
                        Download App
                    </h4>

                    <div className="flex flex-wrap gap-2">
                        <a
                            href="#contact"
                            className="rounded border border-[#b3c4c8] p-2 text-[9px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                            ▷ Google Play
                        </a>

                        <a
                            href="#contact"
                            className="rounded border border-[#b3c4c8] p-2 text-[9px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                        >
                            App Store
                        </a>
                    </div>

                    <h4 className="mb-[10px] mt-[25px] text-[11px] font-bold text-white">
                        Follow Us
                    </h4>

                    <div className="flex items-center gap-3">
                        {[
                            { icon: FaFacebookF, label: "Facebook" },
                            { icon: FaInstagram, label: "Instagram" },
                            { icon: FaXTwitter, label: "X" },
                            { icon: FaLinkedinIn, label: "LinkedIn" },
                            { icon: FaYoutube, label: "YouTube" },
                            { icon: FaSnapchat, label: "Snapchat" },
                        ].map(({ icon: Icon, label }, index) => (
                            <a
                                key={label}
                                href="#contact"
                                aria-label={label}
                                className={`text-[#d4e1e4] transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white ${
                                    index !== 5
                                        ? "border-r border-white/20 pr-3"
                                        : ""
                                }`}
                            >
                                <Icon size={15} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div
                style={animationClass(600)}
                className={`mx-auto flex w-[min(1110px,calc(100%_-_48px))] flex-col justify-between gap-3 border-t border-white/10 py-5 text-[9px] text-[#a7b8bd] sm:flex-row sm:items-center ${revealClass}`}
            >
                <span>
                    Privacy Policy　 Terms & Conditions　 Return Policy　 Site Map
                </span>

                <span>
                    © 2024 - 2025 All rights reserved to pm line station developed by Misk ITS
                </span>
            </div>
        </footer>
    );
}

export default Footer;
