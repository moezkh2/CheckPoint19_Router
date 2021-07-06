import { useState } from 'react';
import {Form,Col,Row,Button, Modal} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import 'bootstrap/dist/css/bootstrap.min.css';
const FormMovies=(props)=>{
const [newMovieState,setnewMovieState]=useState({title:"",description:"",posterURL:"",rating:0})
const hendelForm=(e)=>{
        setnewMovieState({...newMovieState,[e.target.name] : e.target.value})
    }
const hendelStarR=(nextValue, prevValue, name)=>{setnewMovieState({...newMovieState,[name]: nextValue})}
const [show, setShow] = useState(false);
const handleClose = () =>{setnewMovieState({title:"",description:"",posterURL:"",rating:0}); setShow(false)};
const handleShow = () => setShow(true);
return(
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add movie</Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm="2">
                        title
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="title" placeholder="title" onChange={hendelForm} />
                    </Col>
                    </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        description
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="description" placeholder="description" onChange={hendelForm}/>
                    </Col>
                    </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        posterURL
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" name="posterURL" placeholder="posterURL" onChange={hendelForm} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                        Rating
                    </Form.Label>
                    <Col sm="3">
                        <StarRatingComponent name="rating"  onStarClick={hendelStarR}></StarRatingComponent>
                    </Col>
                </Form.Group>  
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={()=>{props.addMovie(newMovieState)}}>
                Add
            </Button>
        </Modal.Footer>
    </Modal>
    </>

);
}
export default FormMovies;