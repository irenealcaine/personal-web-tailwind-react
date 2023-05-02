const Button = ({ href, text, style, className }) => {
  let styles = "";
  if (style === "primary") {
    styles = "bg-violet-700";
  } else {
    styles = "bg-white";
  }
  return (
    <a href={href} className={`${styles} font-caveat px-4 py-2 m-2 rounded-lg border-2 ${className}`}>
      {text}
    </a>
  );
};

export default Button;