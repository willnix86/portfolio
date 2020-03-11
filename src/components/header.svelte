<script>
  import { navigation } from "../strings.js";
  export let page;
  export let handleClickNavigation;
  export let handleClickHome;
</script>

<style>
  nav {
    padding: 40px 0px 40px 0px;
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

  .links-wrapper button {
    margin-left: 20px;
  }
</style>

<nav>
  <div class="title-wrapper">
    <h1 on:click={() => handleClickHome()} class="title">WILL NIXON</h1>
  </div>
  <div class="links-wrapper">
    <button
      on:click={() => handleClickNavigation(navigation.work)}
      class={`${page === navigation.work ? 'selected' : ''}`}>
      {navigation.work}
    </button>
    <button
      on:click={() => handleClickNavigation(navigation.about)}
      class={`${page === navigation.about ? 'selected' : ''}`}>
      {navigation.about}
    </button>
  </div>
</nav>
