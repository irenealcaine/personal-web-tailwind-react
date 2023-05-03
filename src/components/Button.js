const Button = ({ href, text, design, className }) => {
  let designs = "";
  if (design === "primary") {
    designs =
      "shadow text-white bg-violet-900 hover:bg-transparent border-violet-900 ";
  } else {
    designs =
      "shadow-secondary text-violet-900 hover:text-white bg-white hover:bg-transparent border-white";
  }
  return (
    <a
      href={href}
      className={`${designs} inline-block font-caveat text-xl text-center px-6 py-1 border-2 rounded-lg transition-all duration-500 ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
