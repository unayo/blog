<template>
  <div>
    <h1>游標座標</h1>
    <h2>x: {{ x }}</h2>
    <h2>y: {{ y }}</h2>
  </div>
</template>

<script setup>
const { x } = useMouseX()
const { y } = useMouseY()
</script>
