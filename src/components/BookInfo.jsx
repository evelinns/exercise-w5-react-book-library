export const BookInfo = (props) => {
  return <div>
    <p><strong>Year:</strong> {props.year}</p>
    <p><strong>Genre:</strong> {props.genre}</p>
    <p><strong>Rating:</strong> {props.rating}</p>
    <p><strong>Description:</strong> <span className="description">{props.description}</span></p>
  </div>
}