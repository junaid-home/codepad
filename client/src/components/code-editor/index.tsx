import {useRef, useLayoutEffect} from 'react'
import codeMirror, {Editor, EditorFromTextArea} from 'codemirror'
import {useTheme} from '../../store/themeContext'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/keymap/sublime'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/xq-light.css'

function CodeEditor({defaultValue, onChange}: Props) {
  const [theme] = useTheme()
  const textArea = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    let editor: EditorFromTextArea

    if (textArea && textArea.current) {
      editor = codeMirror.fromTextArea(textArea.current, {
        lineNumbers: true,
        theme: theme === 'light' ? 'xq-light' : 'material',
        keyMap: 'sublime',
      })

      editor.setSize('100%', '100%')
      editor.setValue(defaultValue)
      editor.on('keyup', e => onChange(e))
    }

    return () => {
      editor.toTextArea()
    }
  }, [onChange, defaultValue, theme])

  return <textarea ref={textArea}></textarea>
}

interface Props {
  defaultValue: string
  onChange: (event: Editor) => void
}

export default CodeEditor
