const App = () => {
  const name= 'joghn doe';
  const x = 5;
  const y = 10;
  const names= ['ana','agilda','sara'];
  const loggedin = true;
  
  return (
    <>
    <div className='text-5xl'>App</div>
    <p>
      Welcome to your React application!
    </p>
    <p> Hello, {name}!</p>
    <p> The sum of {x} and {y} is {x + y}.</p>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    {loggedin ? <h1>User is logged in</h1> : <h1>User is not logged in</h1>}
    </>
  )
};

export default App;