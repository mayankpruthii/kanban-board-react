import App from './App';
import ReactDOM from "react-dom";

test('renders app component', () => {
const div = document.createElement("div");
  ReactDOM.render(<App />, div)
});
