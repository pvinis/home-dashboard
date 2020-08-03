import React, {useState, useEffect} from 'react'
import { Box} from "../components/Box"
import weather from 'openweather-apis'


weather.setLang("en")
weather.setCity("Rotterdam")
console.log(process.env)
weather.setAPPID(process.env.REACT_APP_OPENWEATHERMAP_API_KEY)

export const Weather = () => {
	const [data, setData] = useState({})
	useEffect(()=> {
		weather.getDescription(function(err, desc){
			setData(desc)
			console.log(desc);
		});
	}, [])

	return (
	<Box>
	<h1>weather</h1>
	<p>{JSON.stringify(data)}</p>
	</Box>
)
}
