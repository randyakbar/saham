import Image from 'next/image'
import Sections from '../Sections'
import Gap from '../Gap'
import LogoImage from "../../public/img/spongebobcapture.png" 

function Hero() {
  return (
    <Sections styles="min-h-screen flex justify-end items-end">
      <div className="text-center justify-center items-center flex-col flex-1">
        { LogoImage && (
          <Image src={LogoImage} width={500} height={400} alt="hero" />
        )}

        <h1 className="text-3xl md:text-5xl font-medium leading-tighter tracking-tighter mb-4 text-red-600" data-aos="zoom-y-out">BELAJAR SAHAM SYARIAH 2021</h1>
        <Gap height={10} />

      </div>

    </Sections>
  )
}

export default Hero
