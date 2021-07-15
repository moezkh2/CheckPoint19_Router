import { Button, Card } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';
/*fill the card with the movie data using props */
const MovieCard = (props) => {

  return (
    <div>
      <Card style={{ width: '18rem' }} className="Card">
        <Button variant="danger" style={{ display: props.btnRemove }} onClick={() => { props.removeMovie(props.title) }}>Remove</Button>
        <Card.Img variant="top" src={props.posterURL} style={{ height: '11rem' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <StarRatingComponent value={props.rating}></StarRatingComponent>
          <div>
            <Link to={`/Description/:${props.title}`} style={{ backgroundColor: "#0099cc", color: "white", padding: "14px 25px", textAlign: "center", textDecoration: "none" }} >Trailer</Link>
          </div>
        </Card.Body>
      </Card>

    </div>
  );
}
export default MovieCard;