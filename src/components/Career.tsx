import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Graphic Designer</h4>
                <h5>Kerv</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Specializing in creating impactful brand experiences through design, motion, and storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Graphic Designer</h4>
                <h5>Wiggles India</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Graphic Design, Print & Branding Design, Social Media Campaigns (Graphics & Video)
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Graphic Designer</h4>
                <h5>JW Design Studio</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Art Direction, Video Production, and Motion Graphics
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Graphic Designer</h4>
                <h5>Pushpam Group</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Presentation Design, UI/UX Design, and more.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Freelancer / AD Matters / Media Solutions</h5>
              </div>
              <h3>2015</h3>
            </div>
            <p>
              Gained foundational graphic design experience working at Media Solutions (2015), AD Matters (2016), and as a Freelancer (2017).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
