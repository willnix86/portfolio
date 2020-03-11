<script>
  import ProjectImage from "./project-image.svelte";
  import ProjectDetails from "./project-details.svelte";
  import { projects } from "../strings.js";

  export let selectedProject;
  export let handleClickProject;
  export let handleClickNavigation;
</script>

<style>
  .portfolio {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 920px) {
    .portfolio {
      flex-direction: column;
    }
  }
</style>

<div class="portfolio">
  {#if selectedProject}
    <ProjectDetails {selectedProject} {handleClickProject} {handleClickNavigation} />
  {:else}
    {#each projects as { title, webImage }, index}
      <ProjectImage {title} image={webImage} {handleClickProject} />
    {/each}
  {/if}
</div>
