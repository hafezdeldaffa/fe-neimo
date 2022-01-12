
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi'
import { useContext, useEffect } from 'react';
import {getAxiosWarga, WargaRTContext } from '../context/WargaRTContext';
import { VaksinKeluargaContext } from '../context/DataVaksinKeluaga';
const TableDataVaksinRT = () => {
    let location = useLocation()

    const [dataWargaRT, setDataWargaRT] = useContext(WargaRTContext)
    const datakeluargaRT = dataWargaRT ?  dataWargaRT.WargaRT : undefined

    useEffect(async () => {
        const axiosData = await getAxiosWarga()
        setDataWargaRT(axiosData)
    }, [])

    // const [dataVaksinKeluarga] = useContext(VaksinKeluargaContext)
    // const dataVaksinRT = dataVaksinKeluarga.vaksinRT
    // console.log("ini")
    // console.log(dataVaksinRT)

    if (datakeluargaRT && datakeluargaRT.length) {
        return (
            <div className="container">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                        <table className="table table-borderless table-hover shadow text-center">
                            <thead className="bg-table text-white">
                                <tr>
                                    <th scope="col" className=" d-none d-sm-block">No</th>
                                    <th scope="col">Kepala Keluarga</th>
                                    <th scope="col">No Rumah</th>
                                    <th scope="col">Jumlah Tervasinasi</th>
                                    <th scope="col">Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {datakeluargaRT.map((element, index) => {
                                    return (
                                        <tr className="border-1" key={index}>
                                            <th scope="row" className=" d-none d-sm-block">{index+1}</th>
                                            <td>{element.namaKepalaKeluarga}</td>
                                            <td>{element.nomorRumah}</td>
                                            {/* {vaksinn =  dataVaksinRT.filter(e => e.keluargaId === element._id)} */}
                                            <td>2</td>
                                            <td><Link to={`${location.pathname}/detail?id=${element._id}`}><FiIcons.FiZoomIn></FiIcons.FiZoomIn></Link></td>
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
       return(
        <div className="container">
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <div className="table-responsive">
                <table className="table table-borderless table-hover shadow text-center">
                    <thead className="bg-table text-white">
                        <tr>
                            <th scope="col" className=" d-none d-sm-block">No</th>
                            <th scope="col">Kepala Keluarga</th>
                            <th scope="col">No Rumah</th>
                            <th scope="col">Jumlah Tervasinasi</th>
                            <th scope="col">Detail</th>
                        </tr>
                    </thead>
                </table>
                <p className='text-center'>data masih kosong</p>
            </div>
        </div>
    </div>
       )
    }
}
export default TableDataVaksinRT