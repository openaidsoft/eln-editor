<script setup>
import { ref, onMounted } from 'vue'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@/plugins/simple-image'
import Paragraph from '@/plugins/paragraph'

const output = ref('')
const editorRef = ref(null)
const test_el = ref(null)

const isSlash = (event) => '/' === event.detail?.target.holder.innerText

const handleSlash = (api, event) => {
  // console.log('event:', event)
  // const evt = new KeyboardEvent('keydown', {
  //   key: 'Tab',
  //   code: 'Tab',
  //   keyCode: 9,
  //   which: 9,
  //   shiftKey: false,
  // });

  const mevt = new MouseEvent('click', {
    bubbles: true, // 이벤트가 버블링될 것인지 여부
    cancelable: true, // 이벤트가 취소 가능한지 여부
    view: window, // 이벤트가 연결된 뷰
    button: 0, // 마우스 버튼 (0은 왼쪽 버튼)
    buttons: 1, // 눌린 마우스 버튼 (1은 왼쪽 버튼)
    clientX: 0, // 마우스 클릭 좌표 X
    clientY: 0, // 마우스 클릭 좌표 Y
  });

  const target = event.detail.target.holder
  // console.log('target:', target)
  target.innerText = ''
  // target.dispatchEvent(evt)
  
  // document.getElementById('editorjs').focus()
  // const el = document.getElementsByClassName('ce-block')[0]
  const plusBtnEl = document.getElementsByClassName('ce-toolbar__plus')[0]
  const el1 = document.getElementsByClassName('ce-toolbar')[0]
  const el2 = document.getElementsByClassName('ce-toolbar__actions')[0]
  // el.setAttribute('tabindex', '0')
  // el.classList.add('ce-block--focused')
  el1.classList.add('ce-toolbar--opened')
  el2.classList.add('ce-toolbar__actions--opened')
  plusBtnEl.dispatchEvent(mevt)

}

const editor = new EditorJS({ 
  // holder: 'editorjs', 
  // autofocus: true,
  placeholder: "명령어는 '/' 입력",
  // defaultBlock: 'paragraph',
  tools: { 
    // paragraph: Paragraph,
    header: Header, 
    list: List,
    image: SimpleImage, 
  }, 
  onChange: (api, event) => isSlash(event) && handleSlash(api, event),
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

const test = (e) => {
  // window.alert('aaa')
  console.log('e:', e)
}

onMounted(() => {
  const kEvent = new KeyboardEvent('keydown', {
    key: 'Enter', 
    code: 'Enter',
    keyCode: 13,
    which: 13,
    shiftKey: false, // Shift 키를 누른 경우 true로 설정할 수 있습니다.
  });
  
  const mEvent = new MouseEvent('click', {
    bubbles: true, // 이벤트가 버블링될 것인지 여부
    cancelable: true, // 이벤트가 취소 가능한지 여부
    view: window, // 이벤트가 연결된 뷰
    button: 0, // 마우스 버튼 (0은 왼쪽 버튼)
    buttons: 1, // 눌린 마우스 버튼 (1은 왼쪽 버튼)
    clientX: 0, // 마우스 클릭 좌표 X
    clientY: 0, // 마우스 클릭 좌표 Y
  });

  // test_el.value.dispatchEvent(kEvent);
  // test_el.value.dispatchEvent(mEvent);
  // document.getElementById('test').dispatchEvent(mEvent)

  /*
  const editorjs = new EditorJS({ 
    // holder: 'editorjs', 
    // autofocus: true,
    placeholder: "명령어는 '/' 입력",
    defaultBlock: 'paragraph',
    tools: { 
      paragraph: Paragraph,
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

        // const evt = new KeyboardEvent('keydown', {
        //   code: 'Tab'
        // })
        const evt = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        })
        console.log('evt:', evt)
        console.log('holder:', event.detail.target.holder)
        // event.detail.target.holder.dispatchEvent(evt)
        // event.detail.target.holder.innerText = 'wow'
        let el = document.getElementsByClassName('ce-toolbar__plus')[0]
        console.log('el:', el)
        el.dispatchEvent(evt)
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
  */
})
</script>

<template>
<div ref="editorRef" id="editorjs" tabindex="0"></div>
<div>
  <button @click="save2">저장</button>
  <button @click="clear">클리어</button>
  <button @click="test" @keydown.enter="test" ref="test_el" id="test">테스트</button>
</div>
<div>{{ output }}</div>
</template>

<style scoped>

</style>