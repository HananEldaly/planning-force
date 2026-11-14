
import { useEffect, useRef, useState } from "react";
import AppMockups from "../assets/app-mockups.png";
import AppLogo from "../assets/logo-mark.png";

function AppDownload() {
    const sectionRef = useRef(null);
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
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative isolate mx-auto mb-[100px] mt-[100px] min-h-[300px] w-[min(1110px,calc(100%_-_48px))] overflow-visible rounded-[20px] bg-white px-6 py-10 text-[#14323c] md:grid md:grid-cols-[38%_1fr] md:items-center md:py-[35px] md:pr-[35px] md:pl-0"
        >
            {/* App Mockups Image */}
            <img
                src={AppMockups}
                alt="Planning Force App Preview"
                loading="lazy"
                className={`
                    relative z-[2] mx-auto mb-4 block
                    w-full max-w-[420px] object-contain
                    transition-all duration-1000 ease-out
                    md:absolute md:left-[3%] md:top-1/2
                    md:mb-0 md:w-[35%] md:max-w-none
                    md:-translate-y-1/2
                    ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-[45px] opacity-0"
                    }
                `}
            />

            {/* App Content */}
            <div
                className={`
                    relative z-[1] px-0 py-5 md:col-start-2 md:py-[5px]
                    transition-all duration-1000 ease-out
                    ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "translate-x-[45px] opacity-0"
                    }
                `}
            >
                <span className="text-xs font-bold tracking-wider text-[#94AD04]">
                    For Better Communication
                </span>

                <h2 className="my-[5px] mb-3 text-[clamp(26px,3vw,32px)] font-extrabold leading-[1.1]">
                    Download The
                    <br />
                    Planning Force App
                </h2>

                <p className="max-w-[520px] text-[13px] leading-[1.6] text-[#71848b]">
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old.
                </p>

                {/* Store Buttons */}
                <div className="mt-[22px] flex flex-wrap gap-[18px]">
                    <a
                        href="#contact"
                        className="min-w-[160px] rounded-lg bg-gradient-to-r from-[#94AD04] to-[#117e9d] px-[22px] py-[10px] text-[9px] text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
                    >
                        Get it on
                        <b className="block text-[13px]">Google Play</b>
                    </a>

                    <a
                        href="#contact"
                        className="min-w-[160px] rounded-lg bg-gradient-to-r from-[#94AD04] to-[#117e9d] px-[22px] py-[10px] text-[9px] text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
                    >
                        Download on the
                        <b className="block text-[13px]">App Store</b>
                    </a>
                </div>
            </div>

            {/* App Logo Circle */}
            <div
                className={`
                    absolute right-[12%] -top-[45px] z-[10]
                    h-[90px] w-[90px] rounded-full
                    border-[12px] border-white bg-[#062B3B]
                    transition-all duration-700 ease-out
                    ${
                        isVisible
                            ? "scale-100 opacity-100"
                            : "scale-75 opacity-0"
                    }
                `}
            >
                {/* Logo Image */}
                <img
                    src={AppLogo}
                    alt="Planning Force Logo"
                    className="absolute -top-[5px] left-1/2 z-[11] h-[80px] w-[80px] max-w-none -translate-x-1/2 object-contain"
                />
            </div>
        </section>
    );
}

export default AppDownload;
