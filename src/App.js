import './App.css';
import MainPage from './components/MainPage';

function App() {
    const blogItems = [
      {
        date: "11/12/20",
        title: "On the Street in Brooklyn",
        image: "blog-image-1.jpg",
        paragraph: "Cugiat laboris sunt nisi labore anim ipsum sit. Ut quis mollit qui eu magna est sit ut elit irure sit sunt minim. Nulla elit proident ut aute consectetur. Pariatur sint incididunt dolor excepteur reprehenderit aliquip ipsum in consectetur voluptate dolor ea enim id. Elit cupidatat ut aliqua eu aute aliquip id amet deserunt sit enim deserunt. Duis fugiat proident ea do elit ex exercitation excepteur duis irure ut. Ad quis non commodo sunt laborum ipsum nostrud ea proident. Proident incididunt laboris laboris duis magna ut consectetur culpa cupidatat elit et adipisicing. Commodo sint eu mollit exercitation anim esse labore elit. Consectetur cupidatat Lorem deserunt consectetur ut id magna do ad quis sunt reprehenderit. Nostrud occaecat nisi enim cillum officia nulla adipisicing. Lorem anim fugiat occaecat id irure. Cillum incididunt in irure pariatur veniam aute duis fugiat tempor in exercitation laboris."
      },
      {
      date: "11/11/20",
      title: "Vintage in Vogue",
      image: "blog-image-2.jpg",
      paragraph: "Sugiat laboris sunt nisi labore anim ipsum sit. Ut quis mollit qui eu magna est sit ut elit irure sit sunt minim. Nulla elit proident ut aute consectetur. Pariatur sint incididunt dolor excepteur reprehenderit aliquip ipsum in consectetur voluptate dolor ea enim id. Elit cupidatat ut aliqua eu aute aliquip id amet deserunt sit enim deserunt. Duis fugiat proident ea do elit ex exercitation excepteur duis irure ut. Ad quis non commodo sunt laborum ipsum nostrud ea proident. Eiusmod dolore ullamco laborum occaecat incididunt Lorem fugiat ad qui duis aliqua qui dolor proident. Elit sunt ipsum sit amet sit incididunt sit. Quis excepteur Lorem quis sint ad adipisicing pariatur nisi velit est aliqua in sunt. Amet laboris laboris amet fugiat sunt. Non sint nostrud ipsum adipisicing fugiat veniam consectetur nostrud pariatur sit cupidatat sint. Nostrud occaecat fugiat qui elit et Lorem ipsum voluptate ad qui ut. Nostrud velit aliquip amet aute reprehenderit ex Lorem."
    },
    ]
    const headerItems = ["Sartre's List", "Better-Dressed People"]
    const navItems = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"]
    const footerItems = ["Home", "Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About", "Tips"]
  return (
    <body className="App">
      <MainPage blogInfo={blogItems} headerInfo={headerItems} navInfo={navItems} footerInfo={footerItems}/>
    </body>
  );
}

export default App;