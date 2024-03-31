import { Input, Text } from "@chakra-ui/react";

export default function StopWatchCommandForm() {
	return (
		<form className="mt-4">
			<Text className="font-semibold">Stopwatch Command</Text>
			<Input width={"45svw"}></Input>
		</form>
	);
}
