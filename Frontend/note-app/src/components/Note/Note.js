import { Card } from "react-bootstrap";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Note = (props) => {
  const deleteNoteHandler = (e) => {
    return props.deleteNote(e.currentTarget.value);
  }
  return (
    <Card >
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.content}
        </Card.Text>
        <div className="d-flex align-items-center justify-content-between">
          <div>{props.date}</div>
          <div className="fs-4"><button className="border-0 bg-body" value={props.id} onClick={deleteNoteHandler}><RiDeleteBin5Fill /></button></div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Note;
