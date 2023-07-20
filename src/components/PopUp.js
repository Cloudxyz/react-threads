import { PopUpThread } from "./PopUpThread";
import { ThreadInput } from "./ThreadInput";

export const PopUp = ({user, setShowPopUp, showPopUpFeeds, text, setText, postThread}) => {
  return (
    <div className="popup">
      <p onClick={() => setShowPopUp(false)}>x</p>
      {showPopUpFeeds?.map(popUpThread =>
        <PopUpThread
          key={popUpThread.id}
          popUpThread={popUpThread}
        />)
      }
      <ThreadInput
        user={user}
        text={text}
        setText={setText}
        postThread={postThread}
      />
    </div>
  );
}