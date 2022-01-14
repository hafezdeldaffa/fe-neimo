import React, { useContext, useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi"
import { getAxios, KeluargaContext } from "../context/DataKeluargaContext";
import { getAxiosLaporan, LaporanContext } from "../context/DataLaporanContext";
import DetailLaporan from "./DetailLaporan";
import Loading from "./Loading";

const TableLaporanWargaTerbaru = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const [dataLaporan, setDataLaporan] = useContext(LaporanContext)
    const dataLaporanRT = dataLaporan ? dataLaporan.LaporanRT : undefined
    const [dataKeluarga, setDataKeluarga] = useContext(KeluargaContext);
    const dataAnggota = dataKeluarga ? dataKeluarga.anggotaRT : undefined

    const [laporanById, setLaporanById] = useState([])
    const [anggotaById, setAnggotaById] = useState([])

    const addHandler = async (data1, data2) => {
        setModalOpen(true);
        setLaporanById(data1)
        setAnggotaById(data2);
    };

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxiosLaporan()
            setDataLaporan(axiosData)
        }
        getData()

    }, [setDataLaporan])

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxios()
            setDataKeluarga(axiosData)
        }
        getData()

    }, [setDataKeluarga])

    if (dataLaporanRT && dataLaporanRT.length && dataAnggota && dataAnggota.length) {
        const detailLaporan = dataLaporanRT.sort((a, b) => a.createdAt > b.createdAt ? -1 : 1)
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
                                    <th scope="col">Tanggal laporan</th>
                                    <th scope="col">Lihat Laporan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detailLaporan.map((element, index) => {
                                    return (
                                        <tr className="border-1" key={index}>
                                            {dataAnggota.map((e, i) => {
                                                return (
                                                    element.anggotaId === e._id ?
                                                        <>
                                                            <th scope="row" className=" d-none d-sm-block">{index + 1}</th>
                                                            <td>{e.nama}</td>
                                                            <td>{e.role}</td>
                                                            <td>{element.createdAt.substr(0, 10)}</td>
                                                            <td><FiIcons.FiZoomIn onClick={() => { addHandler(element, e) }} ></FiIcons.FiZoomIn></td>
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
                <DetailLaporan
                    show={modalOpen}
                    dataLaporan={laporanById}
                    dataAnggota={anggotaById}
                    onHide={() => setModalOpen(false)}
                />
            </div>
        )
    } else {
        return (
            dataLaporanRT === undefined && dataAnggota === undefined ? <Loading /> :
                <p className="ms-4">Belum Ada Laporan Masuk</p>
        )
    }
}
export default TableLaporanWargaTerbaru