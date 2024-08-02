import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [test, setTest] = useState(100);
  const [flag, setFlag] = useState(false);
  const [num, setNum] = useState();

  // 更新処理の練習
  const handleClick = () => {
    setTest(test + 1);
  }

  const handleFlagClick = () => {
    setFlag(!flag);
  }

  const handleNumClick = () => {
    const random = Math.floor(Math.random() * 3);
    setNum(random);
  }

  return (
    <>
{/* Form.jsxを読み込む */}
<Form />

    <div>
      {num === 0 && <h1>大吉</h1>}
      {num === 1 && <h1>中吉</h1>}
      {num === 2 && <h1>小吉</h1>}
      <button onClick={handleNumClick}>ランダムボタン</button>
    </div>

    {flag && <div>フラグがtrueです</div>}
    {!flag && <div>フラグがfalseです</div>}

      <div>
        <h1>{test}</h1>
        <button onClick={handleFlagClick}>更新</button>
      </div>
      <Test 
        gs="0730React second"
        lab={17}
        react="目じるしの練習をしています"
      />
      <Button text="送信" />
<br />
      <Button text="登録" />
    </>
  )
}

export default App
