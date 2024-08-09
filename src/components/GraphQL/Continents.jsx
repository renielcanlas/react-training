import { useQuery } from "@apollo/client"
import { GET_CONTINENTS_WITH_COUNTRIES } from '../queries/countryQueries'

const Continents = () => {

    const { data } = useQuery(GET_CONTINENTS_WITH_COUNTRIES)


    return (
        <>
            <h1>Continents</h1>
            {
                data.continents.map((continent, index) => {
                    return (
                        <div key={index}>
                            <h2>{continent.code} - {continent.name}</h2>
                            <ul>
                                {
                                    continent.countries.map((country, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={`/country/${country.code}`} target='_blank'>
                                                    {country.code} - {country.name}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Continents