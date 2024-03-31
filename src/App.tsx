import { Button, ButtonGroup, Center, Text } from "@chakra-ui/react";
import StopWatchCommandForm from "./components/StopWatchCommandForm";

function App() {
	return (
		<Center h={"100svh"} flexDirection={"column"}>
			<Text fontSize={"4xl"} className="font-bold">
				Time passed: 0:000
			</Text>
			<ButtonGroup spacing={"1rem"}>
				<Button colorScheme="green">Start</Button>
				<Button colorScheme="red">Stop</Button>
				<Button>Clear</Button>
			</ButtonGroup>

			<StopWatchCommandForm />
		</Center>
	);
}

export default App;
