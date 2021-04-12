<template>
  <div v-if="data">
    <div
      class="contact-page-section max-width"
      v-if="data.html_code_alignment === 'Left'"
    >
      <div class="contact-page-content">
        <h1>{{ data.title }}</h1>
        <p v-html="data.description"></p>
      </div>
      <div class="contact-page-form" v-html="data.html_code"></div>
    </div>
    <div
      class="contact-maps-section max-width"
      v-if="data.html_code_alignment === 'Right'"
    >
      <div class="maps-details" v-html="data.html_code"></div>
      <div class="contact-maps-content">
        <h2>{{ data.title }}</h2>
        <p v-html="data.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
}
</script>
