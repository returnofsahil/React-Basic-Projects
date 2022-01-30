import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map((item) => {
            return (
              <SingleQuestion
                id={item.id}
                key={item.id}
                title={item.title}
                info={item.info}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
