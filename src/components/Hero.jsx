
import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import MainPhoto from "../assets/main-photo.png";
import LibraryPhoto from "../assets/library.png";
import InstructorsPhoto from "../assets/instructors.png";

function Hero() {
    const heroRef = useRef(null);

    const bars = [30, 46, 60, 39, 72, 54, 32];
    useEffect(() => {
        const elements = heroRef.current?.querySelectorAll(".reveal");

        if (!elements) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -30px 0px",
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={heroRef}
            id="home"
            className="
                relative mx-auto grid
                min-h-[590px]
                w-[min(1110px,calc(100%_-_72px))]
                grid-cols-[0.94fr_1.06fr]
                items-center gap-[30px]
                pt-8 pb-[50px]

                max-[1000px]:min-h-[520px]
                max-[1000px]:w-[min(calc(100%_-_48px),900px)]

                max-[760px]:min-h-0
                max-[760px]:w-[calc(100%_-_36px)]
                max-[760px]:grid-cols-1
                max-[760px]:gap-5
                max-[760px]:pt-[52px]

                max-[440px]:w-[calc(100%_-_28px)]
                max-[440px]:pt-[38px]
            "
        >
            {/* Hero Copy */}
            <div className="reveal reveal-left max-[760px]:max-w-[560px]">
                <span className="mb-[6px] block text-[10px] font-bold text-[#94AD04]">
                    Hello,
                </span>

                <h1
                    className="
                        mb-[18px] text-[clamp(38px,4.2vw,56px)]
                        font-extrabold leading-[1.12]
                        tracking-[-1.6px] text-[#f7fbfc]

                        max-[1000px]:text-[43px]
                        max-[760px]:text-[clamp(38px,8vw,52px)]
                        max-[440px]:text-[37px]
                        max-[440px]:tracking-[-1px]
                    "
                >
                    All The{" "}
                    <em className="bg-gradient-to-r from-[#B2D00A] to-[#116E96] bg-clip-text text-transparent not-italic">
                        Skills
                    </em>{" "}
                    You
                    <br className="max-[440px]:hidden" />
                    {" "}Need In One Place.
                </h1>

                <p
                    className="
                        mb-6 max-w-[390px]
                        text-[16px] leading-[1.55]
                        text-[#d0dce0]

                        max-[760px]:text-[14px]
                    "
                >
                    At planning-force Academy, we offer you the chance to enjoy a unique
                    online learning experience that combines the latest technologies
                    with best practices in sustainability.
                </p>

                <a
                    href="#courses"
                    className="
                        inline-flex items-center gap-[9px]
                        rounded-[9px]
                        border-0
                        bg-[linear-gradient(105deg,#a7c900,#1685a5)]
                        px-[18px] py-[11px]
                        text-[12px] font-bold text-white
                        transition duration-200
                        hover:-translate-y-0.5 hover:brightness-110
                    "
                >
                    Join Us
                    <ArrowRight size={15} />
                </a>

                {/* Hero Stats */}
                <div
                    className="
                        mt-12 flex gap-7

                        max-[1000px]:gap-[10px]
                        max-[760px]:mt-[30px]
                        max-[440px]:gap-[5px]
                    "
                >
                    {[
                        { number: "10", label: "Courses" },
                        { number: "100%", label: "Satisfaction" },
                        { number: "12", label: "Packages" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="
                                flex h-[115px] w-[115px]
                                shrink-0 flex-col items-center
                                justify-center gap-[6px]
                                rounded-full border border-white/[0.04]

                                max-[1000px]:h-[95px]
                                max-[1000px]:w-[95px]

                                max-[440px]:h-[88px]
                                max-[440px]:w-[31%]
                            "
                        >
                            <strong className="text-[17px] text-[#94AD04] max-[440px]:text-[15px]">
                                {item.number}
                            </strong>

                            <span className="text-[13px] uppercase text-[#9fb2b9] max-[440px]:text-[10px]">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hero Art */}
            <div
                className="
                    reveal reveal-right
                    relative ml-auto h-[450px] w-full
                    max-w-[570px]

                    max-[1000px]:h-[390px]

                    max-[760px]:mx-auto
                    max-[760px]:h-[370px]
                    max-[760px]:w-full
                    max-[760px]:max-w-[510px]

                    max-[440px]:h-[300px]
                "
            >
                {/* Main Photo */}
                <div
                    className="
                        hero-item hero-item-1
                        absolute left-[5%] top-[3%]
                        h-[58%] w-[64%]
                        overflow-hidden
                        rounded-[18px_18px_45px_0]
                    "
                >
                    <img
                        src={MainPhoto}
                        alt="Student taking notes"
                        className="block h-full w-full object-cover"
                    />
                </div>

                {/* Student Card */}
                <div
                    className="
                        hero-item hero-item-2
                        absolute right-0 top-[3%] z-[2]
                        h-[40%] w-[32%]
                        rounded-[20px_20px_20px_6px]
                        bg-[#94AD04]
                        px-5 py-6
                        text-[#f7ffe2]

                        max-[440px]:px-[10px]
                        max-[440px]:py-[14px]
                    "
                >
                    <small className="block text-[11px]">Student</small>

                    <b className="text-[32px] max-[440px]:text-[24px]">
                        +5K
                    </b>

                    <div
                        className="
                            mt-[5px] flex h-[70px]
                            items-end gap-[6px]

                            max-[440px]:h-[48px]
                            max-[440px]:gap-1
                        "
                    >
                        {bars.map((height, index) => (
                            <i
                                key={index}
                                style={{ height: `${height}%` }}
                                className="
                                    w-[6px] rounded-[5px]
                                    bg-[#d5e88b]

                                    max-[440px]:w-1
                                "
                            />
                        ))}
                    </div>
                </div>

                {/* Play Bubble */}
                <div
                    className="
                        hero-item hero-item-4
                        absolute left-[62%] top-[38%] z-[4]
                        grid h-[76px] w-[76px]
                        place-items-center
                        rounded-full
                        bg-[linear-gradient(140deg,#b3d500,#1685a5)]
                        shadow-[0_10px_35px_#001d28]

                        max-[440px]:h-[55px]
                        max-[440px]:w-[55px]
                    "
                >
                    <Play size={20} fill="white" className="text-white" />
                </div>

                {/* Instructors Card */}
                <div
                    className="
                        hero-item hero-item-3
                        absolute bottom-[2%] left-[5%] z-[2]
                        flex h-[35%] w-[60%]
                        flex-col items-center justify-center
                        gap-[7px]
                        rounded-[18px_18px_80px_18px]
                        bg-[#03232f]

                        max-[440px]:h-[27%]
                    "
                >
                    <div className="flex items-center justify-center">
                        <img
                            src={InstructorsPhoto}
                            alt="Our Instructors"
                            className="
                                h-[85px] w-[220px]
                                object-contain

                                max-[440px]:h-[65px]
                                max-[440px]:w-[180px]
                            "
                        />
                    </div>

                    <b className="text-[10px] tracking-[0.8px] text-white">
                        OUR INSTRUCTORS
                    </b>
                </div>

                {/* Library Photo */}
                <div
                    className="
                        hero-item hero-item-5
                        absolute bottom-[4%] right-0
                        h-[46%] w-[32%]
                        overflow-hidden
                        rounded-[15px_15px_35px_15px]

                        max-[440px]:h-[40%]
                    "
                >
                    <img
                        src={LibraryPhoto}
                        alt="Library"
                        className="block h-full w-full object-cover"
                    />
                </div>

                {/* Hero Orbit */}
                <div
                    className="
                        absolute left-[15%] top-[48%]
                        h-[230px] w-[210px]
                        rotate-[28deg]
                        rounded-[50%]
                        border border-white/[0.035]
                    "
                />
            </div>
        </section>
    );
}

export default Hero;
