import { useQuery } from '@apollo/client';
import { GET_ALL_COUNTRY_NAMES } from  '../queries/countryQueries';

const GraphQL = () => {
    const { data } = useQuery(GET_ALL_COUNTRY_NAMES);

    return (
        <>
            <h1>Countries</h1>
            <ul>
                {
                    data.countries.map((country, index) => {
                        return (
                            <li key={index}>{country.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default GraphQL