
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

    useEffect(() => {
        if (param.id) {
            getBlogDetailBySlug(param.id);
        }
    }, [])

    const getBlogDetailBySlug = async (slug) => {
        // let url = "http://localhost:4000/api/blog/get_blog_by_slug";
        let url = "http://185.239.209.106:4800/api/blog/get_blog_by_slug";

        let payload = {
            slug: slug
        }
        try {
            let response = await axios.post(url, payload);
            if (response) {
                console.log(response, "api responseeeeee")
            }

        } catch (error) {
            console.log("error", error)
        }
    }

    return (
        <>
            <section className="blog-detail single-blog-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="blog-left-wrapper">
                                <div className="row">
                                <div className="col-lg-12 ">
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
                                <div className="col-lg-12 mt-lg-5">
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

                                    <p className="my-2">{state.content}</p>
                                    <p className="my-2"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <p className="my-2"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </div>
                                </div></div>
                               
                            </div>
                            <div className="col-lg-3">
                                <div class="blog-right-wrapper">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="search-box">
                                                <div class="search-box-wrapper">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                            <div class="input-group-append">
                                                                <button class="btn search-btn" type="button">
                                                                    <svg class="svg-inline--fa fa-search fa-w-16" 
                                                                    aria-hidden="true" focusable="false" data-prefix="far" 
                                                                    data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" 
                                                                    viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" 
                                                                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                                                                    </button>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <p class="blog-right-wrapper-heading">Recent Posts</p>
                                            <div class="recent-post-box">
                                                <p class="border-0">
                                                    <a href="#">Company Launches New Software Channel</a>
                                                </p>
                                                <p><a href="#">Paves The way for an eventual merger</a></p>
                                                <p><a href="#">Three quarters of construction workers...</a></p>
                                                <p><a href="#">Retail banks wake up to digital lending</a></p>
                                                <p><a href="#">design breakthrough updates products</a></p>
                                            </div>
                                            <div class="separator"></div>
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
