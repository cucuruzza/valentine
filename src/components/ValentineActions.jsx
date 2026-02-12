import { useState } from "react";
import { ASKING_MODES } from "../enums/ValentineEnums";
import AskingForm from "./askingModes/AskingForm";
import Defeat from "./askingModes/Defeat";
import Success from "./askingModes/Success";

const ValentineActions = () => {
    const [currentMode, setCurrentMode] = useState(ASKING_MODES.AskingForm);

    console.log(currentMode)

    switch (currentMode) {
        case ASKING_MODES.AskingForm: 
            return <AskingForm setCurrentMode={setCurrentMode}/>;
        case ASKING_MODES.Success:
            return <Success/>;
        case ASKING_MODES.Defeat:
            return <Defeat setCurrentMode={setCurrentMode}/>;
        default: return <ErrorPage/>
    };
};

export default ValentineActions;