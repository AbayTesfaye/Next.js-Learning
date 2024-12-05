function Card({ children }) {
  return (
    <div className="flex justify-center items-center m-8 p-8 border border-gray-300 shadow-md">
      {children}
    </div>
  );
}

export default Card;
