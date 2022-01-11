<template>
  <div>
    <Navbar />

    <h1 class="text-center">Usuário com ID {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const outputs = await $axios.$get(`http://localhost:1701/v1/outputs`)

    const formatOutputs = outputs.map((item) => {
      item.date = new Date(item.date).toLocaleString('PT-BR')
      item.createdAt = new Date(item.createdAt).toLocaleString('PT-BR')
      return item
    })

    return { formatOutputs }
  },
}
</script>

<style></style>
