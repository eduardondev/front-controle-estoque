<template>
  <div
    class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
  >
    <!-- modal -->
    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-3xl">
      <form class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="flex justify-end mb-6">
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

        <h3 class="text-center text-indigo-600 text-2xl font-bold">
          Cadastro de novo usuário
        </h3>

        <div class="flex justify-around items-center">
          <div class="mt-6">
            <label
              for="name"
              class="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              Nome
            </label>
            <div>
              <input
                v-model="register.name"
                type="text"
                placeholder="João Souza"
                autocomplete="username"
                name="name"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="email"
              class="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              E-mail
            </label>
            <div>
              <input
                v-model="register.email"
                type="text"
                placeholder="joao@email.com"
                autocomplete="username"
                name="email"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="number"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Telefone
            </label>
            <div>
              <input
                v-model="register.number"
                type="text"
                placeholder="41 99999-9999"
                name="number"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-around items-center">
          <div class="mt-6">
            <label
              for="password"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Senha
            </label>
            <div>
              <input
                v-model="register.password"
                type="password"
                placeholder="********"
                name="password"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
                :class="errorPassword ? 'border-2 border-red-500' : ''"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="confirmPassword"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Confirmar senha
            </label>
            <div>
              <input
                v-model="register.confirmPassword"
                type="password"
                placeholder="********"
                name="confirmPassword"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
                :class="errorPassword ? 'border-2 border-red-500' : ''"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="addressZipCode"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              CEP
            </label>
            <div>
              <input
                v-model="address_zipcode"
                type="text"
                placeholder="90000000"
                name="addressZipCode"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-around items-center">
          <div class="mt-6">
            <label
              for="address"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Endereço
            </label>
            <div>
              <input
                :value="register.address"
                type="text"
                placeholder="Avenida tal"
                name="address"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
                :disabled="withoutZip"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="address_number"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Número
            </label>
            <div>
              <input
                v-model="register.address_number"
                type="text"
                placeholder="1500"
                name="address_number"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
                :disabled="withoutZip"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="address_neighbourhood"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Bairro
            </label>
            <div>
              <input
                :value="register.address_neighbourhood"
                type="text"
                placeholder="Centro"
                autocomplete="current-password"
                name="address_neighbourhood"
                class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
                :disabled="withoutZip"
              />
            </div>
          </div>
        </div>

        <div class="flex justify-around items-center">
          <div class="mt-6">
            <label
              for="address_city"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Cidade
            </label>
            <input
              :value="register.address_city"
              type="text"
              placeholder="Curitiba"
              name="address_city"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
              :disabled="withoutZip"
            />
          </div>

          <div class="mt-6">
            <label
              for="address_state"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Estado
            </label>
            <input
              type="text"
              placeholder="PR"
              name="address_state"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
              :disabled="withoutZip"
              :value="register.address_state"
            />
          </div>

          <div class="mt-6">
            <label
              for="profession"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Profissão
            </label>
            <input
              v-model="register.profession"
              type="text"
              name="profession"
              placeholder="Engenheiro"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            />
          </div>
        </div>

        <div class="flex justify-around items-center">
          <div class="mt-6">
            <label
              for="have_children"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Possui filhos?
            </label>
            <select
              v-model="register.have_children"
              type="select"
              name="have_children"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            >
              <option :value="true">Sim</option>
              <option :value="false">Não</option>
            </select>
          </div>

          <div class="mt-6">
            <label
              for="quantity_children"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Quantos filhos?
            </label>
            <input
              v-model="register.quantity_children"
              type="number"
              placeholder="1"
              name="quantity_children"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
              :disabled="!register.have_children"
            />
          </div>

          <div class="mt-6">
            <label
              for="working_now"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Está empregado?
            </label>
            <select
              v-model="register.working_now"
              type="select"
              name="working_now"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            >
              <option :value="true">Sim</option>
              <option :value="false">Não</option>
            </select>
          </div>
        </div>

        <div class="flex justify-around items-center">
          <div class="mt-6">
            <label
              for="religion"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Religião
            </label>
            <input
              v-model="register.religion"
              type="text"
              placeholder="Sua religião"
              name="religion"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            />
          </div>

          <div class="mt-6">
            <label
              for="church"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Igreja
            </label>
            <input
              v-model="register.church"
              type="text"
              placeholder="Sua igreja"
              name="church"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            />
          </div>

          <div class="mt-6">
            <label
              for="marital_state"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Estado civíl
            </label>
            <select
              v-model="register.marital_state"
              type="select"
              name="marital_state"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            >
              <option value="" selected>Selecione</option>
              <option value="solteiro(a)">Solteiro(a)</option>
              <option value="casado(a)">Casado(a)</option>
              <option value="divorciado(a)">Divorciado(a)</option>
              <option value="viúvo(a)">Viúvo(a)</option>
              <option value="união estável">União estável</option>
            </select>
          </div>
        </div>

        <div class="flex justify-around items-center">
          <div class="mt-6">
            <label
              for="birth_date"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Data de nascimento
            </label>
            <input
              v-model="register.birth_date"
              type="date"
              placeholder="Sua religião"
              name="birth_date"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            />
          </div>

          <div class="mt-6">
            <label
              for="observations"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Observações
            </label>
            <input
              v-model="register.observations"
              type="text"
              placeholder="Alguma observação"
              name="observations"
              class="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-44"
            />
          </div>
        </div>

        <div
          v-if="errorInputs"
          class="text-center bg-red-200 text-red-600 p-4 mt-6 rounded-md"
        >
          Existem campos em branco!
        </div>

        <div
          v-if="errorRequest"
          class="text-center bg-red-200 text-red-600 p-4 mt-6 rounded-md"
        >
          Já existe um usuário cadastrado com esse e-mail.
        </div>

        <div
          v-if="successRequest"
          class="text-center bg-green-200 text-green-600 p-4 mt-6 rounded-md"
        >
          Usuário cadastro com sucesso!
        </div>

        <div
          v-if="successInputs"
          class="text-center bg-green-200 text-green-600 p-4 mt-6 rounded-md"
        >
          Estamos enviado seus dados...
        </div>

        <div class="mt-6">
          <span class="block w-full rounded-md shadow-sm"
            ><button
              type="button"
              class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              @click="createUser()"
            >
              Cadastrar
            </button></span
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewUserModal',
  data() {
    return {
      error: 0,
      message: 0,
      register: {
        name: 'Eduardo',
        email: 'eduardo@gmail.com',
        number: '41999999999',
        password: '123',
        birth_date: '2002-09-09',
        profession: 'Dev',
        church: 'Agape',
        have_children: false,
        quantity_children: 0,
        marital_state: 'solteiro(a)',
        religion: 'evangélico',
        address: 'Rua Rubem Berta',
        address_city: 'Curitiba',
        address_state: 'PR',
        address_neighbourhood: 'Centro',
        address_number: 520,
        working_now: false,
        roles: 0,
        activated: true,
        observations: 'Nenhuma observação',
      },
      withoutZip: true,
      address_zipcode: '81150311',
      zipResult: '',
      errorInputs: false,
      errorRequest: false,
      errorPassword: false,
      successRequest: false,
      successInputs: false,
    }
  },
  watch: {
    addressZipCode(zip) {
      console.log(zip)
      if (zip.length === 8) {
        fetch(`https://viacep.com.br/ws/${zip}/json`)
          .then((res) => res.json())
          .then((res) => {
            this.insertAddressByZip(res)
          })
      }
    },
  },
  methods: {
    callShowModal() {
      this.$root.$refs.Index.showNewUserModal()
    },
    verifyInputs() {
      if (
        !this.register.name ||
        !this.register.email ||
        !this.register.password ||
        !this.register.birth_date ||
        !this.register.profession ||
        !this.register.church ||
        !this.register.marital_state ||
        !this.register.religion ||
        !this.register.address ||
        !this.register.address_city ||
        !this.register.address_state ||
        !this.register.address_neighbourhood ||
        !this.register.address_number
      ) {
        this.successInputs = false
        this.successInputs = false
        this.errorInputs = false
        this.errorRequest = false
        this.errorPassword = false
        this.successRequest = false
        this.errorInputs = true

        return false
      }

      if (
        this.register.name &&
        this.register.email &&
        this.register.password &&
        this.register.birth_date &&
        this.register.profession &&
        this.register.church &&
        this.register.marital_state &&
        this.register.religion &&
        this.register.address &&
        this.register.address_city &&
        this.register.address_state &&
        this.register.address_neighbourhood &&
        this.register.address_number
      ) {
        this.errorInputs = false
        this.errorRequest = false
        this.errorPassword = false
        this.successRequest = false
        this.successInputs = true

        return true
      }

      if (this.register.password !== this.register.confirmPassword) {
        this.errorInputs = false
        this.errorRequest = false
        this.successRequest = false
        this.successInputs = false
        this.errorPassword = true

        return false
      }

      if (this.register.password === this.register.confirmPassword) {
        this.errorInputs = false
        this.errorRequest = false
        this.successRequest = false
        this.successInputs = false
        this.errorPassword = true

        return true
      }

      return true
    },
    async createUser() {
      try {
        if (this.verifyInputs()) {
          this.error = false

          this.register.address_zipcode = this.address_zipcode

          const create = await this.$axios.post('/login/create', this.register)

          if (create.status === 201) {
            this.successInputs = false
            this.errorInputs = false
            this.errorRequest = false
            this.errorPassword = false
            this.successRequest = true
          }

          if (create.status !== 201) {
            this.successInputs = false
            this.errorInputs = false
            this.errorPassword = false
            this.successRequest = false
            this.errorRequest = true
          }


        }
      } catch (err) {
        if (err) {
          this.successInputs = false
          this.errorInputs = false
          this.errorPassword = false
          this.successRequest = false
          this.errorRequest = true
        }
      }
    },
    insertAddressByZip(result) {
      this.withoutZip = false
      this.register.address = result.logradouro
      this.register.address_city = result.localidade
      this.register.address_state = result.uf
      this.register.address_neighbourhood = result.bairro
    },
  },
}
</script>

<style></style>
