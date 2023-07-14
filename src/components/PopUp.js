import { PopUpThread } from "./PopUpThread";
import { ThreadInput } from "./ThreadInput";

export const PopUp = () => {
  return (
    <div className="popup">
      <PopUpThread />
      <ThreadInput />
    </div>
  );
}