import { LuArrowDownToLine, LuChevronDown, LuRocket } from "react-icons/lu";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,var(--color-main)_0%,transparent_50%)]" />

        <div className="absolute top-1/4 left-1/4 size-96 bg-main/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 size-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <div className="inline-flex mb-6 px-4 py-2 bg-main/10 rounded-full border items-center gap-2 border-primary/20">
              <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">
                Available for freelance work
              </span>
            </div>
          </div>

          <h1 className="text-5xl xs:text-6xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-main to-foreground">
            Full-Stack
            <br />
            Web Developer
          </h1>

          <p className=" text-base md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
            Crafting exceptional digital experiences with modern technologies.
            Specializing in scalable applications and innovative solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button className="btn btn-primary btn-lg">
              View Projects
              <LuRocket className="size-4" />
            </button>
            <button className="btn btn-neutral btn-lg">
              <LuArrowDownToLine /> Download CV
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/ahsanulazim"
              target="_blank"
              className="hover:text-main"
            >
              <FaGithub className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahsanulazim"
              target="_blank"
              className="hover:text-main"
            >
              <FaLinkedin className="size-6" />
            </a>
            <a href="mailto:ahsanulazim6@gmail.com" className="hover:text-main">
              <FaEnvelope className="size-6" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <LuChevronDown className="size-8 text-muted-foreground" />
          </div>
        </div>
      </section>
    </>
  );
}
