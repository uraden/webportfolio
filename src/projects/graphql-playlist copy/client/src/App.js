import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'


//components
import BookList from './components/BookList'
import AddBook from './components/AddBook'
 


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})


function AppQ() {
  return (
    <ApolloProvider client={client} >
    <div id="main">
      <h1>Reading List</h1>
      <BookList />
      <AddBook />
    </div>
    </ApolloProvider>
  );
}

export default AppQ;
