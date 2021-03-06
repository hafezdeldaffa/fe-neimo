import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const FormEditAnggota = (props) => {
  let data = props.data;
  const dataVaksin = props.dataVaksin;

  const token = sessionStorage.getItem('token');
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      axios.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      });
      const id = data.id;

      const newData = {
        nama: data.nama,
        role: data.role,
        dosis1: data.dosis1,
        dosis2: data.dosis2,
        statusCovid: data.statusCovid,
      };

      const result = await axios.put(
        `https://neimo-be.herokuapp.com/anggota-keluarga/${id}`,
        newData
      );

      if (result) {
        window.location.href = '/data-keluarga';
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
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Anggota Keluarga</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} method='post'>
          <Modal.Body>
            <div className='card shadow border-0 rounded-3'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-1'>
                    <img
                      src='/images/account.png'
                      alt=''
                      style={{ width: '25px' }}
                    />
                  </div>
                  <div className='col-11'>
                    <h5>Data Diri</h5>
                  </div>
                </div>
                {/* INPUT NAMA */}
                <input type='hidden' value={data._id} {...register('id')} />
                <input
                  type='text'
                  className='form-control mt-2'
                  id='name'
                  aria-describedby='name'
                  placeholder='Nama Lengkap'
                  defaultValue={data.nama}
                  {...register('nama')}
                />
                {/* INPUT ROLE */}
                <select
                  className='form-select mt-2'
                  aria-label='Default select example'
                  defaultValue={
                    data.role === 'Kepala Keluarga'
                      ? 'Kepala Keluarga'
                      : data.role === 'Anak'
                      ? 'Anak'
                      : data.role === 'Istri'
                      ? 'Istri'
                      : data.role === 'Anak'
                      ? 'Anak'
                      : 'Lain-lain'
                  }
                  {...register('role')}
                >
                  <option value='Kepala Keluarga'>Kepala Keluarga</option>
                  <option value='Istri'>Istri</option>
                  <option value='Anak'>Anak</option>
                  <option value='Lain-lain'>Lain-Lain</option>
                </select>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col'>
                <div className='card shadow border-0 rounded-3'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-1'>
                        <img
                          src='/images/vaksin_icon.png'
                          alt=''
                          style={{ width: '25px' }}
                        />
                      </div>
                      <div className='col-11'>
                        <h5>Data Vaksin</h5>
                      </div>
                    </div>
                    <div className='row  mt-2'>
                      <div className='col'>
                        {/* INPUT DOSIS 1 */}
                        <select
                          className='form-select'
                          aria-label='Default select example'
                          defaultValue={
                            props.show &&
                            dataVaksin.data.vaksin.dosis1 === 'Belum Vaksin'
                              ? 'Belum Vaksin'
                              : props.show &&
                                dataVaksin.data.vaksin.dosis1 === 'Sinovac'
                              ? 'Sinovac'
                              : props.show &&
                                dataVaksin.data.vaksin.dosis1 === 'Astra Z'
                              ? 'Astra Z'
                              : props.show &&
                                dataVaksin.data.vaksin.dosis1 === 'Moderna'
                              ? 'Moderna'
                              : 'Lain-Lain'
                          }
                          {...register('dosis1')}
                        >
                          <option value='Belum Vaksin'>Belum Vaksin</option>
                          <option value='Sinovac'>Sinovac</option>
                          <option value='Astra Z'>Astra Z</option>
                          <option value='Moderna'>Moderna</option>
                          <option value='Lain-lain'>Lain-lain</option>
                        </select>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start mt-1'
                          type='date'
                          style={{ border: 'none' }}
                        />
                      </div>
                    </div>
                    <div className='row  mt-2'>
                      <div className='col'>
                        {/* INPUT DOSIS 1 */}
                        <select
                          className='form-select'
                          aria-label='Default select example'
                          defaultValue={
                            props.show &&
                            dataVaksin.data.vaksin.dosis2 === 'Belum Vaksin'
                              ? 'Belum Vaksin'
                              : props.show &&
                                dataVaksin.data.vaksin.dosis2 === 'Sinovac'
                              ? 'Sinovac'
                              : props.show &&
                                dataVaksin.data.vaksin.dosis2 === 'Astra Z'
                              ? 'Astra Z'
                              : props.show &&
                                dataVaksin.data.vaksin.dosis2 === 'Moderna'
                              ? 'Moderna'
                              : 'Lain-Lain'
                          }
                          {...register('dosis2')}
                        >
                          <option value='Belum Vaksin'>Belum Vaksin</option>
                          <option value='Sinovac'>Sinovac</option>
                          <option value='Astra Z'>Astra Z</option>
                          <option value='Moderna'>Moderna</option>
                          <option value='Lain-lain'>Lain-lain</option>
                        </select>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start mt-1'
                          type='date'
                          style={{ border: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card shadow border-0 rounded-3  pb-3 mt-md-0 mt-2'>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-1'>
                        <img
                          src='/images/notification.png'
                          alt=''
                          style={{ width: '25px' }}
                        />
                      </div>
                      <div className='col-11'>
                        <h5>Data Status Covid</h5>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='positif'
                            defaultChecked={data.statusCovid === 'Positif'}
                            value='Positf'
                            {...register('statusCovid')}
                          />
                          <label className='form-check-label' htmlFor='positif'>
                            Positif
                          </label>
                        </div>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start'
                          type='date'
                          style={{ border: 'none' }}
                          value={
                            data.updatedAt !== null ? data.updatedAt : null
                          }
                        />
                      </div>
                    </div>
                    <div className='row mt-2'>
                      <div className='col'>
                        <div className='form-check '>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='flexRadioDefault'
                            id='negatif'
                            defaultChecked={data.statusCovid === 'Negatif'}
                            value='Negatif'
                            {...register('statusCovid')}
                          />
                          <label className='form-check-label' htmlFor='positif'>
                            Negatif
                          </label>
                        </div>
                      </div>
                      <div className='col'>
                        <input
                          className='ms-2 d-flex flex-row-reverse justify-content-start'
                          type='date'
                          style={{ border: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type='submit'
              className='btn addAnggota2-btn'
              style={{ width: '100%' }}
            >
              Edit Data
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default FormEditAnggota;
