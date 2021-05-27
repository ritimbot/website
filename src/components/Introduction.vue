<template>
  <section
    class="grid h-screen gap-16 p-4 mx-auto md:grid-cols-4 place-items-center md:p-0 md:max-w-4xl md:h-screen place-content-center"
  >
    <div class="-ml-24">
      <img
        src="https://cdn.discordapp.com/avatars/711411719922253884/26d56958720f619808abfdd751a8e3c7.png?size=512"
        alt="ritimlogo"
        style="width: 200%"
      />
    </div>
    <div class="flex flex-col col-span-3 gap-3">
      <h1 class="text-5xl font-black text-white">
        Sonunda, işe yarar bir müzik botu
      </h1>
      <p class="text-2xl font-medium text-gray-400 md:text-3xl">
        Sunucunda özgürce kullanabileceğin Ritim, hiç sınırlama olmadan,
        playlist limitsiz ve akıcı bir müzik deneyimi sunar, sana da dinlemek
        kalır.
      </p>
      <div class="flex flex-col gap-2 md:gap-4 md:flex-row">
        <a
          class="group flex items-center font-medium justify-center w-64 mt-2 gap-2 p-2.5 text-xl text-gray-300 bg-[#17161d] rounded-xl shadow-md hover:shadow-lg transition duration-500"
          href="https://discord.com/oauth2/authorize?client_id=711411719922253884&scope=bot&permissions=1110822208"
          draggable="false"
          target="_blank"
        >
          Sunucuna ekle
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
          Oy ver
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