import React from 'react'
import {
    Container,
    Heading,
    ListContainer,
    ListItem,
    ClearButton,
    EditeIcon,
    DeleteIcon
} from './styled.elements';

export const TodoList = () => {
    return (
        <>
            <Container>
                <Heading>Todo List</Heading>
                <ListContainer>
                    <ListItem>
                        Item
                        <EditeIcon />
                        <DeleteIcon />
                    </ListItem>
                </ListContainer>
                <ClearButton>Clear List</ClearButton>
            </Container>
        </>
    )
}
