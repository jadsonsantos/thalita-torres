const Text = ({ size, children, ...props }) => {
  const CustomTagName = props.type || 'p'

  return <CustomTagName {...props}>{children}</CustomTagName>
}

export default Text
