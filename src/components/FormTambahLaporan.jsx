import React from "react";
import { Modal } from 'react-bootstrap'
const FormTambahLaporan = (props) => {
    const pertanyaan = [
        'Apakah Anda memiliki riwayat melakukan perjalanan domestik selama 14 hari terakhir?',
        'Apakah Anda meiliki riwayat perjalanan internasional atau pernah bertemu turis asing dalam 14 hari terakhir?',
        'Apakah Anda memiliki riwayat kontak dengan orang yang dinyatakan  positif terinfeksi covid-19?',
        'Apakah saat ini Anda mengalami demam?',
        'Apakah saat ini Anda mengalami gejala batuk?',
        'Apakah Anda merasakan nyeri di tenggorokan?',
        'Apakah nafas Anda terasa sesak?',
        'Apakah Anda sedang batuk/pilek?',
        'Apakah Anda memiliki riwayat penyakit Diabetes?',
        'Apakah Anda memiliki riwayat penyakit Hipertensi?',
        'Apakah Anda memiliki riwayat penyakit Jantung?',
        'Apakah Anda memiliki riwayat penyakit Ginjal?',
        'Apakah Anda memiliki riwayat penyakit Asma?',
    ]
    return (
        <>
            <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="ms-2">Tambahkan Laporan</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <h6 className="ms-3">Nama : Hasan </h6>
                        <div className="d-flex justify-content-start ms-3">
                            <h6>Tanggal Pelaporan :</h6>
                            <input className="d-flex flex-row-reverse justify-content-start" type="date" style={{ border: 'none' }} />
                        </div>
                        <table >
                            <ol>
                                <tr>
                                    <th></th>
                                    <th>Tidak/Ya</th>
                                </tr>
                                {pertanyaan.map((c) => {
                                    return (
                                        <tr>
                                            <td><li>{c}</li></td>
                                            <td className="px-2">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </ol>
                        </table>
                        <div className="mx-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Catatan Tambahan"></textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn addAnggota2-btn" style={{ width: '100%' }}>Kirim Laporan</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
export default FormTambahLaporan