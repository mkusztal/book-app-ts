import { FC, useState } from "react";

const App: FC = () => {
  const [num, setNum] = useState(5);

  return (
    <div className='container'>
      <header>
        <h1>Books App</h1>
      </header>
    </div>
  );
};

export default App;
