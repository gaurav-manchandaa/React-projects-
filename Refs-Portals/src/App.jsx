import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targettime={1}/>
        <TimerChallenge title="Medium" targettime={5}/>
        <TimerChallenge title="Hard" targettime={10}/>
        <TimerChallenge title="PRO level  " targettime={50}/>
      </div>
    </>
  );
}

export default App;
