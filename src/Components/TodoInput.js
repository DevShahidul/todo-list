import React from 'react';
import {
    Container,
    Heading,
    TodoForm,
    AddTodo,
    Button
} from './styled.elements';

export const TodoInput = ({
    item,
    handleChange,
    handleSubmit
}) => {

    return (
        <>
        <Container>
            <Heading>Todo Input</Heading>
            <TodoForm onSubmit={handleSubmit}>
                <AddTodo onChange={handleChange} value={item} />
                <Button>Add Item</Button>
            </TodoForm>
        </Container>
        </>
    )
}
