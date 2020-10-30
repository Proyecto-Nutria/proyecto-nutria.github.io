import React from "react"
import { Header, Anchor, Nav} from 'grommet'

const VisitorHeader = () => (
    <Header
    background="light-1"
    pad="medium">
        <Anchor href="#" label="Nutria" />
        <Nav direction="row">
            <Anchor href="#" label="About Us" />
            <Anchor href="#" label="Contributors" />
        </Nav>
    </Header>
)

export default VisitorHeader