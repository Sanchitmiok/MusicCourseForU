import Link from "next/link"
import { Spotlight } from "./UI/Spotlight"
import { Button } from "./UI/moving-border"
function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
        <div className='p-4 relative z-10 w-full text-center bgblu'>
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
            <p className=" mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
  Unlock your musical journey with expert-led courses designed for all skill levels. Learn to play instruments, understand music theory, and create your own melodies with our interactive lessons and supportive community.
</p>
            <div className='mt-4'>
               <Link href={"/courses"}>
               <Button borderRadius="1.75rem" className="bg-black
                dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800">Explore courses</Button>
               </Link>
            </div>

        </div>
    </div>
  )
}

export default HeroSection
