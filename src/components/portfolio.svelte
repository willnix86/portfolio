<script>
  import ProjectImage from "./project-image.svelte";
  import { projects } from "../strings.js";
</script>

<style>

</style>

<div class="portfolio">
  {#each projects as { title, webImage }, index}
    <ProjectImage {title} image={webImage} />
  {/each}
</div>
