
import { useEffect, useRef, useState } from "react";
import {
    Clock3,
    BookOpen,
    Users,
    Layers3,
    CalendarDays
} from "lucide-react";
import { courses } from "../data/courses";

function Interactive() {
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
                threshold: 0.1,
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
            id="resources"
            className="mx-auto mb-[90px] w-[min(1110px,calc(100%_-_48px))]"
        >
            <div
                className={`mb-7 transition-all duration-700 ease-out ${
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[25px] opacity-0"
                }`}
            >
                <span className="mb-2 block text-xs font-bold tracking-wider text-[#94AD04]">
                    Interactive Courses
                </span>

                <h2 className="m-0 text-[clamp(23px,2.6vw,32px)] font-extrabold leading-[1.2] text-white">
                    Discover The Latest Trends In Interactive Courses That
                    <br className="hidden md:block" />
                    {" "}Everyone Is Diving Into!
                </h2>
            </div>

            {/* Interactive Courses Grid */}
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
                {courses.map((course, index) => (
                    <article
                        key={course.id ?? index}
                        style={{
                            transitionDelay: isVisible
                                ? `${150 + index * 120}ms`
                                : "0ms"
                        }}
                        className={`grid min-h-[175px] grid-cols-1 overflow-hidden rounded-2xl bg-[#032936] transition-all duration-700 ease-out hover:-translate-y-1 sm:grid-cols-[38%_1fr] ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-[30px] opacity-0"
                        }`}
                    >
                        {/* Course Image */}
                        <div className="relative min-h-[235px]">
                            <img
                                src={course.image}
                                alt={course.title}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#032936a8] to-transparent" />

                            {/* Countdown */}
                            <div className="absolute left-1/2 top-[36%] z-10 flex -translate-x-1/2 -translate-y-1/2 gap-2">
                                {[
                                    { value: "06", label: "days" },
                                    { value: "23", label: "hours" },
                                    { value: "40", label: "minutes" },
                                ].map((item, i) => (
                                    <div key={i} className="flex w-[52px] flex-col items-center">
                                        <b className="flex h-[45px] w-[52px] items-center justify-center rounded-xl bg-white text-[18px] font-bold text-[#52646a] shadow-md">
                                            {item.value}
                                        </b>

                                        <span className="mt-1 text-[11px] text-white">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Start Date & End Date */}
                            <div className="absolute bottom-[10px] left-[5%] right-[5%] z-10 grid grid-cols-2 bg-[#032936]/35 py-2 text-center">
                                {/* Start Date */}
                                <div className="border-r border-white/20">
                                    <CalendarDays
                                        size={23}
                                        className="mx-auto mb-1 text-white"
                                    />

                                    <h4 className="text-[16px] font-bold text-white">
                                        20 May
                                    </h4>

                                    <span className="text-[11px] text-white">
                                        Start Date
                                    </span>
                                </div>

                                {/* End Date */}
                                <div>
                                    <CalendarDays
                                        size={23}
                                        className="mx-auto mb-1 text-white"
                                    />

                                    <h4 className="text-[16px] font-bold text-white">
                                        20 May
                                    </h4>

                                    <span className="text-[11px] text-white">
                                        End Date
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Course Information */}
                        <div className="flex flex-col p-[17px_15px]">
                            <h3 className="mb-[6px] text-[13px] font-bold text-white">
                                {course.title}
                            </h3>

                            <p className="mb-[10px] text-[10px] text-[#9bb0b7]">
                                Our Professional Abilities By Providing Diverse Professional
                            </p>

                            {/* Course Meta */}
                            <div className="flex flex-wrap gap-x-[10px] gap-y-2 text-[8px] text-[#9bb0b7]">
                                <span className="flex items-center gap-1">
                                    <Clock3 size={11} />
                                    {course.lessons}
                                </span>

                                <span className="flex items-center gap-1">
                                    <BookOpen size={11} />
                                    {course.Lectuers}
                                </span>

                                <span className="flex items-center gap-1">
                                    <Layers3 size={11} />
                                    {course.Chapters}
                                </span>

                                <span className="flex items-center gap-1">
                                    <Users size={11} />
                                    {course.Students}
                                </span>
                            </div>

                            {/* Instructor */}
                            <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#1d4651] pt-3">
                                {course.instructors?.map((instructor, i) => (
                                    <div key={i} className="flex min-w-0 items-center gap-2">
                                        <img
                                            src={instructor.image}
                                            alt={instructor.name}
                                            loading="lazy"
                                            className="h-[25px] w-[25px] shrink-0 rounded-full object-cover"
                                        />

                                        <span className="truncate text-[10px] font-semibold text-[#c1d0d4]">
                                            {instructor.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Price and Enroll */}
                            <div className="mt-auto flex items-center gap-[9px] pt-3">
                                <div className="mr-auto flex flex-col">
                                    <del className="text-[9px] text-[#8aa0a6]">
                                        5,500
                                    </del>

                                    <b className="text-[11px] text-[#94AD04]">
                                        3,000 EGP
                                    </b>
                                </div>

                                <a
                                    href="#contact"
                                    className="whitespace-nowrap rounded-lg bg-gradient-to-r from-[#94AD04] to-[#0e809f] px-[13px] py-[7px] text-[10px] font-extrabold text-white transition-opacity hover:opacity-80"
                                >
                                    Enroll Now
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Interactive;
