<script>
  import Toggle from "./dark-mode-toggle.svelte";
  export let mode;
</script>

<style>
  nav {
    margin: 85px 0 60px 0;
    display: flex;
    justify-content: space-between;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
  }

  .title {
    font-family: "Expletus Sans", sans-serif;
    font-size: 38px;
    margin: 0;
    cursor: pointer;
  }

  .links-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-bottom: 6px;
  }

  .links-wrapper a {
    font-size: 16px;
    margin: 0 15px;
    color: rgb(117, 117, 117);
  }

  .links-wrapper a:hover,
  .links-wrapper a.selected {
    color: black;
  }
</style>

<nav>
  <div class="title-wrapper">
    <h1 class="title">WILL NIXON</h1>
    <Toggle {mode} />
  </div>
  <div class="links-wrapper">
    <a class="selected">WORK</a>
    <a>ABOUT / CONTACT</a>
  </div>
</nav>
