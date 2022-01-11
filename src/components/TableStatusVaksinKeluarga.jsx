import { useContext } from "react"
import { VaksinKeluargaContext } from "../context/DataVaksinKeluaga"
import Loading from "./Loading"

const TableStatusVaksinKeluarga = () => {
    const [dataVaksinKeluarga] = useContext(VaksinKeluargaContext)
    const data = dataVaksinKeluarga.vaksinKeluarga

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
                                    <th scope="col">Dosis 1</th>
                                    <th scope="col">Tanggal</th>
                                    <th scope="col">Dosis 2</th>
                                    <th scope="col">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((element, index) => {
                                    return (
                                        <tr className="border-1">
                                            <th scope="row" className=" d-none d-sm-block">1</th>
                                            <td>{element.nama}</td>
                                            <td>{element.dosis1}</td>
                                            <td>{element.tanggalDosis1}</td>
                                            <td>{element.dosis2}</td>
                                            <td>{element.tanggalDosis2}</td>
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
export default TableStatusVaksinKeluarga