import React, { useState } from "react";
import DataKeluargaTable from "./DataKeluargaTable";
import FormTambahAnggota from "./FormTambahAnggota";
import TableStatusCovidKeluarga from "./TableStatusCovidKeluarga";
import TableStatusVaksinKeluarga from "./TableStatusVaksinKeluarga";

const DataKeluargaButtons = () => {
    const [button, setButton] = useState('button1')
    return (
        <React.Fragment>
            <div className="container mt-4">

                <div className="row">
                    <div className="col d-flex">
                        <div className="row">
                            <div className="col-md-4 col-12 justify-content-start">
                                <button
                                    className={button === 'button1' ? 'btn btn-dark mt-2 mt-md-0' : 'btn btn-outline-dark mt-md-0 mt-2 '}
                                    role="button" style={{ width: '130px' }}
                                    onClick={() => { setButton('button1'); }}
                                >
                                    Data Anggota
                                </button>
                                {button === 'button1' ? <hr className="bg-dark d-sm-block d-none" style={{ height: '5px', width: '130px' }}></hr> : null}
                            </div>
                            <div className="col-md-4 col-12 justify-content-start">
                                <button
                                    className={button === 'button2' ? 'btn btn-dark mt-2 mt-md-0' : 'btn btn-outline-dark mt-md-0 mt-2 '}
                                    role="button" style={{ width: '130px' }}
                                    onClick={() => { setButton('button2'); }}
                                >
                                    Status Covid
                                </button>
                                {button === 'button2' ? <hr className="bg-dark d-sm-block d-none" style={{ height: '5px', width: '130px' }}></hr> : null}
                            </div>
                            <div className="col-md-4 col-12 justify-content-start">
                                <button
                                    className={button === 'button3' ? 'btn btn-dark mt-2 mt-md-0' : 'btn btn-outline-dark mt-md-0 mt-2 '}
                                    role="button" style={{ width: '130px' }}
                                    onClick={() => { setButton('button3'); }}
                                >
                                    Status Vaksin
                                </button>
                                {button === 'button3' ? <hr className="bg-dark d-sm-block d-none" style={{ height: '5px', width: '130px' }}></hr> : null}
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end align-items-start me-5">
                        <FormTambahAnggota />
                    </div>
                </div>

            </div>


            {button === 'button1' ? <DataKeluargaTable /> : button === 'button2' ? <TableStatusCovidKeluarga /> : <TableStatusVaksinKeluarga />}
        </React.Fragment>
    )
}

export default DataKeluargaButtons