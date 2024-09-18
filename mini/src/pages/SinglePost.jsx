import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

function SinglePost() {
  return (
    <>

        {/* Breadcrumb area start */}
        <Breadcrumbs page="Single Post" title="Mini's Single Post" />
        {/* Breadcrumb area end */}
    
        {/* Page content area start */}
        <section className="content">
            {/* Blog section start */}
            <div className="theme-section gray-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5">
                            <aside className="single-widget">
                                <div className="search-widget">
                                    <form action="#" className="search-form">
                                        <input type="text" placeholder="search...."/>
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </aside>
                            <aside className="single-widget">
                                <h4 className="widget-title">About author</h4>
                                <div className="widget-content">
                                    <div className="author-thumbnail">
                                        <img src="/assets/img/avatars/author.jpg" alt=""/>
                                    </div>
                                    <div className="author-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet suscipit voluptatum, quis labore amet laborum sequi nisi, odio ipsum molestias.</p>
                                        <ul className="social-memu">
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                            <aside className="single-widget">
                                <h4 className="widget-title">Categories</h4>
                                <ul className="post-cat-list">
                                    <li><a href="#">design <span>[9]</span></a></li>
                                    <li><a href="#">animation <span>[5]</span></a></li>
                                    <li><a href="#">game <span>[7]</span></a></li>
                                    <li><a href="#">robotics <span>[6]</span></a></li>
                                </ul>
                            </aside>
                            <aside className="single-widget">
                                <h4 className="widget-title">Tags</h4>
                                <div className="tags">
                                    <a href="#">design</a>
                                    <a href="#">template</a>
                                    <a href="#">theme-forest</a>
                                    <a href="#">game</a>
                                    <a href="#">art</a>
                                    <a href="#">robotics</a>
                                </div>
                            </aside>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <article className="single-blog-post">
                                <div className="post-thumbnail">
                                    <div className="single-post-thumbnail">
                                        <a href="img/blog/single-post/1.jpg"><img className="img-responsive" src="/assets/img/blog/single-post/1.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-post-thumbnail">
                                        <a href="img/blog/single-post/2.jpg"><img className="img-responsive" src="/assets/img/blog/single-post/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-post-thumbnail">
                                        <a href="img/blog/single-post/3.jpg"><img className="img-responsive" src="/assets/img/blog/single-post/3.jpg" alt=""/></a>
                                    </div>
                                </div>
                                <div className="single-post-content">
                                    <div className="post-content-inner">
                                        <h3 className="post-title">Single Post Title</h3>
                                        <ul className="meta-info">
                                            <li><a href="#"><i className="fa fa-user"></i>admin</a></li>
                                            <li><a href="#"><i className="fa fa-calendar"></i>jul 24, 2018</a></li>
                                            <li><a href="#"><i className="fa fa-tag"></i>game</a></li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nisi odit quam, numquam rerum, libero, harum iste quaerat dolores laborum error ratione minima iure qui! Dolorum nemo magnam debitis ipsam, quos hic rerum amet in quasi veritatis quia error voluptas animi eius ut perferendis repellat odio nesciunt cupiditate esse. Atque assumenda provident porro, consequuntur. Ipsa quisquam odit, perspiciatis illo doloremque?</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo non quae provident impedit nobis officiis ipsum necessitatibus reiciendis natus voluptates, et? Id reiciendis consectetur, maiores sunt reprehenderit quam magnam fuga illum rerum. Commodi molestiae autem non ad obcaecati illo sed, fugit maxime odio reiciendis nesciunt quia laborum porro, odit, ratione.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quaerat alias fugit consequuntur tempora cupiditate, eveniet neque fugiat ratione quasi a reiciendis, accusantium dolorum harum voluptas nostrum esse libero soluta inventore sunt. Iusto possimus, dolore reiciendis esse recusandae aliquid veniam.</p>
                                        <ul className="post-object-list">
                                            <li>Stay Hungry, Stay Foolish.</li>
                                            <li>I am trying to find myself. Sometimes that's not easy</li>
                                            <li>Life isn't about finding yourself, Life is about creating yourself.</li>
                                            <li>If you don’t ask, You won’t get.</li>
                                            <li>Be great, Be bold, Be grand.</li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus fuga tempora voluptates, odio quisquam sapiente vitae veniam in rem esse iusto dolores pariatur dicta.</p>
                                        <blockquote className="blockquote">
                                            <p>"Really, when I look back on it, I wouldn’t change a thing. I mean, it was so important for me to lose everything because I found out what the most important thing is ... to be true to yourself. Ultimately, that’s what’s gotten me to this place. I don’t live in fear. I’m free. I have no secrets and I know I’ll always be OK, because no matter what, I know who I am."</p>
                                            <span>~Ellen DeGeneres</span>
                                        </blockquote>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et deleniti impedit possimus voluptate enim, rem, fugiat ad ab, ipsam placeat, officia dolorum? Rerum voluptatum molestiae quasi magnam, veritatis expedita qui, laudantium aut, ullam similique eius adipisci odio, itaque ducimus natus.</p>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="post-content-description-inner">
                                                    <img src="/assets/img/blog/1.jpg" alt=""/>
                                                    <p className="thumbnail-title">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="post-content-description-inner">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi necessitatibus autem, earum reiciendis magni cumque nobise. Magni, eius! In architecto perferendis reiciendis molestias dolores nesciunt incidunt sunt libero.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi necessitatibus autem, earum reiciendis magni cumque nobis, non asperiores quidem dignissimos minus. Accusantium hic esse recusandae provident laudantium cum reprehenderit facilis corporis vero aspernatur, quasi quidem qui a dolore.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt perferendis modi architecto praesentium ad illum corporis. Fugiat expedita, alias qui corporis animi iusto pariatur deleniti non veniam aperiam quidem id. Exercitationem fuga, harum voluptates porro minima vitae accusamus quam unde?</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi perspiciatis vero deleniti quaerat quia. Nam, impedit, minima! Voluptatibus commodi ullam praesentium placeat, sapiente cumque. Sint at neque, eveniet, consequatur dignissimos provident dolor natus perferendis ratione unde temporibus. Quia, repudiandae, voluptate.</p>
                                        <div className="post-footer">
                                            <div className="post-tag">
                                                <a href="#">design</a>
                                                <a href="#">game</a>
                                                <a href="#">robotics</a>
                                            </div>
                                            <div className="share-post">
                                                <ul className="share-site-list">
                                                    <li>share:</li>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <div className="comment-section">
                                <div className="blog-comment-section">
                                    <h4 className="comment-section-title">comments <span>3</span></h4>
                                    <ul className="media-list">
                                        <li className="media">
                                            <div className="media-left">
                                                <a href="#"><img src="/assets/img/avatars/1.jpg" alt=""/></a>
                                            </div>
                                            <div className="media-body">
                                                <h5><a href="#">john doe</a></h5>
                                                <p>
                                                    <i className="fa fa-calendar"></i><span>May 13, 2017 at 11:39 am</span>
                                                </p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quae dolorem aut, distinctio et nisi laudantium eveniet totam nobis vero.</p>
                                                <ul className="post-like">
                                                    <li><a href="#"><i className="fa fa-thumbs-o-up"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-thumbs-o-down"></i></a></li>
                                                </ul>
                                                <a href="#" className="reply-link">reply
                                                    <i className="fa fa-reply"></i>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="media-replay">
                                            <div className="media-left">
                                                <a href="#"><img src="/assets/img/avatars/2.jpg" alt=""/></a>
                                            </div>
                                            <div className="media-body">
                                                <h5><a href="#">Liam Neeson</a></h5>
                                                <p>
                                                    <i className="fa fa-calendar"></i><span>May 13, 2017 at 11:39 am</span>
                                                </p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quae dolorem aut, distinctio et nisi laudantium eveniet totam nobis vero.</p>
                                                <ul className="post-like">
                                                    <li><a href="#"><i className="fa fa-thumbs-o-up"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-thumbs-o-down"></i></a></li>
                                                </ul>
                                                <a href="#" className="reply-link">reply
                                                    <i className="fa fa-reply"></i>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="media">
                                            <div className="media-left">
                                                <a href="#"><img src="/assets/img/avatars/3.jpg" alt=""/></a>
                                            </div>
                                            <div className="media-body">
                                                <h5><a href="#">Adam smith</a></h5>
                                                <p>
                                                    <i className="fa fa-calendar"></i><span>May 13, 2017 at 11:39 am</span>
                                                </p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quae dolorem aut, distinctio et nisi laudantium eveniet totam nobis vero.</p>
                                                <ul className="post-like">
                                                    <li><a href="#"><i className="fa fa-thumbs-o-up"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-thumbs-o-down"></i></a></li>
                                                </ul>
                                                <a href="#" className="reply-link">reply
                                                    <i className="fa fa-reply"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="blog-comment-form">
                                    <h4>leave your comments</h4>
                                    <div className="comment-form">
                                        <form id="mini-comment-form">
                                            <div className="form-group row">
                                                <div className="col-sm-6">
                                                    <input type="text" className="form-control" placeholder="name" required/>
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="email" className="form-control" placeholder="email" required/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="comment"></textarea>
                                            </div>
                                            <div className="check-box">
                                                <input type="checkbox" name="vehicle" value="Car" checked id="check-box-l"/>
                                                <label for="check-box-l">Keep me in touch in this conversation</label>
                                            </div>
                                            <button type="submit" className="button btn-white-left btn-white-bg">post comment</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog section end */}
        </section>
        {/* Page content area end */}
    </>
  )
}

export default SinglePost