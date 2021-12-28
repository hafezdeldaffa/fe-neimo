import { useLocation } from 'react-router';
import { useContext } from 'react';
import { CountriesContext } from '../context/CountriesContext';
const CountriesDataTable = () => {
    const [CountriesCases] = useContext(CountriesContext);
    
    let location = useLocation();

    const loc = location.search.split("?")
    const qs = require('qs');
    const obj = qs.parse(loc[1])
  
    
    const categories = ["Country", "Positive", "Death", "Recovered"];
  
    const params = {
      category: obj.category,
    };
  
    const filter = {
        category:  params.category ||categories[1],
    };

    const filtered = CountriesCases.sort((a, b) => filter.category === "Country" ? (a.attributes.Country_Region > b.attributes.Country_Region ? 1 : -1)
    : filter.category === "Positive" ? (a.attributes.Confirmed > b.attributes.Confirmed ? -1 : 1)
    : filter.category === "Death" ? (a.attributes.Deaths > b.attributes.Deaths ? -1 : 1)
    : (a.attributes.Recovered > b.attributes.Recovered ? -1 : 1));

    return (
        <div className="container">
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <div className="table-responsive">
            <table className="table table-borderless table-hover shadow">
                <thead className="bg-table text-white">
                    <tr>
                        <th scope="col" className=" d-none d-sm-block">No</th>
                        <th scope="col">Negara</th>
                        <th scope="col">Positif</th>
                        <th scope="col">Meninggal</th>
                        <th scope="col">Sembuh</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered.map((element, index) => {
                           return(
                            <tr className="border-1">
                                <th scope="row" className=" d-none d-sm-block">{index+1}</th>
                                <td>{element.attributes.Country_Region}</td>
                                <td>{element.attributes.Confirmed}</td>
                                <td>{element.attributes.Deaths}</td>
                                <td>{element.attributes.Recovered}</td>
                        </tr>
                           )
                        })
                    }
                </tbody>
            </table>
            </div>
            </div>
        </div>
    )
}

export default CountriesDataTable;