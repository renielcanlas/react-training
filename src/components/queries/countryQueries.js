import { gql } from '@apollo/client';

export const GET_ALL_COUNTRY_NAMES = gql
`
    query getAllCountryNames {
        countries {
            name
        }
    }
`

export const GET_CONTINENTS_WITH_COUNTRIES = gql
`
    query getContinentsWithCountries {
        continents {
            code
            name
            countries {
                code
                name
            }
        }
    }
`

export const GET_COUNTRY_DETAILS = gql
`
    query getCountryDetails($code:ID!) {
        country(code: $code) {
            code
            name
            continent {
                code
                name
            }
            currency
            emoji
            emojiU
            languages {
                code
                name
            }
            native
            phone
            states {
                code
                name
            }
        }
    }
`

export default { GET_ALL_COUNTRY_NAMES, GET_CONTINENTS_WITH_COUNTRIES }