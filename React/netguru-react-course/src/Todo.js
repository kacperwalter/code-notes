import React from 'react'

export default function Todo({ todo }) {
  return (
      <div>
        <label>
          <input type="checkbox" checked={todo.complete} defaultChecked={false} />
          {todo.name}
        </label>
      </div>
    )
}
