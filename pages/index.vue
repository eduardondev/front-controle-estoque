<template>
  <div></div>
  <!-- <div class="flex content-center fixed inset-0 bg-gray-100">
    <div class="bg-white border m-auto p-10 rounded-3xl shadow-lg space-y-6">
      <h1 class="font-semibold text-3xl orange-pallet flex-grow">
        Bem-vindo ao controle de estoque!
      </h1>
      <hr />
      <div class="flex items-center justify-between">
        <nuxt-link to="/register" class="orange-pallet text-gray-500"
          >Criar uma conta</nuxt-link
        >

        <nuxt-link
          class="bg-orange-pallet rounded-3xl text-white p-3"
          to="/login"
          >Entrar na minha conta</nuxt-link
        >
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'simple',
  created() {
    this.$router.push('/login')
  },
}
</script>

<style></style>
