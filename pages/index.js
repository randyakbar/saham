import Buttons from "../components/Buttons";
import Gap from "../components/Gap";
import { Footer, Hero } from "../components/partials";
import Sections from "../components/Sections";
import Image from 'next/image'
import DaftarKeahlian from "../components/partials/DaftarKeahlian";


function HomePage() {
  return (
    <div>
      <Hero />
      <Sections>
        <Gap height={40} />
        <p className="text-4xl font-semibold leading-snug">
          SUDAH MENCOBA BERBAGAI USAHA DAN PEKERJAAN TAPI KEUANGAN KAMU GITU-GITU AJA.? ITU ARTINYA SAAT INI KAMU HARUS MEMBUKA MINDSET MU LEBIH LUAS LAGI. SUDAH WAKTUNYA KAMU BELAJAR SESUATU YANG BELUM BANYAK ORANG TAU !!!
        </p>
        <Gap height={40} />
        <div className="justify-center flex">
          <Buttons title="Daftar Sekarang" />
        </div>
      </Sections>

      <Sections>
        <Gap height={50} />
        <p className="text-4xl font-extrabold leading-snug">PENGANTAR, SAHAM SYARIAH</p>
        <Gap height={10} />
        <p className="text-base font-extralight">Sebelum anda mendaftar menjadi bagian dari Saham Syariah, simak pengantar berikut ini</p>
      </Sections>


      <Sections isFullscreen={true}>
        <Gap height={50} />

        <iframe width="100%" height="620" src="https://www.youtube.com/embed/FCJCwAsPhPM" title="YouTube video player" frameBorder="0" allow="accelerometer;   autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Sections>

      <Sections isFullscreen={true}>
        <Gap height={50} />
        
        <p className="text-2xl font-light">YUK, GABUNG TUM PENJUALAN BUKU KAMI DAN JADI BAGIAN TIM PARTHNERSHIP</p>
        <Gap height={10} />

        <p className="text-3xl text-red-500 font-extrabold">SAHAM SYARIAH 2021</p>

        <Gap height={50} />
        <Image src='/img/header.jpg' layout="responsive" width={100} height={30} alt="header" />

        <Gap height={50} />

      </Sections>

      <Sections>
        <p className="text-3xl font-light leading-normal">DAPATKAN PENGHASILAN TAK TERBATAS HANYA DARI RUMAH BERMODALKAN <br /> HP ATAU LAPTOP BERSAMA SAHAM SYARIAH</p>
      </Sections>

      <DaftarKeahlian />
      
      <Sections>
        <p className="mx-auto w-10/12 text-2xl font-light leading-normal">Akan di <span className="font-bold">bimbing Dari NOL</span>, anda gaptek pun tidak masalah cukup 2 hari belajar langsung bisa investasi dan jual beli saham di saham syariah</p>

        <Gap height={50} />
        <div className="justify-center flex">
          <Buttons title="Daftar Sekarang" />
        </div>

      </Sections>

      <Gap height={50} />
      <Sections>
        <Footer />
      </Sections>

    </div>
  );
}

export default HomePage;