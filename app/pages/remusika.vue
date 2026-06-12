<script setup lang="ts">
useHead({
  title: "Seinkyt Arlicht - ReMusika",
  meta: [
    {
      name: "description",
      content:
        "ReMusika is a lightweight local music player powered by Go and Nuxt. All music playback happens locally on your device. No internet connection, external services, or additional setup required. Simply run the application, open your browser, and start listening to your music library.",
    },
    { property: "og:title", content: "Seinkyt Arlicht - ReMusika" },
    {
      property: "og:description",
      content:
        "ReMusika is a lightweight local music player powered by Go and Nuxt. All music playback happens locally on your device. No internet connection, external services, or additional setup required. Simply run the application, open your browser, and start listening to your music library.",
    },
  ],
});
</script>

<template>
  <UContainer class="flex flex-col gap-3">
    <h2 class="text-4xl">ReMusika</h2>
    <p>
      ReMusika is a lightweight local music player powered by Go and Nuxt. All
      music playback happens locally on your device.
    </p>
    <p>
      No internet connection, external services, or additional setup required.
      Simply run the application, open your browser, and start listening to your
      music library.
    </p>

    <h3 class="text-3xl">Download</h3>
    <a
      href="https://github.com/seinkytarlicht/remusika/releases/latest"
      class="text-sky-500"
      >Latest Release</a
    >
  </UContainer>
</template>
