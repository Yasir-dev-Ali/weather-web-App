const apiKey="51a5b00efecce74eb2b3fbe6a43177ce";

export const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    return data;
}
