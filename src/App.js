import './App.css';
import { Provider } from 'react-redux';

import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import Navbar from './components/Navbar';
import Playing from './components/Playing';

import { Store } from './redux/Store';

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* span1 */}
          <DetailSong />
          {/* span2 */}
          <ListSongs />
        </div>
        <Playing />
      </Provider>
    </div>
  );
}

export default App;
