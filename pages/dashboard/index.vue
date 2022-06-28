<template>
  <div>
    <!-- <h1 class="text-xl mb-2 text-center">
      Últimas {{ churchs.data.length }} saídas
    </h1> -->

    <NewUserModal v-if="newUserModal" />
    <!-- <OutputModal class="z-40" /> -->

    <div class="bg-white p-8 rounded-md w-full">
      <div class="flex items-center justify-between pb-6">
        <div>
          <h2 class="text-gray-600 font-semibold">Membros Gerais</h2>
          <span class="text-xs">Todos os membros</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex bg-gray-50 items-center p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              v-model="searchText"
              class="bg-gray-50 outline-none ml-1 block"
              type="text"
              name="search"
              placeholder="Procurar..."
            />
          </div>
          <div class="lg:ml-40 ml-10 space-x-8">
            <button
              class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
              @click="showNewUserModal()"
            >
              Novo usuário
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    v-for="title in tableTitles"
                    :key="title"
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {{ title }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="member in members.users" :key="member.id">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ member.id }}
                      </p>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ member.name }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ member.address_city }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ member.number }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                      ></span>
                      <button class="relative text-xl" @click="showDetailsUserModal"> + </button>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
            >
              <span class="text-xs xs:text-sm text-gray-900">
                Exibindo 4 de {{ members.quantity }} membros
              </span>
              <div class="inline-flex mt-2 xs:mt-0">
                <button
                  class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l"
                >
                  Anterior
                </button>
                &nbsp; &nbsp;
                <button
                  class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r"
                >
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewUserModal from '../../components/NewUserModal.vue'
// import OutputModal from '../../components/OutputModal.vue'
export default {
  name: 'IndexPage',
  components: { NewUserModal },
  layout: 'default',
  // middleware: 'auth',
  async asyncData({ $axios, store }) {
    // $axios.setHeader('x-access-token', store.$auth.$state['token.local'].split('Bearer')[1])
    $axios.setHeader(
      'x-access-token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJfaWQiOiJlYzMwOGM0Zi05NzZmLTQ4ZWItYjNkOC02NjJlYzIwNzJmZTEiLCJ1c2VyIjoiZWR1YXJkb0BtYWlsLmNvbSIsIm5hbWUiOiJFZHVhcmRvIE51bmVzIiwicm9sZXMiOjEsImFjdGl2YXRlZCI6dHJ1ZSwidG9rZW5fY3JlYXRlZCI6IjIwMjItMDYtMjhUMDU6MjQ6NTcuODM3WiIsInRva2VuX2NyZWF0ZWRfdGltZXN0YW1wIjoxNjU2MzkzODk3ODM3fSwiaWF0IjoxNjU2MzkzODk3LCJleHAiOjE2NTY0MDQ2OTd9.yAv0EQICtKQB69lMPY0DtwQk6OFhxuaQUXqLhTUl9R8'
    )
    const churchs = await $axios.$get('/churchies/all')
    const members = await $axios.$get('/users/all')
    return { churchs, members }
  },
  data() {
    return {
      tableTitles: ['ID', 'Nome', 'Cidade', 'Telefone', 'Mais informações'],
      searchText: '',
      newUserModal: false,
      detailsUserModal: false
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) =>
        user.toLowerCase().includes(this.search.toLowerCase())
      )
    },
  },
  watch: {
    searchText(value) {
      this.searchByText(value)
    },
  },
  created() {
    this.$root.$refs.Index = this
  },
  methods: {
    searchByText: (value) => {},
    showNewUserModal() {
      !this.newUserModal
        ? (this.newUserModal = true)
        : (this.newUserModal = false)
    },
    showDetailsUserModal() {
      !this.detailsUserModal
        ? (this.detailsUserModal = true)
        : (this.detailsUserModal = false)
    },
  },
}
</script>

<style></style>
