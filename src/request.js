const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch get puzzle')
    }
}

export { getPuzzle as default }

const getCountry = async (countryCode) => {
    const response = await fetch(`//api.countrylayer.com/v2/all?access_key=befe4773619596624dcac2a33cf16419`)

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country data')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=e3b2b93142ffc7')

        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location data')
        }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}