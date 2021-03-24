import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="card-wrapper">
        <section className="card-header">
          <img src="/bg-pattern-card.svg" alt="Background pattern" />
        </section>
        <section className="card-image">
          <img src="/image-victor.jpg" alt="User profile" />
        </section>
        <section className="card-content">
          <div className="main-info">
            <div className="main-info-title">
              <h1>Victor Crest</h1>
              <h2>26</h2>
            </div>
            <div className="main-info-subtitle">
              <p>London</p>
            </div>
          </div>
        </section>
        <section className="card-footer">
          <div className="secondary-info">
            <h1>80K</h1>
            <p>Followers</p>
          </div>
          <div className="secondary-info">
            <h1>803K</h1>
            <p>Likes</p>
          </div>
          <div className="secondary-info">
            <h1>1.4K</h1>
            <p>Photos</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
