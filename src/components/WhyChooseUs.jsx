
import { useEffect, useRef, useState } from "react";
import { Video, CircleHelp } from "lucide-react";

function WhyChoose() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const benefits = [
        {
            icon: Video,
            title: <>Self-Paced Online<br />Videos</>,
            description:
                "Put We Years To Order Allow Asked Of We. So Opinion Friends Me Message As Delight.",
            number: "01",
        },
        {
            title: "Live Virtual Classroom",
            description:
                "His Defective Nor Convinced Residence Own. Connection Has Put Impossible Own Apartments Boisterous.",
            featured: true,
            number: "02",
        },
        {
            icon: CircleHelp,
            title: <>High Quality<br />Questions</>,
            description:
                "From They Fine His He Give Of Rich He. They Age And Draw Mrs Like. Improving End Distrusts May Instantly.",
            number: "03",
        },
    ];

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
            id="packages"
            className="mx-auto mb-[90px] mt-[5px] w-[min(1110px,calc(100%_-_48px))]"
        >
            {/* Heading */}
            <div
                className={`
                    mb-7
                    transition-all duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[25px] opacity-0"
                    }
                `}
            >
                <span className="mb-2 block text-xs font-bold tracking-wider text-[#94AD04]">
                    Why Choose Us
                </span>

                <h2 className="m-0 text-[clamp(23px,2.6vw,32px)] font-extrabold leading-[1.2] text-white">
                    We have best team and best process
                </h2>
            </div>

            {/* Benefits */}
            <div className="mt-[42px] grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-0">
                {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;

                    return (
                        <article
                            key={benefit.number}
                            className={`
                                relative overflow-hidden rounded-[15px]
                                transition-all duration-700
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                hover:-translate-y-1

                                ${isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-[30px] opacity-0"
                                }

                                ${benefit.featured
                                    ? "z-[2] min-h-[280px] rounded-2xl bg-[#94AD04] px-[22px] py-9 text-black shadow-[0_10px_35px_#001b2530]"
                                    : "min-h-[210px] bg-[#032936] px-[25px] py-7"
                                }
                            `}
                            style={{
                                transitionDelay: isVisible
                                    ? `${index * 150}ms`
                                    : "0ms",
                            }}
                        >
                            {!benefit.featured && (
                                <span className="mb-5 grid h-[42px] w-[42px] place-items-center rounded-xl bg-[#123e4a] text-[#94AD04]">
                                    <Icon size={21} />
                                </span>
                            )}

                            
                            <span
                                className={`
                                    pointer-events-none absolute
                                    -bottom-[5px] right-[18px]
                                    text-[150px] font-black leading-none
                                    ${benefit.featured
                                        ? "text-[#718600] opacity-60"
                                        : "text-[#001c26] opacity-60"
                                    }
                                `}
                            >
                                {benefit.number}
                            </span>

                            {/* Content */}
                            <div className="relative z-[1]">
                                <h3
                                    className={`
                                        mb-[9px] font-bold leading-[1.2]
                                        ${benefit.featured
                                            ? "text-[22px] text-black"
                                            : "text-xl text-white"
                                        }
                                    `}
                                >
                                    {benefit.title}
                                </h3>

                                <p
                                    className={`
                                        m-0 leading-[1.5]
                                        ${benefit.featured
                                            ? "text-[13px] font-bold text-white"
                                            : "text-[11px] text-[#a9bdc3]"
                                        }
                                    `}
                                >
                                    {benefit.description}
                                </p>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default WhyChoose;
