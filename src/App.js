import "./App.css";
import Psyduck from "../src/psyduck.png";

function App() {
  return (
    <div className="App">
      <h2 class="heading-secondary">Sigh bot</h2>
      <br />
      <img src={Psyduck} alt="Psyduck" />
      <br />
      <a
        href="https://github.com/manthankumbhar/sigh_bot_www/blob/master/README.md"
        class="btn btn--white btn--animated"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check docs
      </a>
      <br />
      <a
        href="https://discord.com/oauth2/authorize?client_id=848918677193228318&permissions=8&scope=bot"
        class="btn btn--green btn--animated"
        style={{ marginTop: "3rem" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Get our bot to your discord server!
      </a>
      <br />
      <p className="p-tag">
        Developed by{" "}
        <a
          href="https://manthankumbhar.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Manthan Kumbhar
        </a>{" "}
        &copy; {new Date().getFullYear()} (All Rights Reserved)
      </p>
    </div>
  );
}

export default App;
