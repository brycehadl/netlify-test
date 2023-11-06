import { Outlet } from 'react-router-dom';
import Nav from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;