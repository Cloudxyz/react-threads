export const Header = ({user, viewsThreadsFeed, setViewsThreadsFeed}) => {
  const { username, handle, img, bio, followers, link } = user;

  return (
    <header>
        <div className="info-container">
          <div className="user-info-container">
            <h1>{username}</h1>
            <p>{handle} <span className="threads-info">threads.net</span></p>
          </div>
          <div className="img-container">
            <img src={img} alt="user avatar" />
          </div>
        </div>
        <p>{bio}</p>
        <div className="sub-info-container">
          <p className="sub-text">{followers.length} followers • <a href={link}>{link.replace('https://','')}</a></p>
        </div>
        <button
          className="primary"
          onClick={() => navigator.clipboard.writeText('URL')}>
          Share Profile
        </button>
        <div className="button-container">
          <button className={viewsThreadsFeed ? 'current' : null} onClick={() => setViewsThreadsFeed(true)}>Threads</button>
          <button className={!viewsThreadsFeed ? 'current' : null} onClick={() => setViewsThreadsFeed(false)}>Replies</button>
        </div>
    </header>
  );
}