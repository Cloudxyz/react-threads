export const Header = () => {
  return (
    <header>
        <div className="info-container">
          <div className="user-info-container">
            <h1>username</h1>
            <p>handle <span className="threads-info">threads.net</span></p>
          </div>
          <div className="img-container">
            <img src="https://via.placeholder.com/150" alt="user avatar" />
          </div>
        </div>
        <p>bio</p>
        <div className="sub-info-container">
          <p className="sub-text">x followers • <a href="">link</a></p>
        </div>
        <button
          className="primary"
          onClick={() => navigator.clipboard.writeText('URL')}>
          Share Profile
        </button>
        <div className="button-container">
          <button className="current">Threads</button>
          <button>Replies</button>
        </div>
    </header>
  );
}