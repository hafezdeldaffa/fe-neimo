import React, { useContext, useEffect, useState } from "react"
import * as AiIcons from 'react-icons/ai'
import { getAxios, KeluargaContext } from "../context/DataKeluargaContext"
import { getAxiosLaporan, LaporanContext } from "../context/DataLaporanContext"
import DeleteConfirmation from "./DeleteConfirmation"
import Loading from "./Loading"
const TableRiwayatLaporan = () => {
    const [showDelete, setShowDelete] = useState(false)

    const [dataLaporan, setDataLaporan] = useContext(LaporanContext)
    const riwayaLaporan = dataLaporan ? dataLaporan.LaporanKeluarga : undefined
    const [dataKeluarga, setDataKeluarga] = useContext(KeluargaContext);
    const dataAnggota = dataKeluarga ? dataKeluarga.anggotaKeluarga : undefined

    useEffect(async () => {
        const axiosData = await getAxiosLaporan()
        setDataLaporan(axiosData)
    }, [])


    useEffect(async () => {
        const axiosData = await getAxios()
        setDataKeluarga(axiosData)
    }, [])

    if(riwayaLaporan && riwayaLaporan.length && dataAnggota && dataAnggota.length){
    return (
        <div className="container mt-4">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <div className="table-responsive">
                    <table className="table table-borderless table-hover shadow text-center">
                        <thead className="bg-table text-white">
                            <tr>
                                <th scope="col" className=" d-none d-sm-block">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Status</th>
                                <th scope="col">Tanggal Laporan</th>
                                <th scope="col">Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {riwayaLaporan.map((element, index) => {
                                return (
                                    <tr className="border-1" key={index}>
                                        {dataAnggota.map((e, index) => {
                                            return (
                                                element.anggotaId === e._id ?
                                                    <><th scope="row" className=" d-none d-sm-block">{index + 1}</th>
                                                        <td>{e.nama}</td>
                                                        <td>{e.role}</td>
                                                        <td>{element.createdAt.substr(0, 10)}</td>
                                                        <td>
                                                            <AiIcons.AiOutlineDelete style={{ color: '2647bd' }} onClick={() => setShowDelete(true)}></AiIcons.AiOutlineDelete>
                                                        </td>
                                                    </>

                                                    : null
                                            )
                                        })}
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteConfirmation
                show={showDelete}
                onHide={() => setShowDelete(false)}
            />
        </div>
    )
    }else{
        return(
            null
        )
    }
}
export default TableRiwayatLaporan