import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Button } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
    <h3 className="fo">Sign In</h3>
  <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="pas" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" id="poi">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
