import { useState, useEffect } from 'react';
import { Header, Feed, Nav, PopUp, WriteIcon } from './components';

const App = () => {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState(null);
  const [viewsThreadsFeed, setViewsThreadsFeed] = useState(true);
  const [filteredThreads, setFilteredThreads] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const userId = "3175e765-ba62-4059-b65f-5fd20f1fb929";

  const getUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?user_uuid=${userId}`);
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  const getThreads = async () => {
    try {
      const response = await fetch(`http://localhost:3000/threads?thread_from=${userId}`);
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.error(error);
    }
  }

  const getThreadsFeed = () => {
    if(viewsThreadsFeed){
      const standAloneThreads = threads?.filter(thread => thread.reply_to === null);
      setFilteredThreads(standAloneThreads);
    }
    if(!viewsThreadsFeed){
      const replyThreads = threads?.filter(thread => thread.reply_to !== null);
      setFilteredThreads(replyThreads);
    }
  }

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getThreadsFeed();
  }, [user, threads, viewsThreadsFeed]);

  console.log(filteredThreads);

  return (
    <>
      {user && filteredThreads && <div className="app">
        <Nav url={user.instagram_url}/>
        <Header
          user={user}
          viewsThreadsFeed={viewsThreadsFeed}
          setViewsThreadsFeed={setViewsThreadsFeed}
        />
        <Feed
          user={user}
          setShowPopUp={setShowPopUp}
          filteredThreads={filteredThreads}
          getThreads={getThreads}
        />
        {showPopUp &&
          <PopUp
            user={user}
            setShowPopUp={setShowPopUp}
          />
        }
        <div onClick={() => setShowPopUp(true)}>
          <WriteIcon />
        </div>
      </div>}
    </>
  );
}

export default App;
