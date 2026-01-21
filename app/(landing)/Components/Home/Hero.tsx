import { FiFastForward } from "react-icons/fi"
import Button from "../ui/button"
import Image from "next/image"

const HeroSection = () => {
    return (
        <section id="hero-section" className="container mx-auto h-screen flex">
            <div className="relative self-center">
                <Image src="/image/img-basketball.png" alt="bola baskets" width={432} height={423} className="grayscale absolute left-0 -top-10" />
                <div className=" relative ml-0 md:ml-20 lg:ml-40 w-full">
                    <div className="text-primary italic">friday sale 50%</div>
                    <h1 className="font-extrabold text-4xl md:text-6xl lg:text-[92px] italic bg-linear-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent ">WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR</h1>
                    <p className="w-1/2 mt-10 leading-loose">Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.</p>
                    <div className="flex gap-5 mt-12">
                        <Button>
                            Explore more
                            <FiFastForward />
                        </Button>
                        <Button variant="ghost">
                            Watch Viode
                            <Image src="/icon/icon-play-video.svg" alt="play btn" width={29} height={29} />
                        </Button>
                    </div>
                </div>
                <Image src="/image/img-hero.png" alt="foto hero" width={700} height={750} className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2" />
            </div>
            <Image src="/image/img-ornament-hero.svg" alt="foto ornamen bulat" width={420} height={420} className="absolute -right-50 top-1/2 -translate-y-1/2 " />
        </section>
    )
}

export default HeroSection