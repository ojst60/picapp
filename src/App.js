import './App.css';
import Profile from './Profile';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default withAuthenticator(App);
