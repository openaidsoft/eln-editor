<script setup>
import { ref, onMounted } from 'vue'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@/plugins/simple-image'

const output = ref('')

const isSlash = (event) => '/' === event.detail?.target.holder.innerText

const editor = new EditorJS({ 
  // holder: 'editorjs', 
  autofocus: true,
  placeholder: "명령어는 '/' 입력",
  tools: { 
    header: Header, 
    list: List,
    image: SimpleImage, 
  }, 
  onChange: (api, event) => {
    // console.log('api:', api)
    // console.log('event:', event)
    const s = isSlash(event)
    // console.log('s:', s)
  },
  // on: (e, t) => {
  //   console.log('on e:', e)
  //   console.log('on t:', t)
  // },
  // data: {
  //   time: 1552744582955,
  //   blocks: [
  //     {
  //       type: "image",
  //       data: {
  //         url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
  //       }
  //     }
  //   ],
  //   version: "2.11.10"
  // }
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

const clear = () => {
  editor.clear()
}

onMounted(() => {
  console.log('editor:', editor)

  // editor.on(('#editorjs', 'keydown', () => {
  //   console.log('keydown')
  // }))
})
</script>

<template>
<div id="editorjs"></div>
<div>
  <button @click="save2">저장</button>
  <button @click="clear">클리어</button>
</div>
<div>{{ output }}</div>
</template>

<style scoped>

</style>