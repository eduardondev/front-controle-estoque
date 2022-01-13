<template>
  <div>
    <h1 class="text-xl mb-2 text-center">
      Últimas {{ formatOutputs.length }} saídas
    </h1>

    <div class="overflow-auto rounded-lg shadow hidden md:block">
      <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              Rastreio/Cód. barras
            </th>
            <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              Transportadora
            </th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              Data
            </th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              Funcionário
            </th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              SKU
            </th>
            <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              Quantidade
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="out in formatOutputs" :key="out.id" class="bg-white">
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <nuxt-link
                :to="'/output/' + out.orderId"
                class="font-bold text-blue-500 hover:underline"
              >
                {{ out.orderId }}</nuxt-link
              >
            </td>
            <td
              v-if="out.status === 1"
              :name="out.statusName"
              :class="'status-' + out.status"
              class="p-1 status text-xs text-center font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </td>
            <td
              v-if="out.status === 2"
              :name="out.status"
              class="py-1 text-xs text-center font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </td>
            <td
              v-if="out.status === 3"
              :name="out.status"
              class="py-1 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </td>
            <td
              v-if="out.status === 4"
              :name="out.status"
              class="py-1 text-xs text-center font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </td>
            <td
              v-if="out.status === 5"
              :name="out.status"
              class="py-1 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              <span class="p-3 text-sm text-gray-700 whitespace-nowrap">{{
                out.tracker
              }}</span>
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              {{ out.shipping }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              {{ out.date }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              {{ out.employee }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              {{ out.sku }}
            </td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
              {{ out.quantity }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <span class="text-sm">Exibindo {{ formatOutputs.length }} saídas</span>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 md:hidden">
      <div
        v-for="out in formatOutputs"
        :key="out.id"
        class="bg-white space-y-3 p-4 rounded-lg shadow"
      >
        <div class="flex items-center space-x-3 text-sm">
          <div>
            <nuxt-link
              :to="'/saida/' + out.orderId"
              class="text-blue-500 font-bold break-text hover:underline"
              ><p>{{ out.orderId }}</p></nuxt-link
            >
          </div>
          <div class="text-gray-500">{{ out.date }}</div>
          <div>
            <span
              v-if="out.status === 1"
              :name="out.status"
              class="p-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </span>
            <span
              v-if="out.status === 2"
              :name="out.status"
              class="py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </span>
            <span
              v-if="out.status === 3"
              :name="out.status"
              class="py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </span>
            <span
              v-if="out.status === 4"
              :name="out.status"
              class="py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </span>
            <span
              v-if="out.status === 5"
              :name="out.status"
              class="py-1 px-2 text-xs text-center font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-130"
            >
              {{ out.statusName }}
            </span>
          </div>
        </div>
        <div class="text-sm">
          <span class="text-gray-900 font-semibold">SKU:</span> {{ out.sku }}
          <br />
          <span class="text-gray-900 font-semibold">Transportadora:</span>
          {{ out.shipping }}
          <br />
          <span class="text-gray-900 font-semibold">Funcionário:</span>
          {{ out.employee }}
          <br />
          <span class="text-gray-900 font-semibold">Quantidade:</span>
          {{ out.quantity }}
          <br />
          <span class="text-gray-900 font-semibold">Rastreio/Cód. barras:</span>
          {{ out.tracker }}
        </div>
        <div>
          <nuxt-link
            :to="'/dashboard/saida/' + out.orderId"
            class="px-2 py-2 bg-blue-500 text-white rounded-xl font-bold text-white"
          >
            Acessar</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  middleware: 'auth',
  async asyncData({ $axios }) {
    const outputs = await $axios.$get('/outputs?limit=25')

    const formatOutputs = outputs.outputs.map((item) => {
      const statusName = outputs.status.find((sta) => {
        return sta.code === item.status
      })

      item.statusName = statusName.name
      item.date = new Date(item.date).toLocaleString('PT-BR').split(' ')[0]
      item.createdAt = new Date(item.createdAt)
        .toLocaleString('PT-BR')
        .split(' ')[0]
      return item
    })

    return { formatOutputs }
  },
}
</script>

<style scoped>
p {
  max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
