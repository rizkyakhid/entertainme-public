import { ApolloProvider } from '@apollo/client'
import Home from './pages/Home'
import client from './config'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
