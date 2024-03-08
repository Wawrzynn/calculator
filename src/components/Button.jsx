const Button = ({ children, onClick }) => {
  return (
    <button
      className="text-white p-10 bg-gray-600 rounded-2xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
