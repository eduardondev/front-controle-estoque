<template>
  <header
    class="bg-light-gray-pallet sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div class="text-cyan w- md:text-2xl sm:text-base w-20">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div class="sm:hidden">
        <button
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          @click="isOpen = !isOpen"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <nuxt-link
        to="/dashboard"
        class="block px-4 py-1 text-white text-lg rounded hover:bg-gray-500 transition duration-150"
        >Home</nuxt-link
      >

      <nuxt-link
        to="/dashboard/outputs"
        class="block px-4 py-1 text-white text-lg rounded hover:bg-gray-500 transition duration-150"
        >Saídas</nuxt-link
      >
      <!-- <nuxt-link
        to="/dashboard/entries"
        class="mt-1 block px-4 py-1 text-white text-lg rounded hover:bg-gray-500 sm:mt-0 sm:ml-2 transition duration-150"
        disabled
        >Entradas</nuxt-link
      > -->
      <button
        class="mt-1 block px-4 py-1 text-white text-lg rounded hover:bg-gray-500 sm:mt-0 sm:ml-2 transition duration-150"
        @click="logout()"
      >
        Sair
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComp',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      await this.$route.push('/')
    },
  },
}
</script>

<style scoped>
a:hover {
  background-color: #ff4c29;
}

button:hover {
  background-color: #ff4c29;
}
</style>
