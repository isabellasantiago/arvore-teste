import { useState } from 'react';
import { PagePattern } from './presentation/pages/components/PagePattern';

function App() {
  const [count, setCount] = useState(0)

  return (
    <PagePattern />
  )
}

export default App
