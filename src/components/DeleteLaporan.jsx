import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const DeleteLaporan = (props) => {
  const { register, handleSubmit } = useForm();
  const token = sessionStorage.getItem('token');

  const onSubmit = async (data) => {
    try {
      axios.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      });

      const id = data.id;

      const dataDelete = await axios.delete(
        `https://neimo-be.herokuapp.com/laporan/${id}`
      );

      if (dataDelete && dataDelete.status === 200) {
        window.location.href = '/buat-laporan';
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Body className='p-5'>
          <form onSubmit={handleSubmit(onSubmit)} method='post'>
            <div className='d-flex justify-content-center'>
              <img src='/images/trash.png' alt='' width={'150px'} />
            </div>
            <h3 className='text-center mt-4'>Apakah Anda Yakin ?</h3>
            <input
              type='hidden'
              value={props.data}
              {...register('id', { required: true })}
            />
            <div className='d-flex justify-content-center mt-4'>
              <button
                variant='secondary'
                onClick={props.onHide}
                className=' btn addAnggota2-btn mx-2'
              >
                Batalkan
              </button>
              <button type='submit' className='mx-2 btn btn-delete'>
                Hapus
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default DeleteLaporan;
