import axios from 'axios';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const FormTambahLaporan = (props) => {
  const data = props.data;
  const { register, handleSubmit } = useForm();
  let show = props.show;

  const pertanyaan = {
    perjalananDomestik:
      'Apakah Anda memiliki riwayat melakukan perjalanan domestik selama 14 hari terakhir?',
    turisAsing:
      'Apakah Anda meiliki riwayat perjalanan internasional atau pernah bertemu turis asing dalam 14 hari terakhir?',
    kontakPositif:
      'Apakah Anda memiliki riwayat kontak dengan orang yang dinyatakan  positif terinfeksi covid-19?',
    demam: 'Apakah saat ini Anda mengalami demam?',
    batuk: 'Apakah saat ini Anda mengalami gejala batuk?',
    nyeriTenggorokan: 'Apakah Anda merasakan nyeri di tenggorokan?',
    sesakNafas: 'Apakah nafas Anda terasa sesak?',
    batukPilek: 'Apakah Anda sedang batuk/pilek?',
    diabetes: 'Apakah Anda memiliki riwayat penyakit Diabetes?',
    hipertensi: 'Apakah Anda memiliki riwayat penyakit Hipertensi?',
    jantung: 'Apakah Anda memiliki riwayat penyakit Jantung?',
    ginjal: 'Apakah Anda memiliki riwayat penyakit Ginjal?',
    asma: 'Apakah Anda memiliki riwayat penyakit Asma?',
  };

  const objectValues = Object.values(pertanyaan);
  const objectKeys = Object.keys(pertanyaan);
  const token = sessionStorage.getItem('token');

  const onSubmit = async (data) => {
    try {
      axios.interceptors.request.use((config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      });

      const dataLogin = await axios.post(
        'https://neimo-be.herokuapp.com/laporan',
        data
      );
      console.log(dataLogin);

      if (dataLogin && dataLogin.status === 201) {
        window.location.href = '/buat-laporan';
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={props.onHide}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='ms-2'>Tambahkan Laporan</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(onSubmit)} method='post'>
          <input type='hidden' value={data._id} {...register('anggotaId')} />
          <Modal.Body>
            <h6 className='ms-3'>Nama : {data.nama} </h6>
            <div className='d-flex justify-content-start px-3'>
              <h6>Tanggal Pelaporan :</h6>
              <input
                className='d-flex flex-row-reverse justify-content-evenly'
                type='date'
                style={{ border: 'none' }}
                {...register('tanggal', { required: true })}
              />
            </div>
            <div className='d-flex justify-content-end'>
              <h6 className='d-flex justify-content-around px-2'>Tidak/YA</h6>
            </div>
            <table>
              <tbody>
                <ol>
                  <tr>
                    <td>
                      {objectValues.map((q) => {
                        return (
                          <tr>
                            <td scope='row'>
                              <li>{q}</li>
                            </td>
                          </tr>
                        );
                      })}
                    </td>

                    <td>
                      {objectKeys.map((r) => {
                        return (
                          <tr>
                            <td scope='row' className='px-2'>
                              <div className='form-check form-switch'>
                                <input
                                  className='form-check-input'
                                  type='checkbox'
                                  id='flexSwitchCheckDefault'
                                  {...register(r)}
                                />
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </td>
                  </tr>
                </ol>
              </tbody>
            </table>
            <div className='mx-3'>
              <textarea
                className='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                placeholder='Catatan Tambahan'
                {...register('catatanTambahan')}
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type='submit'
              className='btn addAnggota2-btn'
              style={{ width: '100%' }}
            >
              Kirim Laporan
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
export default FormTambahLaporan;
