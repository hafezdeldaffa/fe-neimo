import React from "react";
import { Modal } from 'react-bootstrap'
const DetailLaporan = (props) => {
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

    const dataLaporan = props.dataLaporan
    const dataAnggota = props.dataAnggota

    return (
        <>
            <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Detail Laporan</Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <h6 className="ms-3">Nama : {dataAnggota.nama} </h6>
                        <table className="ms-3">
                            <tbody>
                                <tr>
                                    <td>{pertanyaan[0]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.perjalananDomestik === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[1]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.turisAsing === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[2]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.kontakPositif === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[3]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.demam === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[4]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.batuk === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[5]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.nyeriTenggorokan === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[6]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.sesakNafas === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[7]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.batukPilek === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[8]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.diabetes === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[9]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.hipertensi === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[10]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.jantung === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[11]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.ginjal === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                                <tr>
                                    <td>{pertanyaan[12]}</td>
                                    <td className="px-2 fw-bold text-center">{dataLaporan.asma === 'true' ? 'Ya' : 'Tidak'}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div className="row ms-2">
                            <div className="col-11">
                                {pertanyaan.map((c, index) => {
                                    return (
                                        <p style={{ marginBottom: '-3px' }}>{c}</p>
                                    )
                                })}
                            </div>
                            <div className="col-1">
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                                <p style={{ marginBottom: '-2px' }}>{dataLaporan.perjalananDomestik}</p>
                            </div>

                        </div> */}
                        <div className="mx-3 fw-bold">
                            Catatan Tambahan : {dataLaporan.catatanTambahan}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn addAnggota2-btn" style={{ width: '100%' }}>Cetak Laporan</button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
export default DetailLaporan