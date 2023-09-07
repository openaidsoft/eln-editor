import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import SimpleImage from '@/plugins/simple-image'
import Paragraph from '@/plugins/paragraph'


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
      list: List,
      image: SimpleImage, 
    }, 
    onChange: (api, event) => isSlash(event) && handleSlash(api, event),
  }
  const options = Object.assign(_opt, opt)

  return new EditorJS(options)
}

export default {
  init,
}
