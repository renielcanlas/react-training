import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import {GET_COUNTRY_DETAILS} from '../queries/countryQueries'

const CountryDetails = () => {
    const {code} = useParams();
    const { data } = useQuery(GET_COUNTRY_DETAILS, {variables: {code}})

    return (
        <>
            <h1>{code} - {data?.country?.name}</h1>
            <b>Continent:</b> {data?.country?.continent.name} <br />
            <b>Currency:</b> {data?.country?.curency} <br />
            <b>Emoji:</b> {data?.country?.emoji} <br />
            <b>Native:</b> {data?.country?.native} <br />
            <b>Phone:</b> {data?.country?.phone} <br />
            <h2>Languages</h2>
            <ul>
                {
                    data?.country?.languages.map((lang, index) => {
                        return (
                            <li key={index}>{lang.code} - {lang.name}</li>
                        )
                    })
                }
            </ul>
            <h2>States</h2>
            <ul>
                {
                    data?.country?.states.map((state, index) => {
                        return (
                            <li key={index}>{state.code} - {state.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CountryDetails