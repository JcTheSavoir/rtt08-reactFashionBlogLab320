const Header = ({headers}) => {
  return (
    <div className="headersContainer">
      <h1 className="headerTitle">{headers[0]}</h1>
      <h2 className="headerSubtitle">{headers[1]}</h2>
    </div>
  )
}
export default Header