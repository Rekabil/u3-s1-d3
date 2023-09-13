import { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    return (
      <Col sm={6} lg={4} xl={2} className="mb-2 px-1" key={this.props.asin}>
        <Link to={"/movie-details/" + this.props.id}>
          <img className="img-fluid" src={this.props.src} alt="movie" />
        </Link>
      </Col>
    );
  }
}
export default Movie;
