<template>
  <main>
    <BlogBanner :data="banner.page_components[0].hero_banner" />
    <div class="blog-container">
      <div class="blog-detail">
        <h2>{{ data.title }}</h2>
        <p>
          {{ moment(data.date) }}, <strong>{{ data.author[0].title }}</strong>
        </p>
        <p v-html="data.body"></p>
      </div>
      <div v-if="data" class="blog-column-right">
        <div class="related-post">
          <h2>{{ banner.page_components[2].widget.title_h2 }}</h2>
          <template v-for="(blog, index) in data.related_post">
            <div :key="index">
              <NuxtLink :key="index" :to="blog.url"
                ><h4>{{ blog.title }}</h4></NuxtLink
              >
              <p v-html="blog.body.slice(0, 80)"></p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment'

import Stack from '../../plugins/contentstack'
import BlogBanner from '../../components/BlogBanner'

export default {
  components: {
    BlogBanner,
  },
  head(req) {
    return {
      title: req.data.title,
      meta: [
        {
          title: req.data.seo.meta_title,
          name: req.data.seo.meta_title,
          description: req.data.seo.meta_description,
          keywords: req.data.seo.keywords,
        },
      ],
    }
  },
  async asyncData(req) {
    try {
      const banner = await Stack.getEntryByUrl('page', `/blog`)
      const data = await Stack.getEntryByUrl(
        'blog_post',
        `${req.route.fullPath}`,
        [`related_post`, `author`]
      )
      return {
        data: data[0],
        banner: banner[0],
      }
    } catch (e) {
      return false
    }
  },
  methods: {
    moment(param) {
      return moment(param).format('ddd, MMM D YYYY')
    },
  },
}
</script>

<style></style>
