<script>
  import { about } from "../strings.js";
</script>

<style>
  .about {
    text-align: left;
    max-width: 1000px;
    position: relative;
    margin: 0 auto;
  }
  .about div {
    margin-bottom: 80px;
  }
  .about p {
    font-size: 20px;
    margin-bottom: 10px;
  }


  .contact-link {
    background: #0f0f0f;
    color: white;
    padding: 10px 30px;
    margin-top: 30px;
    font-weight: 100;
    transition: all 150ms;
  }
  .contact-link:hover,
  .contact-link:active {
    background: #757575;
  }

  .about-link {
    font-size: 20px;
    color: #757575;
    text-decoration: underline;
    text-decoration-color: #757575;
  }

  .about-link:hover {
    text-decoration-color: #0f0f0f;
    color: #0f0f0f;
  }

  .certification-badge {
    height: 100px;
    width: auto;
    margin-top: 5px;
  }
</style>

<div class="about">
  <div>
    <p>Hi, I'm Will!</p>
    <p>
      I'm a Software Engineer experienced in full-stack and mobile development.
    </p>
    <p>
      I live in Chicago with my wife and dog, and work for
      Blue Raster utilizing Esri's ArcGIS technology to build solutions for
      non-profit, government, and commercial organizations.
    </p>
    <p>
      Since joining the Blue Raster team, my work has been demoed in front of
      thousands of users at Esri's User Conference 2019, I've developed Azure
      solutions for nationally recognized companies, and solved 2 year old
      problems for one of our longest-standing clients. I may not be able to
      mention them here, but I'm not aversed to a name-drop or two should you
      decide to reach out!
    </p>
    <p>
      Outside of my day-to-day, I am the tech lead, and co-founder, of Jenix
      Technologies LTD - a software development company building iOS and
      Android applications. <a class="about-link" href="https://www.lemmichat.com" target="_default">Lemmi</a>, our flagship app, is now available on both platforms.
    </p>
    <img
      class="certification-badge"
      src={`images/azure-developer-associate.png`}
      alt="Azure Developer Associate Badge" />
    <img
      class="certification-badge"
      src={`images/aws-developer-associate.png`}
      alt="AWS Developer Associate Badge" />
  </div>
  <a class="contact-link" href={about.email.url} target="_blank">{about.email.label}</a>
</div>
