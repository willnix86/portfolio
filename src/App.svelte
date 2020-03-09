<script>
  import Header from "./components/header.svelte";
  let mode = "light";
  // import Portfolio from "./components/header.svelte";
</script>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }
</style>

<main>
  <Header {mode} />
  <!-- <Portfolio /> -->
  <!-- <Footer /> -->
</main>
