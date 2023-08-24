import React from 'react'
import { styles } from '../styles'

const Hero = () => {
  return (
    <>
      <span className="hash-span" id="home">
        &nbsp;
      </span>

      <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915EFF]">Nova</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm an enthusiastic web and mobile developer <br className="sm:block hidden" />who thrives on crafting clean and efficient code. <br className="sm:block hidden" />My commitment lies in delivering captivating <br className="sm:block hidden" />and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero