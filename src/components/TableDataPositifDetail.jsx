import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DataPositifContext, getAxiosPositif } from '../context/DataPositifContext';
import Loading from './Loading';

const TableDataPositifDetail = () => {
    let location = useLocation();

    const loc = location.search.split('?');
    const qs = require('qs');
    const obj = qs.parse(loc[1]);

    const [dataPositif, setDataPositif] = useContext(DataPositifContext)
    const dataPositifRT = dataPositif ? dataPositif.dataRT : undefined

    useEffect(() => {
        async function getData(){
        const axiosData = await getAxiosPositif()
        setDataPositif(axiosData)
        }
        getData()
    }, [setDataPositif])


    if (dataPositifRT && dataPositifRT.length) {
        const detailData = dataPositifRT.filter(e => e.keluargaId === obj.id)
        console.log(detailData)
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
                                {detailData.map((element, index) => {
                                    return (
                                        <tr className="border-1" key={index}>
                                            <th scope="row" className=" d-none d-sm-block">1{index+1}</th>
                                            <td>{element.nama}</td>
                                            <td>{element.statusCovid}</td>
                                            <td>{element.updatedAt.substr(0,10)}</td>
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

export default TableDataPositifDetail