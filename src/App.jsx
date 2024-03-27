import { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [buddies, setBuddies] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{buddies.length} Birthdays Today</h3>
        <List buddies={buddies} />

        <button
          type="button"
          className="btn btn-block"
          onClick={() => setBuddies([])}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
