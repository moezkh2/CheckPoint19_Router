import {Button,Card} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard=(props)=>{
    return (
        <Card style={{ width: '18rem'}} className="Card">
          <Button variant="danger" style={{display : props.btnRemove}} onClick={()=>{props.removeMovie(props.title)}}>Remove</Button>
        <Card.Img variant="top" src={props.posterURL} style={{height:'11rem'}} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <StarRatingComponent value={props.rating}></StarRatingComponent>
          <div>
            <Button variant="primary">Details</Button>
          </div>
        </Card.Body>
      </Card>
    );
}
export default MovieCard;