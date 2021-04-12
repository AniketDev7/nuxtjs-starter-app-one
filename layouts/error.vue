<template>
  <div class="container">
    <div v-if="error.statusCode === 404" class="error-page">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <NuxtLink to="/">Navigate to home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog',
}
</script>
