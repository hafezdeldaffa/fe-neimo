const IndonesiaCases = () => {
  return (
    <div className="IndonesiaCases-bg">
      <div className="container">
        <h3 className="text-center text-white">COVID-19 DI INDONSIA  </h3>

        <div className="row mt-4">
          <div className="col-3">
            <div className="card bg-positif text-white">
              <div className="card-body">
                <h5 className="card-title">#Positif</h5>
                <h3 className="card-text">4,12 Juta</h3>


              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card bg-negative text-white">
              <div className="card-body">
                <h5 className="card-title">#Meninggal</h5>
                <h3 className="card-text">135 Ribu</h3>

              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card bg-recovered text-white">
              <div className="card-body">
                <h5 className="card-title">#Sembuh</h5>
                <h3 className="card-text">3,83 Juta</h3>

              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card bg-vacinated text-white" >
              <div className="card-body">
                <h5 className="card-title">#Tervaksinasi</h5>
                <h3 className="card-text">104  Juta</h3>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IndonesiaCases;