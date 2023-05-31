import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import DisplayTodos from './components/DisplayTodos';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Container>

        <h1>
          <AddTodo />
          <DisplayTodos />
        </h1>

      </Container>
    </Provider>
  );
}

export default App;
