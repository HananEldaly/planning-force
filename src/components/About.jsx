
import { useEffect, useRef, useState } from "react";
import photo from "../assets/Rectangle 10.png";
import AboutLogo from "../assets/Vector (1).png";

function About() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(section);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className={`
                relative mx-auto mb-[88px] mt-2
                grid min-h-[245px]
                w-[min(1110px,calc(100%_-_72px))]
                grid-cols-1 items-center gap-5
                rounded-[18px] bg-white
                px-8 py-[35px] text-[#18333c]

                md:grid-cols-[38%_1fr]

                max-[760px]:w-[calc(100%_-_48px)]
                max-[760px]:mb-[70px]

                max-[440px]:w-[calc(100%_-_28px)]
                max-[440px]:px-4
                max-[440px]:pb-[18px]
                max-[440px]:pt-6

                transition-all duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[35px] opacity-0"
                }
            `}
        >

            {/* About Logo */}
            <div
                className="
                    absolute -top-[44px] left-1/2
                    grid h-[90px] w-[90px]
                    -translate-x-1/2
                    place-items-center
                    rounded-full bg-white
                    max-[440px]:h-[75px]
                    max-[440px]:w-[75px]
                "
            >
                <div className="
                    grid h-[62px] w-[62px]
                    place-items-center
                    overflow-hidden
                    rounded-full
                    bg-[#94AD04]
                    p-6
                    max-[440px]:h-[53px]
                    max-[440px]:w-[53px]
                ">
                    <img
                        src={AboutLogo}
                        alt="Planning Force Logo"
                        className="h-full w-full object-contain"
                    />
                </div>
            </div>

            {/* About Image */}
            <div className="h-[190px] w-full overflow-hidden rounded-2xl max-[440px]:h-[150px]">
                <img
                    src={photo}
                    alt="Learning workspace"
                    className="
                        h-full w-full
                        object-cover
                        transition-transform duration-700
                        hover:scale-105
                    "
                />
            </div>

            {/* About Content */}
            <div className="about-copy">
                <span
                    className="
                        block text-[12px]
                        font-bold
                        tracking-[1px]
                        text-[#94AD04]
                    "
                >
                    Who We Are,
                </span>

                <p
                    className="
                        mt-2 mb-0
                        text-[16px]
                        leading-[1.65]
                        text-[#18333c]
                        max-[440px]:text-[12px]
                    "
                >
                    Planning-Force Offers Training Courses And Remote Training
                    Through A Website Dedicated To Various Fields Aimed At
                    Enhancing Your Skills And Scientific Capabilities, As Well
                    As Developing Your Professional Abilities By Providing
                    Diverse Professional Courses Steadily That Save Time And
                    Effort.
                </p>
            </div>

        </section>
    );
}

export default About;
