<template>
  <RenderComponents
    v-if="data.page_components"
    :components="data.page_components"
    :page="data.title"
  />
</template>

<script>
import Stack from '../plugins/contentstack'
import RenderComponents from '../components/RenderComponents'

export default {
  components: {
    RenderComponents,
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
    const data = await Stack.getEntryByUrl('page', `${req.route.fullPath}`)
    return {
      data: data[0],
    }
  },
}
</script>
