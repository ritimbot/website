<template>
  <section
    class="grid h-screen gap-16 p-4 mx-auto place-items-center md:p-0 md:max-w-4xl md:h-screen place-content-center"
  >
    <div class="flex flex-col gap-3">
      <h1 class="text-5xl font-black text-white">
        Sonunda, işe yarar bir müzik botu
      </h1>
      <p class="text-2xl font-medium text-gray-300 md:text-3xl">
        Sunucunda özgürce kullanabileceğin Ritim, hiç sınırlama olmadan,
        playlist limitsiz ve akıcı bir müzik deneyimi sunar, sana da dinlemek
        kalır.
      </p>
      <div class="flex flex-col gap-2 md:gap-4 md:flex-row">
        <a
          class="group flex items-center font-medium justify-center w-64 mt-2 gap-2 p-2.5 text-xl text-gray-300 bg-gray-900 bg-opacity-50 rounded-xl shadow-md hover:shadow-lg transition duration-500"
          href="https://discord.com/oauth2/authorize?client_id=414878659267133445&scope=bot&permissions=1074121792"
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
          class="group flex items-center font-medium justify-center w-64 mt-2 gap-2 p-2.5 text-xl text-gray-300 bg-gray-900 bg-opacity-50 rounded-xl shadow-md hover:shadow-lg transition duration-500"
          href="https://discord.com/oauth2/authorize?client_id=414878659267133445&scope=bot&permissions=1074121792"
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