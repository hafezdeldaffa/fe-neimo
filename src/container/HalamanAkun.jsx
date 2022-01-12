import React, { useContext, useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import * as mdIcons from "react-icons/md"
import { getAxiosPofile, ProfileContext } from "../context/ProfileContext";
import Loading from "../components/Loading";
const HalamanAkun = () => {
    const [card, setCard] = useState('keluarga');
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const [profile, setProfile] = useContext(ProfileContext)
    const akunUser = profile ? profile.kepalaKeluarga : undefined
    const RT = profile ? profile.RT : undefined

    useEffect(() => {
        async function getData() {
            const axiosData = await getAxiosPofile()
            setProfile(axiosData)
        }
        getData()

    }, [setProfile])

    const role = sessionStorage.getItem('role')

    function handleLogout() {
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('role')
        window.location.href = '/';
    }

    if (akunUser && RT) {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container mt-5" style={{ width: '70%' }}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card shadow" style={{ width: '100%' }}>
                                <div className="card-body">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-4">
                                            <img src='/images/Avatar.png' alt="" style={{ width: '90px' }} />
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title">{akunUser.namaKepalaKeluarga}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                role === "RT" ?
                                    <div className="card shadow mt-3" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h6 className="fw-bold text-center">Token RT untuk Warga</h6>
                                            <h6 className="text-center"
                                                value={RT._id}
                                            >
                                                {RT._id} <mdIcons.MdContentCopy></mdIcons.MdContentCopy>
                                            </h6>

                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <div className="card shadow mt-3" style={{ width: '100%' }}>
                                <div className="card-body">
                                    <button style={{border: 'none', backgroundColor: 'white'}}
                                        onClick={() => {
                                            setCard('keluarga');
                                        }}
                                        onPointerOver={() => setHover1(true)}
                                        onPointerOut={() => setHover1(false)}
                                        
                                    >
                                        <h5 className="card-title" style={{ cursor: 'default', color: hover1 ? '#2647BD' : null }}>
                                            <mdIcons.MdManageAccounts> </mdIcons.MdManageAccounts>
                                            <span>Profile Keluarga</span>
                                        </h5>
                                    </button>
                                    <hr />
                                    <button style={{border: 'none', backgroundColor: 'white'}}
                                        onClick={() => {
                                            setCard('rt')
                                        }}
                                        onPointerOver={() => setHover2(true)}
                                        onPointerOut={() => setHover2(false)}
                                    >
                                        <h5 className="card-title" style={{ cursor: 'default', color: hover2 ? '#2647BD' : null }}>
                                            <mdIcons.MdGroups></mdIcons.MdGroups>
                                            <span>Profile RT</span>
                                        </h5>
                                    </button>
                                    <hr />
                                    <button style={{border: 'none', backgroundColor: 'white'}}
                                        onClick={handleLogout}
                                        onPointerOver={() => setHover3(true)}
                                        onPointerOut={() => setHover3(false)}
                                    >
                                        <h5 className="card-title" style={{ cursor: 'default', color: hover3 ? '#2647BD' : null }}><mdIcons.MdLogout></mdIcons.MdLogout><span>Keluar</span></h5>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {
                                card === 'keluarga' ?
                                    <div className="card mt-3 mt-md-0" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">PROFILE KELUARGA</h5>
                                            <hr />
                                            <h6>Nama Kepala Keluarga</h6>
                                            <p className="text-secondary">{akunUser.namaKepalaKeluarga}</p>
                                            <h6>Alamat</h6>
                                            <p className="text-secondary">{akunUser.alamat}</p>
                                            <h6>Nomor Rumah</h6>
                                            <p className="text-secondary">{akunUser.nomorRumah}</p>
                                            <h6>Provinsi</h6>
                                            <p className="text-secondary">{akunUser.provinsi}</p>
                                            <h6>Kode Pos</h6>
                                            <p className="text-secondary">{akunUser.kodePos}</p>
                                            <h6>RW</h6>
                                            <p className="text-secondary">{akunUser.rw}</p>
                                            <h6>RT</h6>
                                            <p className="text-secondary">{akunUser.rt}</p>
                                            <h6>Email</h6>
                                            <p className="text-secondary">{akunUser.email}</p>
                                        </div>
                                    </div> :
                                    <div className="card mt-3 mt-md-0" style={{ width: '100%' }}>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">PROFILE RT</h5>
                                            <hr />
                                            <h6>Nama Ketua RT</h6>
                                            <p className="text-secondary">{RT.namaKepalaKeluarga}</p>
                                            <h6>RT</h6>
                                            <p className="text-secondary">{RT.rt}</p>
                                            <h6>RW</h6>
                                            <p className="text-secondary">{RT.rw}</p>
                                            <h6>Alamat</h6>
                                            <p className="text-secondary">{RT.alamat}</p>
                                            <h6>Provinsi</h6>
                                            <p className="text-secondary">{RT.provinsi}</p>
                                            <h6>Kode Pos</h6>
                                            <p className="text-secondary">{RT.kodePos}</p>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    } else {
        return (
            <div className="mt-5">
                <Loading />
            </div>
        )
    }
}
export default HalamanAkun