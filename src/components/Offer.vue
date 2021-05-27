<template>
  <section class="grid max-w-4xl gap-4 mx-auto">
    <div
      v-for="(example, index) in examples"
      :key="index"
      class="flex flex-col items-center justify-center md:gap-8 md:flex-row"
      :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
    >
      <img
        :src="'https://ritim.xyz/' + example.img"
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
          title: "Ritim'i açıklamaya çalışmak, kullanmaktan daha zor.",
          content:
            'Şaka değil, tek yapman gereken şey <code class="px-1 py-px bg-gray-300 rounded">--çal</code> komutunu kullanıp arkana yaslanmak. Ritim senin istediğin şarkıyı bulur.',
        },
        {
          img: "playlistcommand.webp",
          title: "Limitsiz playlist = hiç bitmeyen bir müzik keyfi.",
          content:
            "Aşırı fazla şarkı bulunduran bir playlist'in varsa, \"kabul eder mi, şarkımı keser mi, ah tüh!\" etme, Ritim'in sınırsız playlist özelliği ile müziklerin hep seninle.",
        },
        {
          img: "fast.webp",
          title: "Düşük gecikme.",
          content:
            "Müziğim takılacak mı derdi yok! Kaliteli sunucularımızla Ritim kesintisiz yanında.",
        },
      ],
    };
  },
};
</script>