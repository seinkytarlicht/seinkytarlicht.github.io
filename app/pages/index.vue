<script setup lang="ts">
// SEO
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

useSchemaOrg([
  definePerson({
    name: "Seinkyt Arlicht",
    description: "Software engineer",
    url: "https://seinkytarlicht.github.io",
    sameAs: [
      "https://bsky.app/profile/seinkytarlicht.bsky.social",
      "https://github.com/seinkytarlicht",
    ],
  }),
]);

// Whatever is this
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

// Ril
const { data } = await useFetch(
  "https://api.github.com/users/seinkytarlicht/repos",
);
</script>

<template>
  <h1 class="text-4xl font-semibold my-5">Seinkyt Arlicht</h1>
  <USeparator />

  <div class="my-5">
    <h2 class="text-2xl mb-3">My Repo</h2>
    <div v-for="repo in data" :key="repo.id" class="mb-2">
      <h4 class="text-lg font-semibold">
        <a class="text-sky-500" :href="repo.html_url">{{ repo.name }}</a>
      </h4>
      <p v-if="repo.homepage">
        Page:
        <a class="text-sky-500" :href="repo.homepage">{{ repo.homepage }}</a>
      </p>
      <p>{{ repo.description }}</p>
    </div>
  </div>

  <div class="my-5">
    <h2 class="text-2xl mb-3">Here some screnshoot from new eps of Re:Zero</h2>

    <div class="grid grid-cols-3 gap-4">
      <img :src="w.image" :alt="w.name" v-for="w in whatever" />
    </div>
  </div>
</template>
