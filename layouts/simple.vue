<template>
  <div>
    <NavbarSimple />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'SimpleLayout',
}
</script>

<style>
a,
button {
  color: #ff4c29;
}

button:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 0.3s;
}

a:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: 0.3s;
}
</style>
