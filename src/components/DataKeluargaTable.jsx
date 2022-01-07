import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
const DataKeluargaTable = () => {
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
                                <td><FaIcons.FaEdit style={{color : '2647bd'}}></FaIcons.FaEdit> Edit / <AiIcons.AiOutlineDelete style={{color : '2647bd'}}></AiIcons.AiOutlineDelete> Hapus</td>
                            </tr>
                            <tr className="border-1">
                                <th scope="row" className=" d-none d-sm-block">2</th>
                                <td>Ani</td>
                                <td>Istri</td>
                                <td> <FaIcons.FaEdit style={{color : '2647bd'}}></FaIcons.FaEdit> Edit / <AiIcons.AiOutlineDelete style={{color : '2647bd'}}></AiIcons.AiOutlineDelete> Hapus</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataKeluargaTable;