

function App() {
   const handleClick = (name) => {
    alert(`You clicked ${name}!`);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Home Page skeleton</h1>

      <button onClick={() => handleClick("Button 1")}>Button 1</button>
      <button onClick={() => handleClick("Button 2")}>Button 2</button>

      <div style={{ marginTop: "20px" }}>
        <a href="/about">
          <button>Go to About Page</button>
        </a>
      </div>
    </div>
  );
}


export default App;