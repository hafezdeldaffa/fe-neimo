import * as GrIcons from 'react-icons/gr';
import React, { useState } from 'react';
import FormTambahLaporan from './FormTambahLaporan';
const TableTambahLaporan  = () =>{
    const [modalOpen, setModalOpen] = useState(false);
    return(
        <div className="container mt-5">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <div className="table-responsive">
                    <table className="table table-borderless table-hover shadow text-center">
                        <thead className="bg-table text-white">
                            <tr>
                                <th scope="col" className=" d-none d-sm-block">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Status</th>
                                <th scope="col">Tambah Laporan</th>
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
                                <th scope="row" className=" d-none d-sm-block">1</th>
                                <td>Agus</td>
                                <td>Kepala Keluarga</td>
                                <td>
                                    <GrIcons.GrAddCircle style={{color : '2647bd'}} onClick={ () => { setModalOpen(true)}}></GrIcons.GrAddCircle> Tambah Laporan
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <FormTambahLaporan
             show={modalOpen}
             onHide={() => setModalOpen(false)}
            />
        </div>
    )
}

export default TableTambahLaporan