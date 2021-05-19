<template>
  <section
    class="flex flex-col justify-between w-full p-1.5 bg-gray-300 md:px-32 gap-y-2 md:flex-row"
  >
    <div class="flex items-center justify-center">
      <h1 class="text-center text-gray-800 md:text-left">
        © {{ new Date().getFullYear() }} Emoji — Website by
        <a
          href="https://tarikcoskun.xyz"
          target="_blank"
          draggable="false"
          class="text-gray-800 border-b-2 border-gray-400 hover:border-gray-600"
          >Tarık Coşkun</a
        >
      </h1>
    </div>
    <div class="flex justify-center gap-2">
      <a
        v-for="account in contact"
        :key="account"
        :href="account.url"
        target="_blank"
        draggable="false"
        class="flex items-center p-1 text-gray-700 hover:text-gray-900"
      >
        <unicon
          :name="account.icon"
          fill="currentColor"
          :width="account.icon === 'topgg' ? 26 : 28"
          :height="account.icon === 'topgg' ? 26 : 28"
        />
      </a>
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
