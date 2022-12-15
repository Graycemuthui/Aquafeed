import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

const Contact = () => {
  return (
    <Form className="form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Name</Form.Label>
        <Form.Control
          size="sm"
          type="name"
          className="input"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label">Email address</Form.Label>
        <Form.Control
          size="sm"
          className="input"
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted label">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="label">Message</Form.Label>
        <Form.Control as="textarea" rows={3} size="sm" className="input" />
      </Form.Group>
      <Button variant="primary" type="submit" className="label">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
