<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md"
    >
      <div class="font-medium self-center text-xl sm:text-3xl orange-pallet">
        Cadastro
      </div>

      <div class="mt-10">
        <form action="#">
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >Nome:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fas fa-at text-blue-500"></i>
              </div>

              <input
                id="name"
                v-model="register.name"
                type="text"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Preencha seu nome"
              />
            </div>
          </div>

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
                v-model="register.email"
                type="email"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Preencha seu e-mail"
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs tracking-wide text-gray-600"
              >Senha:</label
            >
            <div class="relative">
              <input
                id="password"
                v-model="register.password"
                type="password"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Preencha sua senha"
              />
            </div>
          </div>

          <div v-if="error" class="bg-red-100 text-red-600 p-5">
            Ops, usuário já cadastrado ou dados faltando. Faça login ou tente
            novamente.
          </div>

          <div v-if="success" class="bg-green-100 text-green-600 p-5">
            Usuário criado! Faça login.
          </div>

          <div class="flex w-full">
            <div
              class="mt-2 text-white text-center text-sm sm:text-base bg-orange-pallet rounded-2xl py-2 w-full transition duration-150 _hover uppercase cursor-pointer"
              @click="userRegister()"
            >
              Registrar
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
          >Já possui um conta?
          <nuxt-link
            to="/login"
            class="text-xs ml-2 _hover orange-pallet font-semibold"
            >Faça login</nuxt-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  layout: 'simple',
  data() {
    return {
      register: {
        name: '',
        email: '',
        password: '',
        permission: '',
      },
      error: false,
      success: false,
    }
  },
  methods: {
    verifyInputs() {
      if (
        !this.register.email ||
        !this.register.password ||
        !this.register.name
      ) {
        this.error = true

        return false
      }

      return true
    },
    async userRegister() {
      try {
        if (this.verifyInputs()) {
          this.error = false
          const create = await this.$axios.post('/login/create', {
            name: this.register.name,
            email: this.register.email,
            password: this.register.password,
            permission: this.register.permission,
          })

          if (create.status === 200) this.success = true
          if (create.status !== 200) this.error = true
        }
      } catch (err) {
        if (err) this.error = true
      }
    },
  },
}
</script>

<style></style>
