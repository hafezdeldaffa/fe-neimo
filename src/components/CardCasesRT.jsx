import { useContext, useEffect } from "react";
import { getAxios, KeluargaContext } from "../context/DataKeluargaContext";
import { DataPositifContext, getAxiosPositif } from "../context/DataPositifContext";
import { getAxiosVaksin, VaksinKeluargaContext } from "../context/DataVaksinKeluaga";

const CardCaseRT = () => {
    const [dataKeluarga, setDataKeluarga] = useContext(KeluargaContext)
    const [dataVaksinKeluarga, setdataVaksinKeluarga] = useContext(VaksinKeluargaContext)
    const [dataPositif, setDataPositif] = useContext(DataPositifContext)
    const dataRT = dataKeluarga ? dataKeluarga.anggotaRT : undefined
    const dataVaksinRT = dataVaksinKeluarga ? dataVaksinKeluarga.vaksinRT : undefined
    const dataPositifRT = dataPositif ? dataPositif.dataRT : undefined

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxios()
            setDataKeluarga(axiosData)
        }
        getData()
    }, [setDataKeluarga])

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxiosVaksin()
            setdataVaksinKeluarga(axiosData)
        }
        getData()
    }, [setdataVaksinKeluarga])


    useEffect( () => {
        async function getData() {
        const axiosData = await getAxiosPositif()
        setDataPositif(axiosData)
        }
        getData()
    }, [setDataPositif])


    const kepalaKeluarga = dataRT && dataRT.length ? dataRT.filter(e => e.role === "Kepala Keluarga") : undefined
    const ibu = dataRT && dataRT.length ? dataRT.filter(e => e.role === "Ibu") : undefined
    const anak = dataRT && dataRT.length ? dataRT.filter(e => e.role === "Anak") : undefined

    const positif = dataPositifRT && dataPositifRT.length ? dataPositifRT : undefined

    const dosis1 = dataVaksinRT && dataVaksinRT.length ? dataVaksinRT.filter(e => e.dosis1) : undefined
    const dosis2 = dataVaksinRT && dataVaksinRT.length ? dataVaksinRT.filter(e => e.dosis2) : undefined
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
                                    <p className="card-text">{dataRT && dataRT.length ? kepalaKeluarga.length : 0} Kepala Keluarga</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{dataRT && dataRT.length ? ibu.length : 0} Istri</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{dataRT && dataRT.length ? anak.length : 0} Anak</p>
                                </div>
                                <div className="col">
                                    <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>{dataRT && dataRT.length ? dataRT.length : 0}</h1>
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
                                    <p className="card-text">{dataPositifRT && dataPositifRT.length && dataRT && dataRT.length ? dataRT.length - dataPositifRT.length : 0} Berstatus Negatif</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{dataPositifRT && dataPositifRT.length ? positif.length : 0} Berstatus Positif</p>
                                </div>
                                <div className="col">
                                    <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>{dataPositifRT && dataPositifRT.length ? positif.length : 0}</h1>
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
                                    <p className="card-text">{dataVaksinRT && dataVaksinRT.length ? dosis1.length : 0} Orang Dosis 1</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{dataVaksinRT && dataVaksinRT.length ? dosis2.length : 0} Orang Dosis 2</p>
                                    <p className="card-text" style={{ marginTop: '-20px' }}>{dataVaksinRT && dataVaksinRT.length && dataRT && dataRT.length ? dataRT.length - dataVaksinRT.length : 0} Orang Belum Vaksin</p>
                                </div>
                                <div className="col">
                                    <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>{dataVaksinRT && dataVaksinRT.length ? dosis1.length : 0}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // }else{
    //     return(
    //         <div className="container mt-3">
    //         <div className="row">
    //             <div className="col-lg-4 mt-md-0 mt-3">
    //                 <div className="card border-0 shadow-lg" >
    //                     <div className="card-body p-4">
    //                         <div className="row">
    //                             <div className="col-sm-2">
    //                             <img src="/images/warga_icon.png" alt="" />
    //                             </div>
    //                             <div className="col-sm-10">
    //                             <h5 className="text-start mt-2">Jumlah Warga</h5>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col">
    //                                 <p className="card-text">0 Kepala Keluarga</p>
    //                                 <p className="card-text" style={{ marginTop: '-20px' }}>0 Istri</p>
    //                                 <p className="card-text" style={{ marginTop: '-20px' }}>0 Anak</p>
    //                             </div>
    //                             <div className="col">
    //                                 <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>0</h1>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-lg-4 mt-md-0 mt-3">
    //                 <div className="card border-0 shadow-lg" >
    //                     <div className="card-body p-4">
    //                     <div className="row">
    //                             <div className="col-sm-2">
    //                             <img src="/images/covid_icon.png" alt="" />
    //                             </div>
    //                             <div className="col-sm-10">
    //                             <h5 className="text-start mt-2">Jumlah Terpapar Covid</h5>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col">
    //                                 <p className="card-text">0 Berstatus Negatif</p>
    //                                 <p className="card-text" style={{ marginTop: '-20px' }}>0 Berstatus Positif</p>
    //                             </div>
    //                             <div className="col">
    //                                 <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>0</h1>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-lg-4 mt-md-0 mt-3">
    //                 <div className="card border-0 shadow-lg" >
    //                 <div className="card-body p-4">
    //                     <div className="row">
    //                             <div className="col-sm-2">
    //                             <img src="/images/vaksin_icon.png" alt="" />
    //                             </div>
    //                             <div className="col-sm-10">
    //                             <h5 className="text-start mt-2">Jumlah Tervaksinasi</h5>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col">
    //                                 <p className="card-text">0 Orang Dosis 1</p>
    //                                 <p className="card-text" style={{ marginTop: '-20px' }}>0 Orang Dosis 1</p>
    //                                 <p className="card-text" style={{ marginTop: '-20px' }}>0 Orang Belum Vaksin</p>
    //                             </div>
    //                             <div className="col">
    //                                 <h1 className="text-end" style={{ fontSize: '70px', marginTop: '-20px' }}>0</h1>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     )
    // }
};

export default CardCaseRT;
