import { Modal} from 'react-bootstrap'
const DeleteConfirmation = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.onHide}  aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body className='p-5'>
                    <div className='d-flex justify-content-center'>
                        <img src="/images/trash.png" alt="" width={'150px'} />
                    </div>
                    <h3 className='text-center mt-4'>Apakah Anda Yakin ?</h3>
                    <div className='d-flex justify-content-center mt-4'>
                    <button variant="secondary" onClick={props.onHide} className=' btn addAnggota2-btn mx-2'>
                        Batalkan
                    </button>
                    <button   className='mx-2 btn btn-delete'>
                        Hapus
                    </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default DeleteConfirmation