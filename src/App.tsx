import { Center, Text } from "@chakra-ui/react";
import StopWatchCommandForm from "./components/StopWatchCommandForm";
import { useEffect, useState } from "react";
import Buttons from "./components/Buttons";

function App() {
	const [isTimerActive, setIsTimerActive] = useState<Boolean>(false);
	const [time, setTime] = useState<number>(0);

	// Minutes are out of scope for this project, so reset after 60s
	const seconds: number = Math.floor((time % 6000) / 1000);
	const milliseconds: number = time % 1000;

	useEffect(() => {
		let intervalId: number;
		if (isTimerActive) {
			intervalId = setInterval(() => {
				setTime((currentTime) => currentTime + 1);
			}, 10);
		}

		// only stop timer if intervalId is defined (isTimerActive is true)
		return () => clearInterval(intervalId);
	}, [isTimerActive]);

	return (
		<Center h={"100svh"} flexDirection={"column"}>
			<Text fontSize={"4xl"} className="font-bold">
				Time passed: {seconds.toString()}.
				{milliseconds.toString().padStart(3, "0")}
			</Text>

			<Buttons
				setIsTimerActive={setIsTimerActive}
				setTime={setTime}
				isTimerActive={isTimerActive}
			/>

			<StopWatchCommandForm
				setIsTimerActive={setIsTimerActive}
				isTimerActive={isTimerActive}
				setTime={setTime}
			/>
		</Center>
	);
}

export default App;
