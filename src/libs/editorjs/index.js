import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import NestedList from '@editorjs/nested-list'
// import SimpleImage from '@/plugins/simple-image'
import SimpleImage from '@editorjs/simple-image'
console.log('SimpleImage:', SimpleImage)
import Paragraph from '@/plugins/paragraph'
import ImageTool from '@editorjs/image'
import Table from '@editorjs/table'
import LinkTool from '@editorjs/link'
import CodeTool from '@editorjs/code'
// import EJLaTeX from 'editorjs-latex'
import EJLaTeX from '@/../node_modules/editorjs-latex/src/index.js'

import '@/../node_modules/editorjs-latex/src/style.css'


const isSlash = (event) => '/' === event.detail?.target.holder.innerText

const handleSlash = (api, event) => {
  // console.log('event:', event)
  // const kevt = new KeyboardEvent('keydown', {
  //   key: 'Tab',
  //   code: 'Tab',
  //   keyCode: 9,
  //   which: 9,
  //   shiftKey: false,
  // });

  const mevt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
    button: 0,
    buttons: 1,
    clientX: 0,
    clientY: 0,
  });

  const target = event.detail.target.holder
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

const init = (opt = {}) => {
  const _opt = {
    // holder: 'editorjs', 
    // autofocus: true,
    placeholder: "명령어는 '/' 입력",
    defaultBlock: 'paragraph',
    tools: { 
      paragraph: Paragraph,
      header: Header, 
      // list: List,
      // list: NestedList,
      list: {
        class: NestedList,
        inlineToolbar: true,
        config: {
          defaultStyle: 'unordered'
        },
      },
      table: Table,
      linkTool: LinkTool,
      code: CodeTool,
      image: SimpleImage, 
      // image: {
      //   class: SimpleImage,
      //   inlineToolbar: true
      //   // inlineToolbar: ['link'],
      // },
      // image: {
      //   class: ImageTool,
      //   config: {
      //     endpoints: {
      //       byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
      //       byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
      //     }
      //   }
      // },
      Math: {
        class: EJLaTeX,
        shortcut: 'CMD+SHIFT+M',
        // config: {
        //     css: '.math-input-wrapper { padding: 5px; }'
        // }
      },
    }, 
    onChange: (api, event) => isSlash(event) && handleSlash(api, event),
  }
  const options = Object.assign(_opt, opt)

  return new EditorJS(options)
}

export default {
  init,
}
