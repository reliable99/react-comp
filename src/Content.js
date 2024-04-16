import { useState } from "react";

const Content = () => {

  const [name, setName] = useState("kunle")
  const [count, setCount] = useState(0)
    const handleNameChange = () => {
        const names = ["bola", "kunle", "ayo"];
        const randomIndex = Math.floor(Math.random() * 3);
        setName(names[randomIndex]);
      }

      const handleClick = () => {
        setCount(count+1)
        setCount(count+1)
        console.log(count)
      }

      const handleClick2 = (name) => {
        console.log(count)
      }

    
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}>change name  </button>

        <button onClick={handleClick}>click it  </button>

        <button onClick={handleClick2}>click it  </button>
    </main>
  )
}

export default Content