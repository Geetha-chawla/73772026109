import React from 'react';
import Numbers from './Numbers';

const App = () => {
  return (
    <div className="App">
      <h1 className="input">Number Management System</h1>
      <h2 className="input1">Please copy this url below and search</h2>
      <ul className="input2">1. http://104.211.219.98/numbers/primes</ul>
      <ul className="input2">2. http://104.211.219.98/numbers/fibo</ul>
      <ul className="input2">3. http://104.211.219.98/numbers/odd</ul>
      <ul className="input2">4. http://104.211.219.98/numbers/rand</ul>
      <Numbers />
    </div>
  );
};

export default App;
