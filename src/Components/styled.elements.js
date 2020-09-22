import styled from 'styled-components';
import {
    FaPen,
    FaTrashAlt
} from 'react-icons/fa';

export const Container = styled.div`
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;
    padding: 30px 50px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
`;

export const Heading = styled.h2`
    text-align: center;
    font-size: 34px;
    color: green;
`;

export const ListContainer = styled.ul`
    margin: 30px auto 0;
    width: 100%;
    padding: 0;
    text-align: left;
`;

export const ListItem = styled.li`
    margin: 10px 0 0;
    padding: 10px 15px;
    border: 1px solid #ededed;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TodoForm = styled.form`
    margin: 0;
    padding: 0;
`;

export const AddTodo = styled.input.attrs(props => ({
  // we can define static props
  type: "text",
  placeholder: "Add todo item"
}))`
    width: 100%;
    padding: 8px 20px;
    border: 1px solid green;
    border-radius: 5px;
    margin-top: 1.25rem;
    border: 1px solid #222222;
    &:focus{
        box-shadow: 0 0 8px lightblue;
        border: 1px solid green !important;
    }
`;

export const Button = styled.button`
    width: calc(60%);
    padding: 13px 30px;
    text-align: center;
    display: block;
    background-color: lightblue;
    color: #222222;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    margin: 20px auto 0;
    transition: .3s;
    &:hover{
        background-color: blue;
        color: #ffffff;
    }
    &:disabled{
        background-color: #efefef;
        color: #222222;
        pointer-events: none
    }
`;

export const ClearButton = styled(Button)`
    ${Button};
    background-color: red;
    color: #ffffff;
    &:hover{
        opacity: .8;
        background-color: red;
    }
`;

export const EditeIcon = styled(FaPen)`
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 5px;
    color: black;
    width: 30px;
    justify-content: center;
    cursor: pointer;
`;


export const DeleteIcon = styled(FaTrashAlt)`
    font-size: 16px;
    display: flex;
    align-items: center;
    color: red;
    width: 30px;
    justify-content: center;
    cursor: pointer;
`;

