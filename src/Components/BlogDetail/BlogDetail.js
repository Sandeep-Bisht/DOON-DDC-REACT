
import "../../Css/Common.css";
import "../../Css/BlogDetail.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Images from '../../Util/Images'
import { url } from "../../Util/url";
import { useEffect } from "react";

const BlogDetail = () => {
    const param = useParams()

    const location = useLocation();
    const state = location.state;
   console.log(url, 'sajnfkjlsfksaf')
    
  useEffect(()=> {
    if(param.id){
        getBlogDetailBySlug(param.id);
    }
  }, [])

  const getBlogDetailBySlug = async(slug) => {
    // let url = "http://localhost:4000/api/blog/get_blog_by_slug";
    let url = "http://185.239.209.106:4800/api/blog/get_blog_by_slug";
    
    let payload = {
        slug : slug
    }    
    try {
        let response = await axios.post( url, payload);
        if(response){
            console.log(response, "api responseeeeee")
        }
        
    } catch (error) {
        console.log("error", error)
    }
  }

    return (
        <>
            <section className="blog-detail">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 mx-auto">
                            <div className="blog-detail-wrapper">
                                <div className="blog-detail-pic-box">
                                    <img src={`${url}/${state.featuredImage.path}`} className="img-fluid" alt="" />
                                    <p className="blog-pic-name">{state.title}</p>
                                    <p className="blog-pic-date">
                                        {/* July 2, 2020 */}
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-8">
                                <p className="blog-detail-title">
                                    {state?.title}
                                </p>
                                <p className="blog-pic-date">
                                        September 23, 2023
                                    </p>
                                {/* <p className="blog-detail-subtitle">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                    there live the blind texts.</p>
                                <img src={`http://localhost:400/${state?.featuredImage.path}`} className="img-fluid single-blog-pic" alt="" />
                                <p className="blog-detail-subtitle my-2 text-start">
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated
                                    they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p className="blog-detail-subtitle my-2 text-start">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <blockquote>
                                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                                </blockquote>
                                <p className="blog-detail-subtitle my-2 text-start">
                                    Even the all-powerful Pointing has no control about the blind texts it is an
                                    almost unorthographic life One day however a small line of blind text by the name of Lorem
                                    Ipsum decided to leave for the far World of Grammar.</p>
                                <p className="blog-detail-subtitle my-2 text-start">
                                    When she reached th
                                    e first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p> */}

                                    <p>{state.content}</p>
                               
                            </div>
                        </div>
                    </div>
                
            </section>
            <section className="blog-detail-related">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="common-heading d-flex align-items-center justify-content-center">
                                <span className="bar one"></span>Related Post<span className="bar two"></span></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="related-card">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="realted-card-pic">
                                            <img src={Images.singleBlogPic} className="img-fluid " alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="related-card-content">
                                            <div className="top">
                                                <p>Business, Travel<span>— July 2, 2020</span></p>
                                            </div>
                                            <div className="middle">
                                                <p className="middle-title">
                                                    Your most unhappy customers are your greatest source of learning.
                                                </p>
                                                <p className="middle-subtitle">
                                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                                </p>
                                            </div>
                                            <div className="lower">
                                                <div className="published-pic">
                                                    <img src={Images.blogPic} className="img-fluid" alt="" />
                                                </div>
                                                <div className="published-content">
                                                    <p className="published-title">
                                                        Sergy Campbell
                                                    </p>
                                                    <p className="published-date">
                                                        Author, 26 published post
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="related-card">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="realted-card-pic">
                                            <img
                                                src={Images.scope1}
                                                className="img-fluid"
                                                alt="scope-pic"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="related-card-content">
                                            <div className="top">
                                                <p>Business, Travel<span>— July 2, 2020</span></p>
                                            </div>
                                            <div className="middle">
                                                <p className="middle-title">
                                                    Your most unhappy customers are your greatest source of learning.
                                                </p>
                                                <p className="middle-subtitle">
                                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                                </p>
                                            </div>
                                            <div className="lower">
                                                <div className="published-pic">
                                                    <img src={Images.blogPic} className="img-fluid" alt="" />

                                                </div>
                                                <div className="published-content">
                                                    <p className="published-title">
                                                        Sergy Campbell   111
                                                    </p>
                                                    <p className="published-date">
                                                        Author, 26 published post
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="related-card">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="realted-card-pic">
                                            <img src={Images.singleBlogPic} className="img-fluid " alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="related-card-content">
                                            <div className="top">
                                                <p>Business, Travel<span>— July 2, 2020</span></p>
                                            </div>
                                            <div className="middle">
                                                <p className="middle-title">
                                                    Your most unhappy customers are your greatest source of learning.
                                                </p>
                                                <p className="middle-subtitle">
                                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                                </p>
                                            </div>
                                            <div className="lower">
                                                <div className="published-pic">
                                                    <img src={Images.blogPic} className="img-fluid" alt="" />
                                                </div>
                                                <div className="published-content">
                                                    <p className="published-title">
                                                        Sergy Campbell
                                                    </p>
                                                    <p className="published-date">
                                                        Author, 26 published post
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;
