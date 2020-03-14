<script>
  import { about } from "../strings.js";
</script>

<style>
  .about {
    text-align: left;
    max-width: 800px;
  }
  .about div {
    margin-bottom: 80px;
  }
  .about p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .about a {
    background: #0f0f0f;
    color: white;
    padding: 10px 30px;
    margin-top: 30px;
    font-weight: 100;
    transition: all 150ms;
  }
  .about a:hover,
  .about a:active {
    background: #757575;
  }
</style>

<div class="about">
  <div>
    <p>
      Hello, I'm Will. I'm a Software Developer experienced in building
      full-stack and hybrid mobile applications. When I'm not buried in the
      front-end, I create native apps for Android and iOS.
    </p>
    <p>
      I currently live in Arlington, Virginia, with my wife and dog, and work
      for Blue Raster utilizing Esri's ArcGIS technology to build solutions for
      non-profit, government, and commercial organizations. Since joining the
      team, my work has been demoed in front of thousands of users at Esri's
      User Conference 2019, I've developed Azure solutions for a national real
      estate company, and solved 2 year old problems for one of the Blue
      Raster's longest-standing clients.
    </p>
    <p>
      Outside of work, I am the developer and co-founder of a software company
      focusing on iOS and Android development. Lemmi, our flagship application,
      is slated for release in Q3 2020.
    </p>
  </div>
  <a href={about.email.url} target="_blank">{about.email.label}</a>
</div>
