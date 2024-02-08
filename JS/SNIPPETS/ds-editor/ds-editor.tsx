import { classNames } from '@ls-fe/utils'
import { useMemo, useCallback } from 'react'
import {
  Editor,
  BaseEditor, // TODO: is it needed here?
  createEditor,
} from 'slate'
import type { ReactElement } from 'react'
import { ReactEditor, RenderElementProps, RenderLeafProps, useSlate } from 'slate-react'
import type { DsEditorProps } from './ds-editor.types'
import { Editable, withReact, Slate } from 'slate-react'
import { withHistory } from 'slate-history'
// import { DsEditorToolbar } from "./components/ds-editor-toolbar/ds-editor-toolbar.tsx"
import { initialValue } from './config.ts' // TODO probably not from config, from email-composer

// TODO: figure out types customization and implement it properly https://arc.net/l/quote/ffzewvsj
type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

export function DsEditor({
  // errorMessage,
  // status = 'default',
  // placeholder = '',
  id,
  // value: initialValue = '',
  // disabled,
  // required,
  // maxLength,
  className,
  // onChange,
}: DsEditorProps): ReactElement<DsEditorProps> {
  const renderElement = useCallback((props: RenderElementProps) => <Block {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <div
      className={classNames('', className)}
      data-testid={`${id}-editor`}
      id={`${id}-editor`}
    >
      <Slate editor={editor} initialValue={initialValue}>
        {/*<DsEditorToolbar />*/}
        <div>
          Toolbar
          <MarkButton format="bold" icon="B" />
          <MarkButton format="italic" icon="I" />
          <MarkButton format="underline" icon="U" />
          <MarkButton format="code" icon="C" />
        </div>
        <Editable
          className={classNames('ds-outline-none ds-w-full ds-h-full ds-border ds-border-grey-600 ds-p-sm')}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </Slate>
    </div>
  )
}

const Block = ({ attributes, children, element }: RenderElementProps) => {
  switch (element.type) {
    case 'block-quote':
      return (
        <blockquote {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 {...attributes}>
          {children}
        </h2>
      )
    case 'list-item':
      return (
        <li {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p {...attributes}>
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = () => { }

const toggleMark = (editor: ReactEditor, format: MarkType) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

type MarkType = 'bold' | 'italic' | 'underline' | 'code'

type MarkButtonProps = {
  icon: string // TODO: temporary solution
  format: MarkType
}
const MarkButton = ({ icon, format }: MarkButtonProps) => {
  const editor: ReactEditor = useSlate()

  return (
    <button
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }
      }
    >
      {icon}
    </button>
  )
}
