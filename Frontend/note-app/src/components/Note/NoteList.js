import { Container, Row, Col } from 'react-bootstrap';
import Note from "./Note";

const NoteList = (props) => {
    return (
    <Container className='mb-5'>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-3">
        {props.notes && props.notes.map((note, index) => (
          <Col key={index}>
            <Note id={note.id} title={note.title} content={note.content} date={note.createdAt} deleteNote={props.deleteNoteHandler} />
          </Col>
        ))}
      </Row>
    </Container>
    )
}

export default NoteList;