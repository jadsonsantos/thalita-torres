const Link = ({ children, ...props }) => {
  return (
    <a
      target="blank"
      rel="noopener noreferrer"
      className="external-link"
      {...props}
    >
      {children}
    </a>
  )
}

export default Link
