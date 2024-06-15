import Counter from "./Components/Counter";

function App() {
  return (
    <div className="d-flex bg-black justify-content-evenly p-2 my-5">
      <div className="col-5 d-flex flex-column m-2 justify-content-center">
        <h3 className="text-warning">REACT30 - project2</h3>
        <h1 className="text-light">DIGITAL CLOCK</h1>
        <h5 className="text-info">LEARNINGS</h5>
        <p className="text-info">
          SEITERVAL METHOD IN JAVASCRIPT USEEFFECT HOOK USAGE IN REACTJS
        </p>
      </div>
      <div className="App col-5 bg-dark p-4 rounde my-5 text-light text-center">
        Counter Project
        <Counter />
      </div>
    </div>
  );
}

export default App;
