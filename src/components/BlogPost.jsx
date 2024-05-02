const BlogPost = ({info}) => {
  return (
    <article className="eachBlogContainer">
      <div className="blogDate">{info.date}</div>
      <div className="blogTitle">{info.title}</div>
      <img src={info.image} alt="" className="blogImage" />
      <p className="blogParagraph">{info.paragraph}</p>
      <div className="buttonContinue">Continues ...</div>
    </article>
  )
}
export default BlogPost