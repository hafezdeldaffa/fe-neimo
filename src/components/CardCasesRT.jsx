import { useContext } from "react";
import { KeluargaContext } from "../context/DataKeluargaContext";
import Loading from "./Loading";

const CardCaseRT = () => {
    const [dataKeluarga] = useContext(KeluargaContext)
    console.log(dataKeluarga)
    const dataRT = dataKeluarga.anggotaRT
    
    if(dataRT && dataRT.length){
        const kepalaKeluarga = dataRT.filter(e => e.role === "Kepala Keluarga")
        const ibu = dataRT.filter(e => e.role === "Ibu")
        const anak = dataRT.filter(e => e.role === "Anak")
        const negatif = dataRT.filter(e => e.statusCovid === "Negatif")
        const positif = dataRT.filter(e => e.statusCovid === "Positif")
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-4 mt-md-0 mt-3">
                    <div className="card border-0 shadow-lg" >
                        <div className="card-body p-4">
                            <div className="row">
                                <div className="col-sm-2">
                                <img src="/images/warga_icon.png" alt="" />
                                </div>
                                <div className="col-sm-10">
                                <h5 className="text-start mt-2">Jumlah Warga</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="card-text">{kepalaKeluarga.length} Kepala Keluarga</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{ibu.length} Istri</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{anak.length} Anak</p>
                                </div>
                                <div className="col">
                                    <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>{dataRT.length}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-md-0 mt-3">
                    <div className="card border-0 shadow-lg" >
                        <div className="card-body p-4">
                        <div className="row">
                                <div className="col-sm-2">
                                <img src="/images/covid_icon.png" alt="" />
                                </div>
                                <div className="col-sm-10">
                                <h5 className="text-start mt-2">Jumlah Terpapar Covid</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="card-text">{negatif.length} Berstatus Negatif</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{positif.length} Berstatus Positif</p>
                                </div>
                                <div className="col">
                                    <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>{positif.length}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-md-0 mt-3">
                    <div className="card border-0 shadow-lg" >
                    <div className="card-body p-4">
                        <div className="row">
                                <div className="col-sm-2">
                                <img src="/images/vaksin_icon.png" alt="" />
                                </div>
                                <div className="col-sm-10">
                                <h5 className="text-start mt-2">Jumlah Tervaksinasi</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="card-text">10 Kepala Keluarga</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>10 Istri</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>20 Anak</p>
                                </div>
                                <div className="col">
                                    <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>25</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }else{
        return(
            <Loading />
        )
    }
};

export default CardCaseRT;
