import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <div className="card-wrapper">
        <section className="card-header">
          <img
            src="/pankaj-patel-_SgRNwAVNKw-unsplash.jpg"
            alt="Background pattern"
          />
        </section>
        <section className="card-image">
          <img src="/me.png" alt="User profile" />
        </section>
        <section className="card-content">
          <div className="main-info">
            <div className="main-info-title">
              <h1>Mateus Alves</h1>
              <h2>25</h2>
            </div>
            <div className="main-info-subtitle">
              <p>Computer Scientist</p>
            </div>
          </div>
        </section>
        <section className="card-footer">
          <div className="secondary-info">
            <h1>BS</h1>
            <p>2017</p>
          </div>
          <div className="secondary-info">
            <h1>MS</h1>
            <p>2021</p>
          </div>
          <div className="secondary-info">
            <h1>PhD</h1>
            <p>????</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
