import imgHero from "@/imports/Beyou/9ba218a523b6d4a6d73a5ee81861d59141d2e951.png";

export default function BeyouHero() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-10 h-[88px] bg-white flex items-center px-12">
        <span
          className="font-bold text-[21px] leading-[0.9] tracking-[-0.42px] text-[#2f2f2f]"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Beyou
        </span>
      </header>

      {/* Hero image */}
      <div className="relative w-full" style={{ paddingTop: "64.6%" }}>
        <img
          src={imgHero}
          alt="A group of designers walking"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Headline */}
        <div className="absolute inset-0 flex flex-col justify-start pt-[18%] pl-8 md:pl-12">
          <h1
            className="font-bold text-white leading-[0.9] tracking-[-1.28px]"
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: "clamp(40px, 3.7vw, 64px)",
              maxWidth: "360px",
            }}
          >
            Are you a designer?
          </h1>
        </div>

        {/* Bottom-right caption */}
        <div className="absolute bottom-[8%] right-0 pr-8 md:pr-12 max-w-[60%] text-right">
          <p
            className="capitalize font-normal leading-[1.15] text-[#202020] tracking-[1.26px]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(13px, 1.04vw, 18px)",
            }}
          >
            Can I call myself a designer? Yes, but not simply because I create
            visually appealing work. To me, being a designer is defined by the
            ability to create meaningful solutions that have a real impact on
            users and society.
          </p>
        </div>
      </div>
    </div>
  );
}
