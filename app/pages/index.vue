<script setup lang="ts">
const seo = reactive({
  title: "Seinkyt Arlicht's Website",
  desc: "Nothing in here, just blank website",
});

useSeoMeta({
  title: seo.title,
  ogTitle: seo.title,
  description: seo.desc,
  ogDescription: seo.desc,
  ogImage: "https://seinkytarlicht.github.io/images/emilia.png",
  twitterTitle: seo.title,
  twitterDescription: seo.desc,
  twitterCard: "summary_large_image",
});

const whatever = ref([
  {
    name: "Shaula Gesugao",
    image: "/images/shaula.png",
  },
  {
    name: "Meili Portroute Gesugao",
    image: "/images/meili.png",
  },
  {
    name: "Eridona Gesugao",
    image: "/images/eridona.png",
  },
  {
    name: "Ram Gesugao",
    image: "/images/ram.png",
  },
  {
    name: "Julius Juukulius Gesugao",
    image: "/images/julius.png",
  },
  {
    name: "Beatrice Gesugao",
    image: "/images/beatrice.png",
  },
  {
    name: "Emilia Gesugao",
    image: "/images/emilia.png",
  },
]);
</script>

<template>
  <h1>Here some screnshoot from new eps of rezero</h1>

  <div class="flex flex-wrap gap-4">
    <img :src="w.image" :alt="w.name" v-for="w in whatever" width="480" />
  </div>
</template>
