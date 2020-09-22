import React from 'react'
import {
    Container,
    Heading,
    ListContainer,
    ClearButton
} from './styled.elements';

import {TodoItem} from './TodoItem';

export const TodoList = ({
    items,
    handleDelete,
    handleEdit,
    handleClearList,
    addedItems
}) => {
    return (
        <>
            <Container>
                <Heading>Todo List</Heading>
                <ListContainer>
                {items.map((item) => <TodoItem key={item.id} title={item.title} handleDelete={handleDelete} handleEdit={handleEdit} id={item.id} />)}
                </ListContainer>
                {
                    addedItems ? <ClearButton onClick={handleClearList}>Clear List</ClearButton> : ''
                }
            </Container>
        </>
    )
}
