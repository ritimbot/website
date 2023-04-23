<template>
  <section
    class="grid h-screen gap-16 p-4 mx-auto md:grid-cols-4 place-items-center md:p-0 md:max-w-4xl md:h-screen place-content-center"
  >
    <div class="-ml-24">
      <img
        src="https://cdn.discordapp.com/avatars/1028730329499963472/cd65c86cb27f3f12876ea4d993cc738a.webp?size=512"
        alt="ritimlogo"
        style="width: 200%"
      />
    </div>
    <div class="flex flex-col col-span-3 gap-3">
      <h1 class="text-5xl font-black text-white">
        Finally, a useful music bot
      </h1>
      <p class="text-2xl font-medium text-gray-400 md:text-3xl">
        Ritim that you can use freely on your server, without any limitations,
        playlist offers an unlimited and fluid music experience, and you get to listen
        remains.
      </p>
      <div class="flex flex-col gap-2 md:gap-4 md:flex-row">
        <a
          class="group flex items-center font-medium justify-center w-64 mt-2 gap-2 p-2.5 text-xl text-gray-300 bg-[#17161d] rounded-xl shadow-md hover:shadow-lg transition duration-500"
          href="https://discord.com/api/oauth2/authorize?client_id=711411719922253884&permissions=57877971988288&scope=applications.commands%20bot"
          draggable="false"
          target="_blank"
        >
          Add to your server
          <unicon
            class="duration-[400ms] ease-out transform group-hover:translate-x-[6px]"
            name="arrow-right"
            fill="currentColor"
            width="28"
            height="28"
        /></a>
        <a
          class="group flex items-center font-medium justify-center w-64 mt-2 gap-2 p-2.5 text-xl text-gray-300 bg-[#17161d] rounded-xl shadow-md hover:shadow-lg transition duration-500"
          href="https://top.gg/bot/711411719922253884/vote"
          draggable="false"
          target="_blank"
        >
          Donate
          <unicon
            class="duration-[400ms] ease-out transform group-hover:translate-x-[6px]"
            name="arrow-right"
            fill="currentColor"
            width="28"
            height="28"
        /></a>
      </div>
    </div>
  </section>
</template>
