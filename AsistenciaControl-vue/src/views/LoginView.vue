<template>
  <main class="login-container">
    <div class="login-box">
      <h1 class="uleam-logo">Uleam</h1>
      <p class="uleam-sub">
        UNIVERSIDAD LAICA<br />
        ELOY ALFARO DE MANABÍ
      </p>

      <form @submit.prevent="login">
        <input type="text" v-model="usuario" placeholder="Nombre usuario" required />
        <input type="password" v-model="clave" placeholder="Contraseña" required />
        <button type="submit">Ingresar</button><br />
        <a href="#" class="olvide">¿Olvidó contraseña?</a>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const usuario = ref('')
const clave = ref('')
const router = useRouter()

function login() {
  if (usuario.value === 'admin' && clave.value === '1234') {
    localStorage.setItem('usuarioLogueado', usuario.value)
    router.push('/materia')
  } else {
    alert('Credenciales incorrectas')
  }
}
</script>

<style scoped src="../assets/css/login.css"></style>
<style scoped src="../assets/css/base.css"></style>
