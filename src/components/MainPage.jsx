import BlogPost from "./BlogPost"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

const MainPage = ({blogInfo, headerInfo, navInfo, footerInfo}) => {
  return (
    <div className="mainPagesContainer">
        <Header headers={headerInfo}/>

        <nav className="navigationSection">
          <ul className="navsContainer">
            {navInfo.map((navs => 
              <Navbar info={navs}/>
            ))}
          </ul>
        </nav>

        <div className="blogsContainer">
          {blogInfo.map((blogs => 
              <BlogPost info={blogs}/>
          ))}
        </div>

      <nav className="navigationSection">
        <ul className="footersContainer">
          {footerInfo.map((footers => 
            <Footer info={footers}/>
          ))}
        </ul>
      </nav>
      <div className="copyRight">&copy; 2013 Valet Industries. Inc</div>
    </div>
  )
}
export default MainPage