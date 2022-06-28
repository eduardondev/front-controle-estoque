<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <form class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h3 class="text-center text-indigo-600 text-2xl font-bold">Login</h3>

        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-5 mb-1 mt-6 text-gray-700"
          >
            E-mail
          </label>
          <div>
            <input
              v-model="login.email"
              type="text"
              placeholder="joao@email.com"
              name="email"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            />
          </div>
        </div>
        <div class="mt-6">
          <label
            for="password"
            class="block text-sm font-medium leading-5 text-gray-700"
          >
            Senha
          </label>
          <div>
            <input
              v-model="login.password"
              type="password"
              placeholder="********"
              name="password"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
            />
          </div>
        </div>
        <div class="mt-2 flex items-center justify-end">
          <div class="text-xs leading-5">
            <nuxt-link
              to="/reset-password"
              class="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Esqueceu a senha?
            </nuxt-link>
          </div>
        </div>

        <div
          v-if="errorRequest"
          class="text-center bg-red-200 text-red-600 p-4 mt-6 rounded-md"
        >
          Usuário não encontrado.
        </div>

        <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm"
            ><button
              type="button"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              @click="userLogin()"
            >
              Entrar
            </button></span
          >
        </div>
      </form>
    </div>

    <div class="flex justify-center items-center mt-6">
      <div
        class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
      >
        <span class="ml-2"
          >Não possui uma conta ainda?
          <nuxt-link
            to="/register"
            class="text-xs transition duration-150 _hover ml-2 text-indigo-600 font-semibold"
            >Registrar agora</nuxt-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'simple',
  data() {
    return {
      login: {
        email: 'eduardo@gmail.com',
        password: '123',
      },
      errorInputs: false,
      errorRequest: false,
      successRequest: false,
      successInputs: false,
    }
  },
  methods: {
    verifyInputs() {
      if (!this.login.email || !this.login.password) {
        this.successInputs = false
        this.errorInputs = false
        this.errorRequest = false
        this.successRequest = false
        this.errorInputs = true

        return false
      }

      if (this.login.email && this.login.password) {
        this.errorInputs = false
        this.errorInputs = false
        this.errorRequest = false
        this.successRequest = false
        this.successInputs = true

        return true
      }
    },
    async userLogin() {
      this.error = false
      try {
        if (this.verifyInputs()) {
          await this.$auth.loginWith('local', {
            data: this.login,
          })

          this.$route.push('/dashboard')
        }
      } catch (err) {
        this.errorRequest = true
      }
    },
  },
}
</script>

<style></style>
