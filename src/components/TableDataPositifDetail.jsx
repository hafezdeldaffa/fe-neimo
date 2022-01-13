import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DataPositifContext,
  getAxiosPositif,
} from '../context/DataPositifContext';
import Loading from './Loading';

const TableDataPositifDetail = () => {
  let location = useLocation();

    const queryString = require('query-string')
    const value = queryString.parse(location.search);

  const [dataPositif, setDataPositif] = useContext(DataPositifContext);
  const dataPositifRT = dataPositif ? dataPositif.dataRT : undefined;

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxiosPositif()
            setDataPositif(axiosData)
        }
        getData()
    }, [setDataPositif])

    const categories = ['Nama', 'Status', 'Tanggal'];

    const params = {
        category: value.category,
    };

    const filter = {
        category: params.category || categories[1],
    };

    console.log(filter)


    if (dataPositifRT && dataPositifRT.length) {
        const detailData = dataPositifRT.filter(e => e.keluargaId === value.id)

        const result = detailData.length === 1 ? detailData :
            detailData.sort((a, b) => filter.category === "Nama" ? (a.nama > b.nama ? 1 : -1)
                : filter.category === "Status" ? (a.statusCovid > b.statusCovid ? -1 : 1)
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
                                    <th scope="col">Status Covid</th>
                                    <th scope="col">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detailData.map((element, index) => {
                                    return (
                                        <tr className="border-1" key={index}>
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
    } else {
        return (
            <Loading />
        )
    }
};

export default TableDataPositifDetail;
