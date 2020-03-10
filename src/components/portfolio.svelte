<script>
  import ProjectImage from "./project-image.svelte";
  import { projects } from "../strings.js";
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
  {#each projects as { title, webImage }, index}
    <ProjectImage {title} image={webImage} />
  {/each}
</div>
