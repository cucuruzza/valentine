import { useState } from "react";
import { ASKING_MODES, BUTTON_POSITIONS } from "../../enums/ValentineEnums";
import kitten from "../../pub/kitten.png";

const AskingForm = ({setCurrentMode}) => {
    const [count, setCount] = useState(0);

    const onClickNo = () => {
        console.log("no, here")
        if (count === 3) {
            console.log("here")
            setCurrentMode(ASKING_MODES.Defeat);
            setCount(0);
            return;
        }
        setCount(prev => prev + 1);
    };

    console.log(count);

    return <div className="asking-form">
        <span className="asking-form__question">
            Will you be my Valentine?
        </span>
         <img alt="kitten" src={kitten}/>
        <div className="asking-form__buttons">
            <button className="button-yes"
                    onClick={() => setCurrentMode(ASKING_MODES.Success)}>
                YES
            </button>
            <button className={"button-no"}
                    style={BUTTON_POSITIONS[count]}
                    onClick={onClickNo}>
                no
            </button>
        </div>
    </div>
};

export default AskingForm;