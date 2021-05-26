<template>
  <section
    class="flex flex-col w-full p-16 bg-gradient-to-b bg-no-repeat bg-cover from-[#3d3a4b] to-[#1c1b24] gap-y-2"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-white">Tamam, yalan söyledik.</h1>
      <p class="mt-3 text-xl font-medium text-gray-400">
        Açıklaması o kadar da zor değilmiş, ama olsun! Artık her şeyi
        biliyorsun.
        <br />
        Sen de Ritim'i sunucuna ekle, eğlenceye başla!
      </p>
      <a
        class="flex mt-6 items-center text-center mx-auto font-medium justify-center w-64 gap-2 p-2.5 text-xl text-gray-300 bg-[#17161d] rounded-xl shadow-md hover:shadow-lg transition duration-500"
        href="https://ritim.xyz/davet"
        draggable="false"
        target="_blank"
      >
        İkna oldum</a
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contact: [
        {
          color: "#5865F2",
          url: "https://discord.gg/U5v2csS",
          name: "Support Server",
          icon: "discord",
        },
        {
          color: "#EB459E",
          url: "https://top.gg/bot/emoji",
          name: "Discord Bot List",
          icon: "topgg",
        },
        {
          color: "#ED4245",
          url: "mailto:emojidestek@gmail.com",
          name: "Mail",
          icon: "envelope-alt",
        },
      ],
    };
  },
};
</script>
