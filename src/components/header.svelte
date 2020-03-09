<script>
  import { navigation } from "../strings.js";
  let selected = navigation.work;
</script>

<style>
  nav {
    padding: 85px 0px 60px 20px;
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
    /* margin: 0 15px; */
    color: rgb(117, 117, 117);
    cursor: pointer;
    margin: 0 20px;
  }

  .links-wrapper a:hover,
  .links-wrapper a.selected {
    color: rgb(15, 15, 15);
  }
</style>

<nav>
  <div class="title-wrapper">
    <h1 class="title">WILL NIXON</h1>
  </div>
  <div class="links-wrapper">
    <a class={`${selected === navigation.work ? 'selected' : ''}`}>
      {navigation.work}
    </a>
    <a class={`${selected === navigation.about ? 'selected' : ''}`}>
      {navigation.about}
    </a>
  </div>
</nav>
