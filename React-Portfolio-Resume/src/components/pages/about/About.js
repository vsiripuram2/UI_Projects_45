import React from 'react';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          extensive Professional experience in Web Development, designing User Interface (UI) applications and web applications.
          Well versed with Software Development Life Cycle process which includes designing, developing, testing and implementation
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Hyderabad, Telangana
              </p>
              <p>
                <strong>Email:</strong> vsiripuram.ui2@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 9676708306
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Telugu
              </p>
              <p>
                <strong>Third Language</strong> - Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
