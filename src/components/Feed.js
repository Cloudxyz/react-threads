import { Thread } from "./Thread";

export const Feed = ({user, setShowPopUp, filteredThreads, getThreads, setInteractingThread}) => {
  return (
    <div className="feed">
      {
        filteredThreads?.map(filterThread => {
          return <Thread
                  key={filterThread.id}
                  setShowPopUp={setShowPopUp}
                  filterThread={filterThread}
                  user={user}
                  getThreads={getThreads}
                  setInteractingThread={setInteractingThread}
                />
        }
      )}
    </div>
  );
}