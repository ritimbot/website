<template>
  <section class="grid max-w-4xl gap-4 mx-auto">
    <div
      v-for="(example, index) in examples"
      :key="index"
      class="flex flex-col items-center justify-center md:gap-8 md:flex-row"
      :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
    >
      <img
        :src="'https://ritimbot.netlify.app/' + example.img"
        :alt="example.img"
        class="md:w-1/2"
      />
      <div class="p-4 md:p-0" :class="{ 'md:ml-6': index % 2 === 1 }">
        <h1
          v-html="example.title"
          class="text-2xl font-medium md:text-3xl"
        ></h1>
        <p
          v-html="example.content"
          class="mt-2 text-lg text-gray-700 md:text-xl"
        ></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      examples: [
        {
          img: "playcommand.webp",
          title: "Trying to explain Ritim is more difficult than using it.",
          content:
            'No joke, all you have to do is use the <code class="px-1 py-px bg-gray-300 rounded">/play</code> command and sit back. Ritim will find the song you want.',
        },
        {
          img: "playlistcommand.webp",
          title: "Unlimited playlists = never-ending music enjoyment.",
          content:
            "If you have a playlist with too many songs, don't worry about \"will it accept, will it cut my song?\", your music is always with you with Ritim's unlimited playlist feature.",
        },
        {
          img: "fast.webp",
          title: "Low latency.",
          content:
            "No worries if my music will get stuck! Ritim is with you uninterrupted with our quality servers.",
        },
      ],
    };
  },
};
</script>
