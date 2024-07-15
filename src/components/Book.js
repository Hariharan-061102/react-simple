import StarRating from "./StarRating";

const Book = (props) => {
  const { img, title, author, number } = props;

  return (
    <article className="book">
      <span className="number">{`#${number + 1}`}</span>
      <img src={img} alt={title} />
      <StarRating></StarRating>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onclick="addToCart('Book Title', 'John Doe')">Add to Cart</button>
    </article>
  );
};

export default Book;
