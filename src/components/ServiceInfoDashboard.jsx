
const ServiceInfoDashboard = () => {
    return (
        <div className="container d-flex justify-content-center mt-4">
            <div className="row">
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                            <div className="card  rounded-circle bg-secondary p-3" style={{width: '70px', height: '70px'}}>
                                <img src="/images/ambulans.png" alt="" />
                            </div>
                            <p className='text-center' style={{marginBottom: '-10px'}}>ambulans</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                            <div className="card  rounded-circle bg-secondary p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/hospital.png" alt="" />
                            </div>
                            <p className='text-center' style={{marginBottom: '-10px'}}>fakses</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                            <div className="card  rounded-circle bg-secondary p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/vaksin.png" alt="" />
                            </div>
                            <p className='text-center' style={{marginBottom: '-10px'}}>vaksin</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                            <div className="card  rounded-circle bg-secondary p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/oksigen.png" alt="" />
                            </div>
                            <p className='text-center' style={{marginBottom: '-10px'}}>oksigen</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                            <div className="card  rounded-circle bg-secondary p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/plasma.png" alt="" />
                            </div>
                            <p className='text-center' style={{marginBottom: '-10px'}}>plasma</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 col-md-2 px-2 mt-3">
                    <div className="card border-0 shadow-lg" style={{width: '7rem'}}>
                        <div className="card-body">
                            <div className="card  rounded-circle bg-secondary p-3 " style={{width: '70px', height: '70px'}}>
                                <img src="/images/phone.png" alt="" />
                            </div>
                            <p className='text-center' style={{marginBottom: '-10px'}}>bantuan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfoDashboard;
