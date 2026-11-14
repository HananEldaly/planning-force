
import { useState } from "react";
import {
    Star,
    Clock3,
    BookOpen,
    Bookmark,
    Layers3,
} from "lucide-react";

function CourseCard({ course }) {
    const [saved, setSaved] = useState(false);

    return (
        <article className="group w-full min-w-0 overflow-hidden rounded-[17px] border border-white/[0.035] bg-[#032936] transition-all duration-300 hover:-translate-y-[6px] hover:shadow-[0_15px_35px_#001b2580]">

            {/* Course Image */}
            <div className="relative h-[185px]">
                <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent to-[#032936]" />

                <span className="absolute left-[14px] top-[14px] z-10 rounded-xl bg-[#e8b5aa] px-[9px] py-[5px] text-[10px] text-white">
                    50% OFF
                </span>

                <span className="absolute right-[14px] top-[14px] z-10 flex items-center gap-1 text-[10px] text-[#f6c84c]">
                    {course.rating}
                    <Star size={12} fill="currentColor" />
                </span>
            </div>

            {/* Course Info */}
            <div className="px-[15px] pb-4 pt-[13px]">

                <h3 className="mb-[5px] text-sm font-bold text-white">
                    {course.title}
                </h3>

                <p className="mb-[10px] text-[11px] text-[#8da6ae]">
                    {course.category}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-[#1d4651] pt-3">
                    {course.instructors?.map((instructor, i) => (
                        <div key={i} className="flex min-w-0 items-center gap-2">
                            <img
                                src={instructor.image}
                                alt={instructor.name}
                                className="h-[25px] w-[25px] shrink-0 rounded-full object-cover"
                            />

                            <span className="truncate text-[10px] font-semibold text-[#c1d0d4]">
                                {instructor.name}
                            </span>
                        </div>
                    ))}
                </div>


                <p className="mt-2 text-[10px] leading-relaxed text-[#8da6ae]">
                    Our professional abilities by providing diverse professional
                </p>

                {/* Course Details */}
                <div className="my-[13px] flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-[#9bb0b7]">

                    <span className="flex items-center gap-1">
                        <Clock3 size={12} />
                        {course.lessons}
                    </span>

                    <span className="flex items-center gap-1">
                        <BookOpen size={12} />
                        {course.Lecturers}
                    </span>

                    <span className="flex items-center gap-1">
                        <Layers3 size={12} />
                        {course.Chapters}
                    </span>

                </div>

                {/* Price & Actions */}
                <div className="mt-3 flex items-center gap-[9px]">

                    <div className="mr-auto flex flex-col">
                        <del className="text-[9px] text-[#8aa0a6]">
                            {course.old} EGP
                        </del>

                        <b className="text-[11px] text-[#94AD04]">
                            {course.price} EGP
                        </b>
                    </div>

                    <a
                        href="#contact"
                        className="whitespace-nowrap rounded-lg bg-gradient-to-r from-[#a7ca00] to-[#0e809f] px-[13px] py-[7px] text-[10px] font-extrabold text-white transition-opacity hover:opacity-80"
                    >
                        Enroll Now
                    </a>

                    <button
                        type="button"
                        onClick={() => setSaved(!saved)}
                        aria-label="Save course"
                        aria-pressed={saved}
                        className={`grid cursor-pointer place-items-center rounded-[7px] border border-[#1d7381] p-[6px] transition-colors ${saved
                                ? "bg-[#94AD04] text-[#062d3a]"
                                : "bg-transparent text-[#94AD04]"
                            }`}
                    >
                        <Bookmark
                            size={15}
                            fill={saved ? "currentColor" : "none"}
                        />
                    </button>
                </div>
            </div>
        </article>
    );
}

export default CourseCard;
