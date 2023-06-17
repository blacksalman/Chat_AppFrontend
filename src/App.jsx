
import { useState } from 'react';
import './App.css';
import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';

function App() {

  const [user, SetUser] = useState(undefined);
  return (
    < >
      {(!user) ? <AuthPage onAuth={(user) =>SetUser(user)}/>
      :<ChatsPage user={user} />
  }
    </>
  );
}

export default App;
