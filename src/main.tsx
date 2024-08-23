import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Calculator from './Calculator.tsx'
import Parent from './Parent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Calculator/>
    {/* <Parent>

    </Parent> */}
  </StrictMode>,
)
