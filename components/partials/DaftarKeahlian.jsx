import React from 'react'
import Sections from '../Sections'
import Image from 'next/image'
import AboutImage from "../../public/img/squid.png"
import ArrowIcon from "../../public/icon/arrow-right-circle.svg"

const DaftarGakPerlu = [
    'Gak perlu cari pelanggan',
    'Gak perlu jago teknologi',
    'Gak perlu relasi',
    'Gak perlu keluar rumah',
    'Cocok untuk semua kalangan (pelajar, Mahasiswa, Karyawan, Ibu Rumah tangga atau apapun profesimu)',
    'Sudah ada sertifikasi halal dari mui (Majelis Ulama Indonesia)',
]


function DaftarKeahlian() {
    return (
        <Sections isFullscreen={true}>
            <h1 className="text-sm hidden text-red-800 font-bold">KELAS INI COCOK UNTUK ANDA YANG: </h1>
            <div className="flex flex-row ">
                <div className="hidden w-full items-center justify-center md:flex md:flex-1">
                    {AboutImage && (
                        <Image src={AboutImage} width="100" height="200" alt="question" />
                    )}
                </div>
                {ArrowIcon && (
                    <ol className="p-5 m-0 list-decimal text-left md:text-left md:flex-1" >
                        {DaftarGakPerlu.map((e, i) => (
                            <li className="align-top my-2 md:my-3" key={`$daftar-{i}`}>
                                <span className="ml-1 text-base text-gray-900 font-normal leading-normal md:text-xl">{e}</span>
                            </li>
                        ))}
                    </ol>
                )}

            </div>
        </Sections>

    )
}

export default DaftarKeahlian
