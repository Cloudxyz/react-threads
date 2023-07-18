import { Thread } from "./Thread";

export const Feed = ({user, setShowPopUp, filteredThreads, getThreads}) => {
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
                />
        }
      )}
    </div>
  );
}