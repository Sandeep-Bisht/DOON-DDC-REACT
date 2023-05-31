
import "../../Css/Common.css";
import "../../Css/BlogDetail.css";
import Images from '../../Util/Images'

const BlogDetail = () => {
  return (
    <>
       <section className="blog-detail">
          <div className="container">
              <div className="row justify-content-center">
                   <div className="col-lg-8 mx-auto">
                      <div className="blog-detail-wrapper">
                          <div className="blog-detail-pic-box">
                             <img src={Images.blogPic} className="img-fluid" alt="" />
                             <p className="blog-pic-name">Ketty Perry</p>
                             <p className="blog-pic-date">
                                July 2, 2020
                             </p>
                          </div>
                          <p className="blog-detail-title">
                          Your most unhappy customers are your greatest source of learning.
                          </p>
                          <p className="blog-detail-subtitle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                          there live the blind texts.</p>
                          <img src={Images.singleBlogPic} className="img-fluid single-blog-pic" alt="" />
                          <p className="blog-detail-subtitle mt-3 text-start">
                          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                      </div>
                   </div>
              </div>
          </div>
       </section>
    </>
  );
};

export default BlogDetail;
