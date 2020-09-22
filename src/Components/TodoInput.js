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
    handleSubmit,
    editItme
}) => {

    return (
        <>
        <Container>
            <Heading>Todo Input</Heading>
            <TodoForm onSubmit={handleSubmit}>
                <AddTodo onChange={handleChange} value={item} />
    <Button disabled={item ? false : true}>{editItme ? "Edite Item" : "Add Item"}</Button>
            </TodoForm>
        </Container>
        </>
    )
}
