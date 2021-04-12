<template>
  <footer>
    <div class="max-width footer-div">
      <div class="col-quarter">
        <NuxtLink
          aria-current="page"
          class="logo-tag"
          :title="this.$store.state.footer[0].title"
          to="/"
          ><img
            class="logo"
            :src="this.$store.state.footer[0].logo.url"
            :alt="this.$store.state.footer[0].title"
        /></NuxtLink>
      </div>
      <div class="col-half">
        <nav>
          <ul class="nav-ul">
            <template v-for="index in this.$store.state.footer">
              <li
                class="footer-nav-li"
                v-for="navItems in index.navigation.link"
                :key="navItems.title"
              >
                <NuxtLink :to="navItems.href">{{ navItems.title }}</NuxtLink>
              </li>
            </template>
          </ul>
        </nav>
      </div>
      <div class="col-quarter social-link">
        <div class="social-nav">
          <template
            v-for="index in this.$store.state.footer[0].social.social_share"
          >
            <NuxtLink
              :to="index.link.href"
              :key="index.title"
              :title="index.title"
              ><img :src="index.icon.url" :alt="index.icon.title"
            /></NuxtLink>
          </template>
        </div>
      </div>
    </div>
    <div class="copyright" v-html="this.$store.state.footer[0].copyright"></div>
  </footer>
</template>

<script>
import Stack from '../plugins/contentstack'

export default {
  async fetch() {
    this.data = await Stack.getEntries('footer')
    this.$store.commit('setFooter', this.data)
  },
}
</script>
