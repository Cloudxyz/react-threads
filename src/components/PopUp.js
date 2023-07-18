import { PopUpThread } from "./PopUpThread";
import { ThreadInput } from "./ThreadInput";

export const PopUp = ({user, setShowPopUp}) => {
  return (
    <div className="popup">
      <p onClick={() => setShowPopUp(false)}>x</p>
      <PopUpThread />
      <ThreadInput />
    </div>
  );
}