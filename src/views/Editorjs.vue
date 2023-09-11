<script setup>
import { ref } from 'vue'
import editorjs from '@/libs/editorjs'

const output = ref('')
const editorRef = ref(null)
const editor = editorjs.init()

const save = async () => {
  const rs = await editor.save()
  console.log('rs:', rs)
  output.value = JSON.stringify(rs, null, 4);
}

const clear = () => {
  editor.clear()
}

</script>

<template>
<div ref="editorRef" id="editorjs" tabindex="0"></div>
<div>
  <button @click="save">저장</button>
  <button @click="clear">클리어</button>
</div>
<div>{{ output }}</div>
</template>

<style scoped>

</style>