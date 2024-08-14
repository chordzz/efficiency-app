
export const fetchWeatherData = async (url) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error.message);
    }
}

export const getLocation = async (baseUrl) => {
    let locationData;

    const getPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    try {
        if("geolocation" in navigator){
            const position = await getPosition()
            const url = `${baseUrl}&q=${position.coords.latitude},${position.coords.longitude}`
            locationData = await fetchWeatherData(url)
            console.log(locationData)
            return locationData;
        } else {
            alert("Geolocation is not available")
        }
    } catch(error) {
        console.log(error.message)
    }
}