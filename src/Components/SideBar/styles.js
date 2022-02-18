import styled from 'styled-components';

export const StyledSideBar = styled.aside`
    background-color: var(--grey-1);
    width: 55px;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 20px 15px;
    overflow-x: hidden;
    transition: width 200ms;

    &.open{
        width: 320px;
    }

    .menu-button{
        width: 25px;
        height: 25px;
        background-color: transparent;
        border: none;
        margin-bottom: 50px;
        cursor: pointer;

        &.open{
            margin-left: 3px;

            .menu-icon2:after{
                opacity: 0;
            }

            .menu-icon:before{
                transform: rotate(45deg) translateY(5px);  
            }

            .menu-icon:after{
                transform: rotate(315deg) translate(-1px, -5px);
            }
        }

        .menu-icon:after,
        .menu-icon2:after,
        .menu-icon:before{
            content: '';
            background-color: white;
            width: 24px;
            height: 3px;
            display: block;
            transition: all 200ms cubic-bezier(0, 0.82, 1, 1.22);
        }

        .menu-icon2:after{
            margin-top: 3px;
        }

        .menu-icon:before{
            margin-bottom: 3px;
        }

    }

    .settings{
        margin-top: -40px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a{
            color: #666;
            text-decoration: none;
            font-weight: bold
        }
        .cerrar-sesion{
            background-color: transparent;
            border: none;
            color: #666;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
        }
    }

    .user{
        margin-bottom: 50px;

        button{
            display: flex;
            align-items: center;
            font-size: 20px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: none;
            background-color: transparent;
            color: #eee;
            cursor: pointer;
            width: max-content;
        }

        svg{
            vertical-align: middle;
        }

        img{
            width: 25px;
            height: 25px;
            border-radius: 999px;
            margin-right: 30px;
        }
    }

    .chevron{
        transition: transform 300ms;
        transform: rotate(90deg);
    }

    details[open]{
        span{
            transition: transform 300ms;
            transform: rotate(90deg);
        }
    }

    h1{
        margin: 0;
        color: #eee;
    }

    details{
        margin-bottom: 20px;
    }

    .canales{
        display: flex;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 15px;
        margin-left: 0;

        span{
            svg{
                vertical-align: middle;
            }
        }
        
        .channels{
            margin-right: 35px;
            min-width: 25px;
        }

        .red{
            margin-right: 35px;
            min-width: 25px;
        }

        .ediciones{
            margin-right: 35px;
            min-width: 25px;
        }
        
    }
    
    .list{

        li{
            list-style: none;
            color: #666;
            margin-bottom: 10px;
        }
        a{
            color: currentcolor;
            text-decoration: none;
            font-weight: bold
        }
    }

    @media (max-width: 500px) {
        .user{
            button{
                font-size: 14px;
            }
        }
        .canales{
            font-size: 14px;
        }
    }
`