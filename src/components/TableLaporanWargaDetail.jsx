import React, { useContext, useEffect, useState } from "react";
import * as FiIcons from "react-icons/fi"
import { useLocation } from "react-router-dom";
import { getAxios, KeluargaContext } from "../context/DataKeluargaContext";
import { getAxiosLaporan, LaporanContext } from "../context/DataLaporanContext";
import DetailLaporan from "./DetailLaporan";
import Loading from "./Loading";

const TableLaporanWargaDetail = () => {
    const [modalOpen, setModalOpen] = useState(false);

    let location = useLocation();

    const loc = location.search.split('?');
    const qs = require('qs');
    const obj = qs.parse(loc[1]);

    const [dataLaporan, setDataLaporan] = useContext(LaporanContext)
    const dataLaporanRT = dataLaporan ? dataLaporan.LaporanRT : undefined
    const [dataKeluarga, setDataKeluarga] = useContext(KeluargaContext);
    const dataAnggota = dataKeluarga ? dataKeluarga.anggotaRT : undefined

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
        const detailLaporan = dataLaporanRT.filter(e => e.keluargaId === obj.id)
        return (
            <div className="container mt-5">
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
                                            {dataAnggota.map((e, index) => {
                                                return (
                                                    element.anggotaId === e._id ?
                                                        <>
                                                            <th scope="row" className=" d-none d-sm-block">{index + 1}</th>
                                                            <td>{e.nama}</td>
                                                            <td>{e.role}</td>
                                                            <td>{element.createdAt.substr(0, 10)}</td>
                                                            <td><FiIcons.FiZoomIn onClick={() => { setModalOpen(true) }} ></FiIcons.FiZoomIn></td>
                                                            <DetailLaporan
                                                                show={modalOpen}
                                                                dataLaporan={element}
                                                                dataAnggota={e}
                                                                onHide={() => setModalOpen(false)}
                                                            />
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

            </div>
        )
    } else {
        return (
            <Loading />
        )
    }
}
export default TableLaporanWargaDetail