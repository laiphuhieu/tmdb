import React from 'react'

import Layout from '@/layouts/components/Layout'
import Container from '@/layouts/components/Container/Container'
import PopularBody from '@/layouts/PopularBody/PopularBody'

const Popular = () => {
    return (
        <Layout>
            <Container>
                <PopularBody title='Movies Popular'/>
            </Container>
        </Layout>
    )
}

export default Popular