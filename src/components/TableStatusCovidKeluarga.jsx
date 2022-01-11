import { useContext } from "react"
import { KeluargaContext } from "../context/DataKeluargaContext"
import Loading from "./Loading"

const TableStatusCovidKeluarga = () => {
    const [dataKeluarga] = useContext(KeluargaContext)
    const data = dataKeluarga.anggotaKeluarga
    if (data && data.length) {
        return (
            <div className="container">
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <div className="table-responsive">
                        <table className="table table-borderless table-hover shadow text-center">
                            <thead className="bg-table text-white">
                                <tr>
                                    <th scope="col" className=" d-none d-sm-block">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Status Covid</th>
                                    <th scope="col">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((element, index) => {
                                    return (
                                        <tr className="border-1">
                                            <th scope="row" className=" d-none d-sm-block">{index + 1}</th>
                                            <td>{element.nama}</td>
                                            <td>{element.statusCovid}</td>
                                            <td>{element.updatedAt.substr(0, 10)}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <Loading />
         )
    }

}
export default TableStatusCovidKeluarga