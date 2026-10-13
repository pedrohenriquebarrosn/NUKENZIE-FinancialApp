export const Button = ({ className, func, children, type = "button", ...props }) => (
  <button type={type} className={className} onClick={func} {...props}>
    {children}
  </button>
);
