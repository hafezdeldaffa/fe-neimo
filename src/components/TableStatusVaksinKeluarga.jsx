import { useContext, useEffect } from "react"
import { getAxiosVaksin, VaksinKeluargaContext } from "../context/DataVaksinKeluaga"

const TableStatusVaksinKeluarga = () => {
    const [dataVaksinKeluarga, setdataVaksinKeluarga] = useContext(VaksinKeluargaContext)
    const data = dataVaksinKeluarga ? dataVaksinKeluarga.vaksinKeluarga : undefined

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxiosVaksin()
            setdataVaksinKeluarga(axiosData)
        }
        getData()

    }, [setdataVaksinKeluarga])


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
                                        <tr className="border-1" key={index}>
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
    } else {
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
                        </table>
                        <p className="text-center">data masih kosong</p>
                    </div>
                </div>
            </div>
        )
    }

}
export default TableStatusVaksinKeluarga