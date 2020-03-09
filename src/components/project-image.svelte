<script>
  export let image;
  export let title;
</script>

<style>

</style>

<div class="project-image-wrapper">
  <img
    class="project-image"
    src={`images/${image}.png`}
    alt={`${title} website image`} />
</div>
