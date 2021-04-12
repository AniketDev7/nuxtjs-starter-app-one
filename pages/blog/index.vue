<template>
  <main v-show="banner">
    <BlogBanner :data="banner.page_components[0].hero_banner" />
    <div class="blog-container">
      <div class="blog-column-left">
        <template v-for="(list, index) in recentBlog">
          <div :key="index" class="blog-list">
            <NuxtLink :to="list.url"
              ><img
                alt="blog img"
                class="blog-list-img"
                :src="list.featured_image.url"
            /></NuxtLink>
            <div class="blog-content">
              <NuxtLink :to="list.url"
                ><h3>{{ list.title }}</h3></NuxtLink
              >
              <p>
                {{ moment(list.date) }},
                <strong>{{ list.author[0].title }}</strong>
              </p>
              <p v-html="list.body.slice(0, 250)"></p>
              <NuxtLink :to="list.url"><span>Read more --&gt;</span></NuxtLink>
            </div>
          </div>
        </template>
      </div>
      <div class="blog-column-right">
        <h2>{{ banner.page_components[1].widget.title_h2 }}</h2>
        <template v-for="(component, index) in archivedList">
          <NuxtLink :key="index" :to="component.url">
            <div>
              <h4>{{ component.title }}</h4>
              <p v-html="component.body.slice(0, 80)"></p>
            </div>
          </NuxtLink>
        </template>
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
      title: req.banner.title,
      meta: [
        {
          title: req.banner.seo.meta_title,
          name: req.banner.seo.meta_description,
          description: req.banner.seo.meta_description,
          keywords: req.banner.seo.keywords,
        },
      ],
    }
  },
  async asyncData(req) {
    const archivedList = []
    const recentBlog = []
    const data = await Stack.getEntryByUrl('page', `${req.route.path}`)
    const list = await Stack.getEntries('blog_post', [`author`, `related_post`])
    list.forEach((item) => {
      if (item.is_archived) {
        archivedList.push(item)
      } else {
        recentBlog.push(item)
      }
    })
    return {
      banner: data[0],
      archivedList,
      recentBlog,
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
