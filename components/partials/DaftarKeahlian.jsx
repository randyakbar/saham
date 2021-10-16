import React from 'react'
import Sections from '../Sections'
import Image from 'next/image'

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
            <div className="flex flex-column ">
                <div className="flex-1 flex items-center justify-center">
                    <Image src="/img/squid.png" width="100" height="200" alt="question" />
                </div>
                <ul className="flex-1 text-left list-disc" >
                    { DaftarGakPerlu.map((e,i) => (
                        <li className="align-top my-3" key={`$daftar-{i}`}> 
                            <span className="text-xl text-gray-900 font-light">{e}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Sections>

    )
}

export default DaftarKeahlian
