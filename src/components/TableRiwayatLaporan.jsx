import React, {useState} from "react"
import * as AiIcons from 'react-icons/ai'
import DeleteConfirmation from "./DeleteConfirmation"
const TableRiwayatLaporan = () =>{
    const [showDelete, setShowDelete] = useState(false)
    return(
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
                                <td>24/12/2021</td>
                                <td>
                                <AiIcons.AiOutlineDelete style={{color : '2647bd'}} onClick={() => setShowDelete(true)}></AiIcons.AiOutlineDelete>
                                </td>
                            </tr>
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
}
export default TableRiwayatLaporan