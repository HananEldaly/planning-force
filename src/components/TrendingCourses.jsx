
import { useEffect, useRef, useState } from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/courses";

function Trending() {
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
                threshold: 0.1,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="courses"
            className={`
                mx-auto mb-[90px]
                w-[min(1110px,calc(100%_-_48px))]
            `}
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
                    Trending Courses
                </span>

                <h2 className="m-0 text-[clamp(23px,2.6vw,32px)] font-extrabold leading-[1.2] text-white">
                    What Everyone Is Learning Now
                </h2>
            </div>

            {/* Horizontal Scroll */}
            <div
                className="
                    flex gap-4
                    overflow-x-auto overflow-y-hidden
                    pb-2
                    scroll-smooth
                    snap-x snap-mandatory
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                "
            >
                {courses.map((course, index) => (
                    <div
                        key={course.id ?? index}
                        className={`
                            w-[calc((100%-64px)/3.35)]
                            min-w-[220px]
                            shrink-0
                            snap-start

                            transition-all duration-700
                            ease-[cubic-bezier(0.22,1,0.36,1)]

                            ${isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-[30px] opacity-0"
                            }
                        `}
                        style={{
                            transitionDelay: isVisible
                                ? `${150 + index * 120}ms`
                                : "0ms",
                        }}
                    >
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Trending;
