import React from 'react';
import author from '../assets/img/me.jpg';

const Author = () => {
  return(
  <div id="author">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-5" id="author-image">
          <img src={author} alt="" className="img-fluid rounded"/>
          <h5 className="pt-2 font-weight-bold">Alisher Musurmonov</h5>
          <h6>Web Developer & CEO of <a href="https://aliglob.com">Ali Globalization</a></h6>
          <div id="social-link">
            <a href="mailto:alisher.musurmonov89@gamil.com?Subject=Message%20from%20CodePerformer" className="mx-2"><i className="fa fa-envelope-o text-danger" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/alisher-musurmonov/" className="mx-2"><i className="fa fa-linkedin-square text-primary" aria-hidden="true"></i></a>
            <a href="https://github.com/Alisher778" className="mx-2"><i className="fa fa-github text-dark" aria-hidden="true"></i></a>
            <a href="https://twitter.com/AliGlob" className="mx-2"><i className="fa fa-twitter text-primary" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-md-7">
          <h1 className="font-weight-bold text-center">Author of CodePerformer</h1>
          <h4 className="text-center mb-3 font-weight-bold">Talanted & Self-Motivated Developer</h4>
          <p className="lead">
            Hi, I am Alisher and full-stack web developer who graduated from <a href="https://nycda.com" target="_blank">NYCDA</a>. I am currently working at Vector Moving as a lead developer and freelancing at my free time.
          </p> 
          <p className="lead">
            I created this app to challange my skills and most importantly to share something useful with web developers community. Always try to build any type of applications to sharpen your developer skills. Happy Coding!
          </p>
          <blockquote className="lead">
            Alisher's a budding developer with the sort of talent, tenacity and intellect that firm's yearn for as part of core staff. Collaborating with him at NYCDA, he demonstrated an impressive ability to decipher challenging frameworks, and build functional, sophisticated codebase.
            <p>By Christopher Barriteau</p>
          </blockquote>
          <a href="https://alisher.me" target="_blank" className="btn btn-lg btn-primary text-center">Learn More</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Author;
