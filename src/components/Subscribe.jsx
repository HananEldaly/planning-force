
import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";

function Subscribe() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
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

    function submit(e) {
        e.preventDefault();

        setMessage(
            email.includes("@")
                ? "Thanks! You’re subscribed."
                : "Please enter a valid email address."
        );
    }

    return (
        <section
            ref={sectionRef}
            className="mx-auto mb-[65px] flex w-[min(1110px,calc(100%_-_48px))] flex-col items-start justify-between gap-[25px] md:flex-row md:items-center"
            id="contact"
        >
            {/* Subscribe Text */}
            <div
                className={`
                    transition-all duration-700 ease-out
                    motion-reduce:transition-none
                    ${
                        isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-[35px] opacity-0"
                    }
                `}
            >
                <h2 className="mb-2 text-[23px] font-bold text-white">
                    Ready to Transform Your Career?
                </h2>

                <p className="m-0 text-[13px] leading-relaxed text-[#b5c6ca]">
                    Get unlimited access to expert-led courses, exclusive
                    <br className="hidden md:block" />
                    resources, and certification opportunities
                </p>
            </div>

            {/* Subscribe Form */}
            <form
                onSubmit={submit}
                className={`
                    relative flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center md:w-auto
                    transition-all duration-700 ease-out
                    motion-reduce:transition-none
                    ${
                        isVisible
                            ? "translate-x-0 translate-y-0 opacity-100"
                            : "translate-y-[25px] opacity-0 md:translate-x-[35px] md:translate-y-0"
                    }
                `}
            >
                {/* Email Field */}
                <div className="flex h-12 w-full items-center gap-2 rounded-lg border border-[#47707b] px-3 text-[#7e9ba3] sm:w-[330px]">
                    <Mail size={16} />

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Please Enter Your Mail"
                        required
                        className="w-full bg-transparent text-xs text-white outline-none placeholder:text-[#79919a]"
                    />
                </div>

                {/* Subscribe Button */}
                <button
                    type="submit"
                    className="whitespace-nowrap rounded-lg bg-gradient-to-r from-[#94AD04] to-[#117e9d] px-[22px] py-[15px] text-xs font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:opacity-80"
                >
                    Subscribe Now
                </button>

                {/* Message */}
                {message && (
                    <small
                        role="status"
                        aria-live="polite"
                        className="absolute left-0 top-[54px] text-[11px] text-[#94AD04]"
                    >
                        {message}
                    </small>
                )}
            </form>
        </section>
    );
}

export default Subscribe;
