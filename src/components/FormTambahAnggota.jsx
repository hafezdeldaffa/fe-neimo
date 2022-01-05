
const FormTambahAnggota = () => {
    return (
        <>
            <button type="button" className="btn addAnggota-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: '130px' }}>
                Tambah Data
            </button>

            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg ">
                    <form>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Tambah Data</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="card shadow border-0 rounded-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-1">
                                                <img src="/images/account.png" alt="" style={{ width: '25px' }} />
                                            </div>
                                            <div className="col-11">
                                                <h5>Data Diri</h5>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control mt-2" id="name" aria-describedby="name" placeholder="Nama Lengkap" />
                                        <select className="form-select mt-2" aria-label="Default select example">
                                            <option >Pilih Role</option>
                                            <option value="Kepala Keluarga">Kepala Keluarga</option>
                                            <option value="Istri">Istri</option>
                                            <option value="Anak">Anak</option>
                                            <option value="Lain-lain">Lain-Lain</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <div className="card shadow border-0 rounded-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="/images/vaksin_icon.png" alt="" style={{ width: '25px' }} />
                                                    </div>
                                                    <div className="col-11">
                                                        <h5>Data vaksin</h5>
                                                    </div>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input className="form-check-input" type="checkbox" value="dosis1" id="dosis1" />
                                                    <label className="form-check-label" htmlFor="dosis1">
                                                        Dosis 1
                                                    </label>
                                                    <input className="ms-2" type="date" />
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="dosis2" id="dosis2" />
                                                    <label className="form-check-label" htmlFor="dosis2">
                                                        Dosis 2
                                                    </label>
                                                    <input className="ms-2" type="date"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow border-0 rounded-3">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-1">
                                                        <img src="/images/notification.png" alt="" style={{ width: '25px' }} />
                                                    </div>
                                                    <div className="col-11">
                                                        <h5>Data Positif</h5>
                                                    </div>
                                                </div>
                                                <div className="form-check mt-2">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="positif" />
                                                    <label className="form-check-label" htmlFor="positif">
                                                        Positif
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="negatif" />
                                                    <label className="form-check-label" htmlFor="negatif">
                                                        Negatif
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn addAnggota2-btn" style={{ width: '100%' }}>Tambah Data</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormTambahAnggota;