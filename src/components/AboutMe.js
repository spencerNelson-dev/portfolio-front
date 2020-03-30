import React from 'react';
import Header from './Header';

function AboutMe(props) {
    return (
        <div>
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
            <Header></Header>

            <main class="mdl-layout__content">
      <div class="site-content">
        <div class="mdl-grid site-max-width">
          <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp page-content">
            <div class="mdl-card__title">
              <h1 class="mdl-card__title-text">About</h1>
            </div>
            <div class="mdl-card__media">
                {/* <img class="article-image" src="images/about.jpg" border="0" alt="About"/> */}
            </div>
            <div class="mdl-grid site-copy">
              <div class="mdl-cell mdl-cell--12-col">
                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
                <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                  <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                    approaches to corporate strategy foster collaborative thinking to further the overall value
                    proposition. Organically grow the holistic world view of disruptive innovation via workplace
                    diversity and empowerment.</p>
                  <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the
                    day, going forward, a new normal that has evolved from generation X is on the runway heading towards
                    a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
                    offshoring.</p>
                </div>


                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Mission</h3>
                <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                  <p>
                    Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override
                    the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the
                    information highway will close the loop on focusing solely on the bottom line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="mdl-mini-footer">
        <div class="footer-container">
          <div class="mdl-logo">&copy; Unitiled. Design: <a href="https://templateflip.com/"
              target="_blank">TemplateFlip</a></div>
          <ul class="mdl-mini-footer__link-list">
            <li><a href="#">Privacy & Terms</a></li>
          </ul>
        </div>
      </footer>
    </main>
            </div>
        </div>
    );
}

export default AboutMe;