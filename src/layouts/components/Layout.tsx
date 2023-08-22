import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}:LayoutProps) => {
    return (
        <div className='w-full'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout