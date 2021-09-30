<template>
  <div class="author">
    <a href="/"
      ><img src="/images/uploads/vrmonkey_tran-150x150.png" alt="VR Monkey"
    /></a>

    <h1 v-if="showTitle" class="author__site-title">
      <a href="/">
        {{ $static.metadata.siteName }}
      </a>
    </h1>

    <p class="author__intro">
      {{ $static.metadata.siteDescription }}
    </p>

    <!-- <p class="author__links">
      <a href="//twitter.com/suits_at">Follow on Twitter</a>
      <a href="https://github.com/suits-at/netlifycms-gridsome">GitHub</a>
    </p> -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
		siteDescription
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"],
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding-bottom: calc(var(--space) / 2);

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    margin: 0 auto;
    font-size: 1.5em;
    max-width: 640px;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }

  h1 {
    a:link,
    a:visited {
      font-size: 1.5em;
      color: #335;
      text-decoration: none;
      font-family: Avenir, Helvetica, Arial, sans-serif;
    }
  }
}
</style>
