import React, { useState } from "react";
import * as FiIcons from "react-icons/fi"
import DetailLaporan from "./DetailLaporan";

const TableLaporanWargaDetail = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="container mt-5">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <div className="table-responsive">
                    <table className="table table-borderless table-hover shadow text-center">
                        <thead className="bg-table text-white">
                            <tr>
                                <th scope="col" className=" d-none d-sm-block">Status</th>
                                <th scope="col">Nama</th>
                                <th scope="col">No Rumah</th>
                                <th scope="col">Tanggal laporan</th>
                                <th scope="col">Lihat Laporan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                        filtered.map((element, index) => {
                           return(
                            <tr className="border-1">
                                <th scope="row" className=" d-none d-sm-block">{index+1}</th>
                                <td>{element.attributes.Country_Region}</td>
                                <td>{element.attributes.Confirmed}</td>
                                <td>{element.attributes.Deaths}</td>
                                <td>{element.attributes.Recovered}</td>
                        </tr>
                           )
                        })
                    } */}
                            <tr className="border-1">
                                <th scope="row" className=" d-none d-sm-block">Kepala Keluarga</th>
                                <td>Agus</td>
                                <td>A5</td>
                                <td>24/12/2021</td>
                                <td><FiIcons.FiZoomIn onClick={() => { setModalOpen(true) }} ></FiIcons.FiZoomIn></td>
                            </tr>
                            <tr className="border-1">
                                <th scope="row" className=" d-none d-sm-block">Istri</th>
                                <td>Ani</td>
                                <td>A6</td>
                                <td>24/12/2021</td>
                                <td><FiIcons.FiZoomIn onClick={() => { setModalOpen(true) }}></FiIcons.FiZoomIn></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <DetailLaporan
                show={modalOpen}
                onHide={() => setModalOpen(false)}
            />
        </div>
    )
}
export default TableLaporanWargaDetail