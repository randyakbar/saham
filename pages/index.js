import Buttons from "../components/Buttons";
import Gap from "../components/Gap";
import { Footer, Hero } from "../components/partials";
import Sections from "../components/Sections";
import Image from "next/image";
import DaftarKeahlian from "../components/partials/DaftarKeahlian";
import HeaderImage from "../public/img/header.jpg";
import { isiLinkWA } from "../consts/config";

function HomePage() {
  return (
    <div className="mt-5">
      <Sections>
        <div className="bg-yellow-300 font-semibold p-3 rounded-md  shadow-inner drop-shadow-md">
          <h1
            className="text-base text-red-700 subpixel-antialiased"
            style={{
              textShadowOffset: { width: 5, height: 5 },
              textShadowRadius: 10,
              textShadowColor: "blue",
            }}
          >
            BELAJAR SAHAM SYARIAH 2021
          </h1>
        </div>
      </Sections>

      <Sections isFullscreen={true}>
        {HeaderImage && (
          <Image src={HeaderImage} layout="responsive" alt="header" />
        )}
      </Sections>

      <Sections>
        <Gap height={30} />
        <div className="justify-center flex">
          <Buttons title="Daftar Webminar Gratis" href={isiLinkWA} />
        </div>
        <Gap height={30} />
        <DaftarKeahlian />

        <p className="text-xl font-semibold leading-snug md:text-4xl">
          SUDAH MENCOBA BERBAGAI USAHA DAN PEKERJAAN TAPI KEUANGAN KAMU
          GITU-GITU AJA.? ITU ARTINYA SAAT INI KAMU HARUS MEMBUKA MINDSET MU
          LEBIH LUAS LAGI. SUDAH WAKTUNYA KAMU BELAJAR SESUATU YANG BELUM BANYAK
          ORANG TAU !!!
        </p>
        <Gap height={40} />
      </Sections>

      <Sections>
        <Gap height={50} />
        <p className="text-4xl font-extrabold leading-snug">
          PENGANTAR, SAHAM SYARIAH
        </p>
        <Gap height={10} />
        <p className="text-base font-extralight">
          Sebelum anda mendaftar menjadi bagian dari Saham Syariah, simak
          pengantar berikut ini
        </p>
      </Sections>

      <Sections isFullscreen={true}>
        <div className="flex justify-center w-full items-center">
          <iframe
            className="w-10/12 h-auto md:96 md:w-9/12"
            src="https://www.youtube.com/embed/FCJCwAsPhPM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;   autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Sections>

      <Sections isFullscreen={false}>
        <p className="text-base font-light md:text-2xl">
          YUK, GABUNG TIM PENJUALAN BUKU KAMI DAN JADI BAGIAN TIM PARTHNERSHIP
        </p>
        <Gap height={50} />

        <p className="text-3xl text-red-500 font-extrabold">
          SAHAM SYARIAH 2021
        </p>

        <Gap height={20} />
      </Sections>

      <Sections>
        <p className="text-xl font-light leading-normal md:text-3xl">
          DAPATKAN PENGHASILAN TAK TERBATAS HANYA DARI RUMAH{" "}
          <span className="font-semibold">BERMODALKAN HP ATAU LAPTOP </span>{" "}
          BERSAMA SAHAM SYARIAH
        </p>
      </Sections>

      <Sections>
        <p className="mx-auto w-10/12 text-base md:text-2xl font-light leading-normal">
          Akan di <span className="font-bold">bimbing Dari NOL</span>, anda
          gaptek pun tidak masalah cukup 2 hari belajar langsung bisa investasi
          dan jual beli saham di saham syariah
        </p>

        <Gap height={50} />
      </Sections>

      <Gap height={50} />
      <Sections>
        <Footer />
      </Sections>
    </div>
  );
}

export default HomePage;
