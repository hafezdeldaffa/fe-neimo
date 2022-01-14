import { Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const BerhasilDaftarModal = (props) => {
    return (
        <>
            <Modal show={props.show}  aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className='p-5'>
                    <div className='d-flex justify-content-center'>
                        <img src="/images/check.png" alt="" width={'150px'} />
                    </div>
                    <h3 className='text-center mt-4'>Berhasil Melakukan Pendaftaran</h3>
                    <p className='text-center'>Silahkan Melakukan Login</p>
                    <div className='d-flex justify-content-center mt-4'>
                    <Link to={'/login'}><button variant="secondary" className=' btn addAnggota2-btn mx-2'>
                        OK
                    </button></Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default BerhasilDaftarModal