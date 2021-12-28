const SymptomSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <img
                        src="/images/undraw_medical_research_qg4d.png"
                        className="d-block mx-lg-auto img-fluid"
                        alt="Bootstrap Themes"
                        width="100%"
                        loading="lazy"
                    />
                </div>
                <div className="col-12 col-lg-6">
                    <div className="p-5">
                        <h5 className="fw-bold mb-lg-4">Gejala Umum Covid</h5>
                        <p className="symptom-p ">
                            Gejala umum berupa demam ≥38°C, batuk kering, dan sesak napas. 
                            Jika ada orang yang dalam 14 hari sebelum muncul gejala tersebut pernah 
                            melakukan perjalanan ke negara terjangkit, atau pernah merawat/kontak erat 
                            dengan penderita COVID-19, maka terhadap orang tersebut akan dilakukan 
                            pemeriksaan laboratorium lebih lanjut untuk memastikan diagnosisnya.
                        </p>
                        <p className="symptom-p ">
                            Seseorang dapat terinfeksi dari penderita COVID-19. Penyakit ini dapat menyebar 
                            melalui tetesan kecil (droplet) dari hidung atau mulut pada saat batuk atau bersin. 
                            Droplet tersebut kemudian jatuh pada benda di sekitarnya.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SymptomSection;