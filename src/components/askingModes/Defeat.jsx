import { ASKING_MODES } from "../../enums/ValentineEnums";
import crying from "../../pub/giphy.gif"

const Defeat = ({setCurrentMode}) => {
 return <div className="defeat">
    <span>Ты вонючька!</span>
    <img alt="crying" src={crying}/>
    <button className="button-change-choice"
            onClick={() => setCurrentMode(ASKING_MODES.AskingForm)}>
        Нажми сюда и сделай нормальный выбор.
    </button>
 </div>
};

export default Defeat;