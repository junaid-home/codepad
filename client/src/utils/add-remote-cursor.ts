import {Editor, Position} from 'codemirror'

function addRemoteCursor(editor: Editor, position: Position) {
  editor.setBookmark(position, {widget: undefined})
  const cursorCoords = editor.cursorCoords(position)

  const cursorElement = document.createElement('span')
  cursorElement.style.borderLeftStyle = 'solid'
  cursorElement.style.borderLeftWidth = '2px'
  cursorElement.style.borderLeftColor = '#00A4FF'
  cursorElement.style.height = `${cursorCoords.bottom - cursorCoords.top}px`
  cursorElement.style.padding = '0px'
  cursorElement.style.zIndex = '0'

  editor.setBookmark(position, {widget: cursorElement})
}

export default addRemoteCursor
