import styled from 'styled-components';

export const StyledLogIn = styled.div`
    background-color: var(--grey-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;

    .texto{
        display: flex;
        align-items: center;
        justify-content: center;

        .logo{
            width: 80px;
            height: 80px;
        }
        .welcome{
            text-transform: uppercase;
            color: #eee;
        }
    }

    .btn-logIn{
        display: flex;
        align-items: center;
        padding: 10px 35px;
        background-color: var(--yellow-1);
        border: none;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 300ms, color 300ms;

        svg{
            margin-right: 12px;
        }

        &:hover{
            background-color: black;
            color: var(--yellow-1);
        }
    }

    @media (max-width: 700px){
        .welcome{
            font-size: 20px;
        }
    }

    @media (max-width: 500px){
        .logo{
            display: none;
        }

        .welcome{
            text-align: center;
            margin-bottom: 15px;
        }
    }

`