
const ServiceInfoDashboard = () => {
    return (
        <div className="container d-flex justify-content-center mt-4">
            <div className="row">
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                        <a href="https://www.wargabantuwarga.com/provinces?kebutuhan=Ambulans" rel="noopener noreferrer" target="_blank">
                            <div className="card  rounded-circle bg-serviceCard p-3" style={{width: '70px', height: '70px'}}>
                                <img src="/images/ambulans.png" alt="" />
                            </div>
                            </a>
                            <p className='text-center' style={{marginBottom: '-10px'}}>Ambulans</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                             <a href="https://yankes.kemkes.go.id/app/siranap/" rel="noopener noreferrer" target="_blank">
                            <div className="card  rounded-circle bg-serviceCard p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/hospital.png" alt="" />
                            </div>
                            </a>
                            <p className='text-center' style={{marginBottom: '-10px'}}>Fakses</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                             <a href="https://www.pedulilindungi.id/" rel="noopener noreferrer" target="_blank">
                            <div className="card  rounded-circle bg-serviceCard p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/vaksin.png" alt="" />
                            </div>
                            </a>
                            <p className='text-center' style={{marginBottom: '-10px'}}>Vaksin</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                             <a href="https://www.wargabantuwarga.com/provinces?kebutuhan=Oksigen" rel="noopener noreferrer" target="_blank">
                            <div className="card  rounded-circle bg-serviceCard p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/oksigen.png" alt="" />
                            </div>
                            </a>
                            <p className='text-center' style={{marginBottom: '-10px'}}>Oksigen</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body ">
                        <a href="https://www.wargabantuwarga.com/provinces?kebutuhan=Donor%20plasma" rel="noopener noreferrer" target="_blank">
                            <div className="card  rounded-circle bg-serviceCard p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/plasma.png" alt="" />
                            </div>
                            </a>
                            <p className='text-center' style={{marginBottom: '-10px'}}>Plasma</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                             <a href="https://www.wargabantuwarga.com/kontak-darurat" rel="noopener noreferrer" target="_blank">
                            <div className="card  rounded-circle bg-serviceCard p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/phone.png" alt="" />
                            </div>
                            </a>
                            <p className='text-center' style={{marginBottom: '-10px'}}>Bantuan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfoDashboard;
