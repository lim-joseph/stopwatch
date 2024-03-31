import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	UseToastOptions,
	useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";

interface FormikTypes {
	stopwatchCommand: string;
}

interface StopWatchCommandFormProps {
	setIsTimerActive: (isTimerActive: Boolean) => void;
	isTimerActive: Boolean;
	setTime: (time: number) => void;
}

export default function StopWatchCommandForm({
	setIsTimerActive,
	isTimerActive,
	setTime,
}: StopWatchCommandFormProps) {
	const toast = useToast();
	const options = ["start", "stop", "clear"];

	const validate = (values: FormikTypes) => {
		const errors = {} as FormikTypes;
		if (!options.includes(values.stopwatchCommand)) {
			errors.stopwatchCommand = "(╯°□°)╯︵ ┻━┻ 😡😭💀";
		}
		return errors;
	};

	const formik = useFormik({
		initialValues: {
			stopwatchCommand: "",
		},
		validate,
		onSubmit: (values) => {
			const command = values.stopwatchCommand;
			const toastData: UseToastOptions = {
				title: "Command registered!",
				description: "",
				status: "success",
				duration: 3000,
				isClosable: true,
				position: "top",
			};

			if (command === "start" && !isTimerActive) {
				setIsTimerActive(true);
				toast({ ...toastData, description: "Stopwatch started!" });
			} else if (command === "stop" && isTimerActive) {
				setIsTimerActive(false);
				toast({ ...toastData, description: "Stopwatch stopped!" });
			} else if (command === "clear") {
				setTime(0);
				toast({ ...toastData, description: "Stopwatch cleared!" });
			}
		},
	});

	return (
		<form className="mt-4" onSubmit={formik.handleSubmit}>
			<FormControl isInvalid={!!formik.errors.stopwatchCommand}>
				<FormLabel className="font-semibold" htmlFor="stopwatchCommand">
					Stopwatch Command
				</FormLabel>
				<Input
					width={"45svw"}
					onChange={formik.handleChange}
					value={formik.values.stopwatchCommand}
					id="stopwatchCommand"
					placeholder="Type a stopwatch command!"
				></Input>

				{formik.errors.stopwatchCommand && (
					<FormErrorMessage>
						{formik.errors.stopwatchCommand}
					</FormErrorMessage>
				)}
			</FormControl>
		</form>
	);
}
