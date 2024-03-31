import { useState } from 'react';
import {Form, Container, Button, Row, Col} from 'react-bootstrap';

const AddNote = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const contentHandler = (e) => {
    setContent(e.target.value);
  }

  const submitNoteHandler = async(e) => {
      e.preventDefault();

      const noteObj = {
        title: title,
        content: content
      }
      props.addNoteHandler(noteObj);
      setTitle('');
      setContent('');
  }

  return (
    <Container className='p-3 my-3 shadow rounded-3 bg-white'>
    <Form className='m-auto' onSubmit={submitNoteHandler}>
      <Row className='align-items-center'>
        <Col lg={4}>
        <Form.Group className="mb-3 fw-bold" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter note title" value={title} onChange={titleHandler} />
      </Form.Group>
        </Col>
        <Col lg={6}>
        <Form.Group className="mb-3 fw-bold" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control type="text" placeholder="Enter note content" value={content} onChange={contentHandler} />
      </Form.Group>
        </Col>
        <Col className='d-flex justify-content-center' lg={2}>
        <div className='mt-3'>
        <Button type='submit'>Add Note</Button>
        </div>
        </Col>
      </Row>
    </Form>
    </Container>
  );
}

export default AddNote;