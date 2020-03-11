<script>
  import { beforeUpdate } from "svelte";
  import { projects, navigation } from "../strings.js";
  export let handleClickNavigation;
  export let handleClickProject;
  export let selectedProject;
  let project = projects.find(
    p => p.title.toLowerCase() === selectedProject.toLowerCase()
  );
  let projectID = projects.indexOf(project);
  beforeUpdate(() => {
    project = projects.find(
      p => p.title.toLowerCase() === selectedProject.toLowerCase()
    );
  });
</script>

<style>
  .project-details-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .project-image {
    width: 100%;
    border-radius: 5px;
  }
  .project-mobile-image {
    height: 500px;
  }
  .project-details {
    margin-top: 50px;
    display: flex;
  }
  .project-info {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .project-info .title {
    font-size: 28px;
    margin: 0;
    color: rgb(15, 15, 15);
  }
  .project-info .description {
    font-size: 18px;
    text-align: left;
    color: rgb(117, 117, 117);
  }
  .project-info .sub-title {
    margin: 15px 0;
    color: rgb(15, 15, 15);
  }
  .tech-stack {
    text-align: left;
  }
  .tools {
    margin: 5px 0;
    color: rgb(15, 15, 15);
  }
  .tools span {
    color: rgb(117, 117, 117);
  }
  .project-info .links {
    width: 100%;
    margin: 25px 0 25px -15px;
    text-align: left;
  }
  .project-info .links a {
    font-size: 18px;
  }
  .project-info .navigation {
    display: flex;
    width: 100%;
    margin-top: auto;
    justify-content: space-between;
  }
  .project-info button {
    font-size: 12px;
  }
  .mobile-image-wrapper {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
</style>

<div class="project-details-wrapper">
  <img
    class="project-image"
    src={`images/${project.webImage}.png`}
    alt={`${project.title} website image`} />
  <div class="project-details">
    <div class="project-info">
      <h2 class="title">{project.title.toUpperCase()}</h2>
      <p class="description">{project.description}</p>
      <div class="tech-stack">
        <h3 class="sub-title">TOOLS:</h3>
        {#each Object.keys(project.tools) as tool}
          <p class="tools">
            <b>{tool}</b>
            :
            <span>{project.tools[tool].join(', ')}</span>
          </p>
        {/each}
      </div>
      <div class="links">
        {#each Object.keys(project.links) as link}
          <a href={project.links[link]}>{link}</a>
        {/each}
      </div>
      <div class="navigation">
        <button on:click={() => handleClickNavigation(navigation.work)}>
          BACK TO WORK
        </button>
        <div>
          <button
            on:click={() => handleClickProject(projects[--projectID % projects.length].title)}>
            PREV
          </button>
          /
          <button
            on:click={() => handleClickProject(projects[++projectID % projects.length].title)}>
            NEXT
          </button>
        </div>

      </div>
    </div>
    <div class="mobile-image-wrapper">
      <img
        class="project-mobile-image"
        src={`images/${project.mobileImage}.png`}
        alt={`${project.title} mobile image`} />
    </div>
  </div>
</div>
