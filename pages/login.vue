<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"
    >
      <div class="font-medium self-center text-xl sm:text-3xl orange-pallet">
        Login
      </div>

      <div class="mt-10">
        <form action="#">
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >Endereço de e-mail:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fas fa-at text-blue-500"></i>
              </div>

              <input
                id="email"
                v-model="login.email"
                type="email"
                name="email"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Preencha seu e-mail"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >Senha:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <span>
                  <i class="fas fa-lock text-blue-500"></i>
                </span>
              </div>

              <input
                id="password"
                v-model="login.password"
                type="password"
                name="password"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Preencha sua senha"
              />
            </div>
          </div>

          <div v-if="error" class="bg-red-100 text-red-600 p-5">
            Ops, algo errado. Tente novamente.
          </div>

          <div class="flex w-full">
            <div
              class="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-orange-pallet hover:bg-red-500 rounded-2xl py-2 w-full transition duration-150 ease-in uppercase cursor-pointer"
              @click="userLogin()"
            >
              Entrar
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-center items-center mt-6">
      <div
        class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
      >
        <span class="ml-2"
          >Não possui uma conta ainda?
          <nuxt-link
            to="/register"
            class="text-xs ml-2 text-blue-500 orange-pallet font-semibold"
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
        email: '',
        password: '',
      },
      error: false,
    }
  },
  methods: {
    verificarInputs() {
      if (!this.login.email || !this.login.password) {
        this.error = true

        return false
      }

      return true
    },
    async userLogin() {
      this.error = false
      try {
        await this.$auth.loginWith('local', {
          data: this.login,
        })

        this.$route.push('/dashboard')
      } catch (err) {
        this.error = true
      }
    },
  },
}
</script>

<style></style>
