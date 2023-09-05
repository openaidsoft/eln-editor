<script setup>
import { ref, onMounted } from 'vue'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@/plugins/simple-image'

const output = ref('')
const editor = ref(null)
const test_el = ref(null)

const isSlash = (event) => '/' === event.detail?.target.holder.innerText

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

const test = () => {
  window.alert('aaa')
}

onMounted(() => {
  // const evt2 = new KeyboardEvent('keydown', {
  //   code: 'Enter'
  // })
  // console.log('test_el:', test_el.value)
  // test_el.value.focus()
  // test_el.value.dispatchEvent(evt2)

  const editorjs = new EditorJS({ 
    // holder: 'editorjs', 
    // autofocus: true,
    placeholder: "명령어는 '/' 입력",
    tools: { 
      header: Header, 
      list: List,
      image: SimpleImage, 
    }, 
    onChange: (api, event) => {
      // console.log('api:', api)
      // console.log('this:', this) // undefined
      console.log('event:', event)
      const s = isSlash(event)
      if (s) {
        const evt = new KeyboardEvent('keydown', {
          code: 'Tab'
        })
        console.log('evt:', evt)
        // console.log('holder:', event.detail.target.holder)
        // event.detail.target.holder.dispatchEvent(evt)
        // event.detail.target.holder.innerText = 'wow'
        // editor.value.dispatchEvent(evt)

      }
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

})
</script>

<template>
<div ref="editor" id="editorjs"></div>
<div>
  <button @click="save2">저장</button>
  <button @click="clear">클리어</button>
  <button @click="test" ref="test_el">테스트</button>
</div>
<div>{{ output }}</div>
</template>

<style scoped>

</style>