import React from 'react'
import RClock from "react-live-clock"
import { Box} from "../components/Box"




export const Clock = () => (
	<Box>
	<h1>wow</h1>
	<RClock format="HH:mm:ss" ticking timezone="Europe/Amsterdam" />
	</Box>
)
