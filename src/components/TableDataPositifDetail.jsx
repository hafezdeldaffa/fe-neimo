const TableDataPositifDetail =() =>{
    return(
        <div className="container">
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
            <div className="table-responsive">
                <table className="table table-borderless table-hover shadow">
                    <thead className="bg-table text-white">
                        <tr>
                            <th scope="col" className=" d-none d-sm-block">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Status Covid</th>
                            <th scope="col">Tanggal</th>
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
                            <td>Positif</td>
                            <td>24/12/2021</td>
                        </tr>
                        <tr className="border-1">
                            <th scope="row" className=" d-none d-sm-block">2</th>
                            <td>Sandi</td>
                            <td>Negatif</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default TableDataPositifDetail