import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAxiosVaksin, VaksinKeluargaContext } from '../context/DataVaksinKeluaga';
import Loading from './Loading';

const TableDataVaksinDetail = () => {
    let location = useLocation();

    const queryString = require('query-string')
    const value = queryString.parse(location.search);

    const [dataVaksinKeluarga, setdataVaksinKeluarga] = useContext(VaksinKeluargaContext)
    const dataVaksinRT = dataVaksinKeluarga ? dataVaksinKeluarga.vaksinRT : undefined
    console.log(dataVaksinKeluarga)

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxiosVaksin()
            setdataVaksinKeluarga(axiosData)
        }
        getData()

    }, [setdataVaksinKeluarga])

    const categories = ['Nama', 'Dosis 1', 'Tanggal Dosis 1', 'Dosis 2', 'Tanggal Dosis 2'];

    const params = {
        category: value.category,
    };

    const filter = {
        category: params.category || categories[1],
    };

    console.log(filter)

    if (dataVaksinRT && dataVaksinRT.length) {
        const detailData = dataVaksinRT.filter(e => e.keluargaId === value.id)

        const result = detailData.length === 1 ? detailData :
            detailData.sort((a, b) => filter.category === "Nama" ? (a.nama > b.nama ? 1 : -1)
                : filter.category === "Dosis 1" ? (a.dosis1 > b.dosis1 ? 1 : -1)
                : filter.category === "Dosis 2" ? (a.dosis2 > b.dosis2 ? 1 : -1)
                : filter.category === "Tanggal Dosis 1" ? (a.tanggalDosis1 > b.tanggalDosis1 ? 1 : -1)
                : filter.category === "Tanggal Dosis 2" ? (a.tanggalDosis2 > b.tanggalDosis2 ? 1 : -1)
                    : (a.updatedAt > b.updatedAt ? -1 : 1))
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
                                {detailData.map((element, index) => {
                                    return (
                                        <tr className="border-1" key={index}>
                                            <th scope="row" className=" d-none d-sm-block">{index + 1}</th>
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
            <Loading />
        )
    }
}
export default TableDataVaksinDetail