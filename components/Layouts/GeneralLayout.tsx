import type { NextPage } from 'next'
import { ReactNode } from 'react'

const GeneralLayout: NextPage<{ children: ReactNode }> = ({ children }) => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
            <div style={{ background: 'lightgray' , flex: '0 0 50px'}}>T</div>
            <div style={{ flex: '1' }}>{children}</div>
        </div>
    )
}

export default GeneralLayout
