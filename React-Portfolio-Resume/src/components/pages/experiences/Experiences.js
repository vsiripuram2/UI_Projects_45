import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2020</strong> - Mar
                <strong>2024</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>WEB DEVELOPER - Infosys Limited</strong>
                </h6>
                <p>
                Worked on ReactJS Virtual Dom and React views, rendering using components which contains additional components called custom HTML tags.
                Involved in designing and developing the web pages using HTML 5, CSS3, JavaScript, Bootstrap, SASS, LESS, ReactJS, Redux, Flux,NodeJS, Mango DB.

                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2018</strong> - Oct
                <strong>2019</strong> 
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>UI DEVELOPER - Arcean Inc</strong>
                </h6>
                <p>
                Developed a web application by using Angular4/5 as front-end by using Web API to receive and pass data to back end.
              	Designed and developed web pages using with HTML5, DHTML, XHTML, CSS3, Ajax, based on the W3C standards and Web 2.0
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
