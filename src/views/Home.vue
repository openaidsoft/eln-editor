<script setup>
import { ref } from 'vue'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@/plugins/simple-image'

const output = ref('')

const editor = new EditorJS({ 
  holder: 'editorjs', 
  tools: { 
    header: Header, 
    list: List,
    image: SimpleImage, 
  }, 
})

const save = () => {
  editor.save().then( savedData => {
    output.value = JSON.stringify(savedData, null, 4);
  })
}

const save2 = async () => {
  const rs = await editor.save()
  console.log('rs:', rs)
}
</script>

<template>
<div id="editorjs"></div>
<div>
  <button @click="save2">저장</button>
</div>
<div>{{ output }}</div>
</template>

<style scoped>

</style>