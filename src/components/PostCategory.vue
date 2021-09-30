<template>
  <div class="post-categories">
    <g-link
      class="post-categories__link"
      v-for="category in post.categories"
      :key="category.id"
      :to="category.path"
    >
      <span>@</span> {{ category.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss">
.post-categories {
  margin: 1em 0 0;

  &__link {
    margin-right: 0.7em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor !important; //Todo: remove important;
    padding: 0.5em;
    border-radius: var(--radius);
  }
}
</style>