import { Button, ButtonGroup } from "@chakra-ui/react";

interface ButtonsProps {
	setIsTimerActive: (isTimerActive: boolean) => void;
	setTime: (time: number) => void;
	isTimerActive: Boolean;
}

export default function Buttons({
	setIsTimerActive,
	setTime,
	isTimerActive,
}: ButtonsProps) {
	return (
		<ButtonGroup spacing={"1rem"}>
			<Button
				colorScheme="green"
				onClick={() => setIsTimerActive(true)}
				isDisabled={!!isTimerActive}
			>
				Start
			</Button>
			<Button
				colorScheme="red"
				onClick={() => setIsTimerActive(false)}
				isDisabled={!isTimerActive}
			>
				Stop
			</Button>
			<Button onClick={() => setTime(0)}>Clear</Button>
		</ButtonGroup>
	);
}
