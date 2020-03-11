<script>
  import { links } from "../strings.js";
</script>

<style>
  footer {
    padding: 40px 0px 60px 00px;
    display: flex;
    justify-content: flex-end;
  }

  .social-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    margin-bottom: 6px;
  }

  .social-wrapper a {
    margin-left: 15px;
  }
</style>

<footer>
  <div class="social-wrapper">
    <a href={links.email.url} target="_blank">{links.email.label}</a>
    <a href={links.twitter.url} target="_blank">{links.twitter.label}</a>
    <a href={links.instagram.url} target="_blank">{links.instagram.label}</a>
  </div>
</footer>
