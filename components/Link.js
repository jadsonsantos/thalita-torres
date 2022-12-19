import { Link as NextLink } from 'next'

const Link = ({ isExternal = false, children, ...props }) => {
  if (isExternal) {
    return (
      <a target="blank" rel="noopener" className="external-link" {...props}>
        {children}
      </a>
    )
  }

  return <NextLink {...props}>{children}</NextLink>
}

export default Link
