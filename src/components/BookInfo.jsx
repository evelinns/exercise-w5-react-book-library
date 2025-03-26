export const BookInfo = (props) => {
  return <div>
    <p>Year: {props.year}</p>
    <p>Genre: {props.genre}</p>
    <p>Rating: {props.rating}</p>
    <p>Description: {props.description}</p>
  </div>
}