import React from 'react'
import {
    ListItem,
    EditeIcon,
    DeleteIcon
} from './styled.elements';

export const TodoItem = ({
    id,
    title,
    handleDelete,
    handleEdit
}) => {
    return (
        <>
            <ListItem>
                {title}
                <EditeIcon onClick={()=> handleEdit(id)} />
                <DeleteIcon onClick={() => handleDelete(id)} />
            </ListItem>  
        </>
    )
}
