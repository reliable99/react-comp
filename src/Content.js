import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["bola", "kunle", "ayo"];
        const randomIndex = Math.floor(Math.random() * 3);
        return names[randomIndex];
      }
  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}

export default Content