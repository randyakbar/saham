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
        <Sections>
            <div className="flex flex-row ">
                <div className="hidden w-full items-center justify-center md:flex md:flex-1">
                    {AboutImage && (
                        <Image src={AboutImage} width="100" height="200" alt="question" />
                    )}
                </div>
                {ArrowIcon && (
                    <ul className="p-5 m-0 md:list-none text-center md:text-left md:flex-1" >
                        {DaftarGakPerlu.map((e, i) => (
                            <li className="align-top md:my-3" key={`$daftar-{i}`}>
                                <Image src={ArrowIcon} width={10} height={10} alt="arrow icon" className="md:hidden" />
                                <span className="ml-2 text-base text-gray-900 font-light md:text-xl">{e}</span>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </Sections>

    )
}

export default DaftarKeahlian
