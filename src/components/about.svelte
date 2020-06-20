<script>
  import { about, navigation } from "../strings.js";
  export let handleClickNavigation;
</script>

<style>
  .about {
    text-align: left;
    max-width: 1000px;
    position: relative;
    margin: 0 auto;
  }

  .about .back-button {
    position: absolute;
    top: -35px;
    display: flex;
    align-items: center;
  }

  .about .back-button p {
    margin: 0;
  }

  .about .back-button:hover > svg path:first-of-type,
  .about .back-button:focus > svg path:first-of-type {
    fill: #0f0f0f;
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

  .certification-badge {
    height: 100px;
    width: auto;
    margin-top: 5px;
  }
</style>

<div class="about">
  <div
    class="back-button"
    on:click={() => handleClickNavigation(navigation.work)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24">
      <path
        d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
        fill="#757575" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
    <button>Back</button>
  </div>
  <div>
    <p>Hi, I'm Will!</p>
    <p>
      I'm a Software Engineer experienced in full-stack and mobile development.
      Also certified in building cloud-based solutions with Microsoft Azure and
      AWS.
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
    <img
      class="certification-badge"
      src={`images/azure-developer-associate.png`}
      alt="Azure Developer Associate Badge" />
    <img
      class="certification-badge"
      src={`images/aws-developer-associate.png`}
      alt="AWS Developer Associate Badge" />
  </div>
  <a href={about.email.url} target="_blank">{about.email.label}</a>
</div>
