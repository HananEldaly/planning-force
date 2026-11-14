
import { useState, useEffect } from "react";
import {
    Menu,
    X,
    ChevronDown,
    Languages,
    LogIn
} from "lucide-react";

import logoMark from "../assets/logo-mark.png";
import themeIcon from "../assets/theme-icon.png";

export function Brand() {
    return (
        <a href="#home" className="flex shrink-0 items-center gap-2">
            <img
                src={logoMark}
                alt="Planning Force Logo"
                className="h-[50px] w-[25px] object-contain"
            />

            <span className="whitespace-nowrap text-[20px] font-bold tracking-tight text-white">
                Planning <span className="text-[#94AD04]">Force</span>
            </span>
        </a>
    );
}

function Navbar() {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll < 100) {
                setShowNavbar(true);
            } else if (currentScroll < lastScroll) {
                setShowNavbar(true);
            } else if (currentScroll > lastScroll) {
                setShowNavbar(false);
                setOpen(false);
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { name: "Home", href: "#home", active: true },
        { name: "Courses", href: "#courses", dropdown: true },
        { name: "Packages", href: "#packages" },
        { name: "Free Resources", href: "#resources" },
        { name: "Blogs", href: "#blogs" },
        { name: "About Us", href: "#about" },
        { name: "Contact Us", href: "#contact" },
    ];

    return (
        <>
            {/* Navbar Spacer */}
            <div className="h-[105px]" />

            {/* Navbar */}
            <header
                className={`fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#062D3A]/95 shadow-md shadow-black/10 backdrop-blur-md transition-transform duration-300 ${
                    showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="mx-auto flex min-h-[105px] w-[calc(100%-72px)] max-w-[1110px] items-center justify-between gap-6 max-md:w-[calc(100%-36px)]">

                    {/* Logo */}
                    <Brand />

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white lg:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Navigation Menu */}
                    <nav
                        className={`${
                            open ? "flex" : "hidden"
                        } absolute left-0 top-full max-h-[calc(100vh-105px)] w-full flex-col gap-6 overflow-y-auto border-t border-white/10 bg-[#062D3A] px-6 py-6 shadow-xl lg:static lg:flex lg:max-h-none lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
                    >
                        {/* Navigation Links */}
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`relative flex w-fit items-center gap-1 whitespace-nowrap text-[14px] font-semibold transition ${
                                    link.active
                                        ? "text-white after:absolute after:-bottom-[7px] after:left-0 after:h-[4px] after:w-full after:rounded-full after:bg-[#94AD04] after:-rotate-2"
                                        : "text-white/75 hover:text-[#94AD04]"
                                }`}
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={13} />}
                            </a>
                        ))}

                        {/* Mobile & Desktop Actions */}
                        <div className="flex flex-col items-start gap-5 border-t border-white/10 pt-5 lg:flex-row lg:items-center lg:gap-4 lg:border-0 lg:pt-0">

                            {/* Language */}
                            <button
                                className="flex items-center gap-2 text-sm text-white/75 transition hover:text-[#94AD04]"
                                aria-label="Language"
                            >
                                <Languages size={17} />
                                <span className="lg:hidden">Language</span>
                            </button>

                            {/* Theme */}
                            <button
                                className="flex items-center gap-2 text-sm text-white/75 transition hover:opacity-75"
                                onClick={() => {
                                    setDark(!dark);
                                    document.body.classList.toggle("soft-light");
                                }}
                                aria-label="Toggle theme"
                            >
                                <img
                                    src={themeIcon}
                                    alt=""
                                    className="h-[17px] w-[17px] object-contain"
                                />
                                <span className="lg:hidden">Theme</span>
                            </button>

                            {/* Login */}
                            <a
                                href="#login"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2 rounded-md border border-[#94AD04] bg-[#94AD04] px-5 py-2.5 text-[13px] font-semibold text-white transition duration-300 hover:border-[#85A300] hover:bg-[#85A300]"
                            >
                                <LogIn size={17} strokeWidth={2} />
                                Login
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
