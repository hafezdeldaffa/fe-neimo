import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import FormEditAnggota from './FormEditAnggota';
import DeleteConfirmation from './DeleteConfirmation';
const DataKeluargaTable = () => {
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false)
  
    return (
        <div className="container">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
                <div className="table-responsive">
                    <table className="table table-borderless table-hover shadow">
                        <thead className="bg-table text-white">
                            <tr>
                                <th scope="col" className=" d-none d-sm-block">No</th>
                                <th scope="col">Nama</th>
                                <th scope="col">Status</th>
                                <th scope="col">aksi</th>
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
                                    <FaIcons.FaEdit style={{color : '2647bd'}} onClick={() => setShow(true)}></FaIcons.FaEdit> Edit
                                    /
                                    <AiIcons.AiOutlineDelete style={{color : '2647bd'}} onClick={() => setShowDelete(true)}></AiIcons.AiOutlineDelete> Hapus</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <FormEditAnggota
            show={show}
            onHide={() => setShow(false)}
            />

            <DeleteConfirmation 
                show={showDelete}
                onHide={() => setShowDelete(false)}
            />
        </div>
    )
}

export default DataKeluargaTable;