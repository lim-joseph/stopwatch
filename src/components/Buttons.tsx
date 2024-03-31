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
	const onStartClick = () => {
		setIsTimerActive(true);
	};

	const onStopClick = () => {
		setIsTimerActive(false);
	};

	const onClearClick = () => {
		setTime(0);
	};

	return (
		<ButtonGroup spacing={"1rem"}>
			<Button
				colorScheme="green"
				onClick={onStartClick}
				isDisabled={!!isTimerActive}
			>
				Start
			</Button>
			<Button
				colorScheme="red"
				onClick={onStopClick}
				isDisabled={!isTimerActive}
			>
				Stop
			</Button>
			<Button onClick={onClearClick}>Clear</Button>
		</ButtonGroup>
	);
}
