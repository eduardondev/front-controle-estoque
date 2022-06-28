<template>
  <div
    class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-11/12 md:w-2/3 md:m-10">
      <!-- modal header -->
      <div class="border-b px-4 md:py-2 flex justify-between items-center">
        <h3 class="font-medium text-lg">Cadastro de novas saídas</h3>
        <button class="text-black close-modal" @click="callShowModal()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style="fill: #000000"
          >
            <path
              d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
            ></path>
          </svg>
        </button>
      </div>
      <!-- modal body -->
      <div class="bg-gray-100 mx-auto max-w-7xl md:py-1">
        <form>
          <div
            class="bg-white w-auto shadow-md rounded px-3 m-10 flex flex-col"
          >
            <div class="-mx-3 md:flex mb-1">
              <div class="md:w-1/3 px-3 mb-1 md:mb-0">
                <label
                  class="uppercase tracking-wide text-black text-md font-bold mb-1"
                  for="orderId"
                >
                  ID
                </label>
                <input
                  id="orderId"
                  v-model="orderId"
                  type="text"
                  class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="ID do pedido"
                />
              </div>
              <div class="md:w-1/3 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-1"
                  for="tracker"
                >
                  Rastreio/Cód.
                </label>
                <input
                  id="tracker"
                  v-model="tracker"
                  type="text"
                  class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Rastreio/Cód. barras"
                />
              </div>
              <div class="md:w-1/3 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-1"
                  for="shipping"
                >
                  Transportadora
                </label>
                <input
                  id="shipping"
                  v-model="shipping"
                  type="text"
                  class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Transportadora do pedido"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-1">
              <div class="md:w-1/3 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="sku"
                >
                  SKU
                </label>
                <input
                  id="sku"
                  v-model="sku"
                  type="text"
                  class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="SKU"
                />
              </div>
              <div class="md:w-1/3 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="employee"
                >
                  Funcionário
                </label>
                <input
                  id="employee"
                  v-model="employee"
                  type="text"
                  class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Funcionário"
                />
              </div>
              <div class="md:w-1/3 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="date"
                >
                  Data
                </label>
                <input
                  id="date"
                  v-model="date"
                  type="date"
                  class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Data"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-2">
              <div class="md:w-1/2 px-3 md:mb-0">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  for="quantity"
                >
                  Quantidade
                </label>
                <input
                  id="quantity"
                  v-model="quantity"
                  type="number"
                  class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Quantidade"
                />
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="uppercase tracking-wide text-black text-xs font-bold"
                  for="status"
                >
                  Status
                </label>
                <div>
                  <select
                    v-model="status"
                    class="text-sm placeholder-gray-500 pl-3 rounded-md border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  >
                    <option value="1">A enviar</option>
                    <option value="2">Enviado</option>
                    <option value="3">Duplicidade</option>
                    <option value="4">CEP errado</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <client-only>
        <v-quagga
          v-if="showReadBarcode"
          class="flex justify-center items-center barcode-width"
          :on-detected="logIt"
          :reader-size="{
            width: 350,
            height: 350,
          }"
          :reader-types="['ean_reader']"
        ></v-quagga>
      </client-only>

      <div v-if="error" class="bg-red-100 text-red-600 text-center p-5">
        Ops, informações faltando ou já existe um registro com esse ID. Tente
        novamente.
      </div>
      <div v-if="message" class="bg-green-100 text-green-600 text-center p-5">
        Saída criada com sucesso.
      </div>
      <div class="flex justify-center items-center w-100 border-t p-3">
        <button
          class="bg-red-600 hover:bg-red-700 md:w-1/6 px-5 py-1 rounded text-white mr-2 close-modal"
          @click="callShowModal()"
        >
          Cancelar
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 md:w-1/6 px-5 py-1 rounded text-white"
          @click="saveModal()"
        >
          Salvar
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 md:w-2/6 px-5 py-1 rounded text-white ml-3"
          @click="readBarCode()"
        >
          Escanear código de barra
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
export default {
  name: 'ModalSaida',
  data() {
    return {
      orderId: '',
      sku: '',
      employee: '',
      shipping: '',
      date: '',
      status: '',
      tracker: '',
      quantity: '',
      error: 0,
      message: 0,
      showReadBarcode: 0,
    }
  },
  methods: {
    callShowModal() {
      this.$root.$refs.Outputs.showModal()
    },
    verifyInputs() {
      if (
        !this.orderId ||
        !this.sku ||
        !this.employee ||
        !this.shipping ||
        !this.date ||
        !this.status ||
        !this.tracker ||
        !this.quantity
      ) {
        this.error = 1
      }
    },
    async saveModal() {
      try {
        const token = this.$cookies.get('auth._token.local')
        const data = {
          orderId: this.orderId,
          sku: this.sku,
          employee: this.employee,
          shipping: this.shipping,
          date: this.date,
          status: this.status,
          tracker: this.tracker,
          quantity: this.quantity,
        }

        const save = await this.$axios.$post('/output/create', data, {
          headers: {
            Authorization: token,
          },
        })

        if (save.error === 0) {
          this.error = 0
          this.message = 1
        }
      } catch (err) {
        if (err) this.error = 1
      }
    },
    readBarCode() {
      !this.showReadBarcode
        ? (this.showReadBarcode = 1)
        : (this.showReadBarcode = 0)
    },
    logIt(data) {
      /* overflow hidden */

      if (data.codeResult.code) {
        this.orderId = data.codeResult.code
        this.tracker = data.codeResult.code
        this.sku = data.codeResult.code.slice(0, 7)

        this.showReadBarcode = 0
      }
    },
  },
}
</script>

<style></style>
