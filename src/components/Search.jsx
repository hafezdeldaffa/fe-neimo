import { useState } from "react";

const Search = ({ ...data }) => {
    const [search, setSearch] = useState('');
    const found = data.ProvCases.find(({ provinsi }) => {
        const result = provinsi.toLowerCase().indexOf(search.toLowerCase());

        if (result >= 0) {
            return true
        } else {
            return false
        }
    })
    return (
        <>
            <div className="container  my-3">
                <div className="search-box shadow">
                    <img className="btn-icon search-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="/images/search.png" alt="search" />
                    <input className="search-input mx-3" type="text" name="" placeholder="Pencarian" onChange={(c) => setSearch(c.target.value)} />
                </div>
            </div>

            <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-coral" id="staticBackdropLabel">Hasil Pencarian</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                found === undefined ? <h1>Not Found</h1> :
                                    <>
                                        <h1 className="text-center text-capitalize mb-4">Provinsi {found.provinsi.toLowerCase()}</h1>

                                        <div id="card" className="row g-2">
                                            <div className="col-sm-6 col-12">
                                                <div className="card w-100 border-primary bg-search-card bg-gradient">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-capitalize text-white">Positif</h5>
                                                        <h2 className="card-text fw-bold text-white">{found.kasus}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-12">
                                                <div className="card w-100 border-primary bg-search-card bg-gradient">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-capitalize text-white">Sembuh</h5>
                                                        <h2 className="card-text fw-bold text-white">{found.sembuh}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-12">
                                                <div className="card w-100 border-primary bg-search-card bg-gradient">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-capitalize text-white">Meninggal</h5>
                                                        <h2 className="card-text fw-bold text-white">{found.meninggal}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-12">
                                                <div className="card w-100 border-primary bg-search-card bg-gradient">
                                                    <div className="card-body">
                                                        <h5 className="card-title text-capitalize text-white">Dirawat</h5>
                                                        <h2 className="card-text fw-bold text-white">{found.dirawat}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Search;