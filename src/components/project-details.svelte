<script>
  import { beforeUpdate } from "svelte";
  import { projects, navigation } from "../strings.js";
  export let handleClickNavigation;
  export let handleClickProject;
  export let selectedProject;
  let project = projects.find(
    (p) => p.title.toLowerCase() === selectedProject.toLowerCase()
  );
  let projectID = projects.indexOf(project);
  beforeUpdate(() => {
    project = projects.find(
      (p) => p.title.toLowerCase() === selectedProject.toLowerCase()
    );
  });
</script>

<div class="project-details-wrapper">
  <img
    class="project-image"
    src={`images/${project.webImage}.png`}
    alt={`${project.title} website image`}
  />
  <div class="project-details">
    <div class="project-info">
      <h2 class="title">{project.title.toUpperCase()}</h2>
      <p class="description">{project.description}</p>
      <div class="tech-stack">
        <h3 class="sub-title">TECHNOLOGIES:</h3>
        {#each Object.keys(project.tools) as tool}
          <p class="tools">
            <b>{tool}</b>
            :
            <span>{project.tools[tool].join(", ")}</span>
          </p>
        {/each}
      </div>
      <div class="links">
        {#each Object.keys(project.links) as link}
          <a href={project.links[link]} target="_blank">{link}</a>
        {/each}
      </div>
      <div class="navigation">
        <button on:click={() => handleClickNavigation(navigation.work)}>
          BACK TO WORK
        </button>
        <div class="button-wrapper">
          <button
            class={`${project.title !== projects[0].title ? "" : "hidden"}`}
            on:click={() =>
              handleClickProject(projects[--projectID % projects.length].title)}
          >
            PREV
          </button>
          <p
            class={`${
              project.title !== projects[0].title &&
              project.title !== projects[projects.length - 1].title
                ? ""
                : "hidden"
            }`}
          >
            /
          </p>
          <button
            class={`${
              project.title !== projects[projects.length - 1].title
                ? ""
                : "hidden"
            }`}
            on:click={() =>
              handleClickProject(projects[++projectID % projects.length].title)}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
    {#if project.mobileImage}
      <div class="mobile-image-wrapper">
        <img
          class="project-mobile-image"
          src={`images/${project.mobileImage}.png`}
          alt={`${project.title} mobile image`}
        />
      </div>
    {/if}
  </div>
</div>

<style>
  .project-details-wrapper {
    margin: 20px 0;
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
    height: 525px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .project-info .title {
    font-size: 28px;
    margin: 0;
    color: #0f0f0f;
  }
  .project-info .description {
    font-size: 18px;
    text-align: left;
    color: #757575;
  }
  .project-info .sub-title {
    margin: 15px 0;
    color: #0f0f0f;
  }
  .tech-stack {
    text-align: left;
  }
  .tools {
    margin: 5px 0;
    color: #0f0f0f;
  }
  .tools span {
    color: #757575;
  }
  .project-info .links {
    width: 100%;
    margin: 25px 0;
    text-align: left;
  }
  .project-info .links a {
    font-size: 16px;
    margin-right: 15px;
  }
  .project-info .navigation {
    display: flex;
    width: 100%;
    margin-top: auto;
    justify-content: space-between;
  }
  .project-info .button-wrapper {
    display: flex;
  }
  .project-info .button-wrapper p {
    margin: 0 5px;
  }
  .project-info button {
    font-size: 12px;
  }
  .project-info button.hidden,
  .project-info p.hidden {
    visibility: hidden;
  }
  .mobile-image-wrapper {
    padding: 3px 0;
    width: 50%;
    height: auto;
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 700px) {
    .project-info {
      width: 100%;
    }
    .mobile-image-wrapper {
      display: none;
    }
  }
</style>
