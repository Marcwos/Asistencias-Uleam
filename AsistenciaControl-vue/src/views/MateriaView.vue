<template>
    <Header />
  <main class="contenedor-materias">
    <div class="bloque-materias">
      <h2 class="titulo-seccion">Mis Materias</h2>

      <div class="filtros">
        <input type="text" id="buscador" placeholder="Buscar materia..." />
        <select id="ordenar">
          <option value="nombre">Ordenar por nombre</option>
          <option value="cursos">Ordenar por cantidad de cursos</option>
        </select>
      </div>

      <div class="grid-materias" id="lista-materias">
        <!-- Aquí se renderizan las tarjetas -->
      </div>
    </div>  
  </main>
</template>

<script setup>
    import Header from '../components/Header.vue'
    
</script>
<style scoped src="../assets/css/materias.css"></style> 
