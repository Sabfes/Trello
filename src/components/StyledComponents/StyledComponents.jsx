import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    align-items: center;
    
    margin-top: ${({mt}) => mt ? mt + 'px' : '0px' };
    margin-left: ${({ml}) => ml ? ml + 'px' : '0px' };
    margin-right: ${({mr}) => mr ? mr + 'px' : '0px' };
    margin-bottom: ${({mb}) => mb ? mb + 'px' : '0px' };
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
    
    margin-top: ${({mt}) => mt ? mt + 'px' : '0px' };
    margin-left: ${({ml}) => ml ? ml + 'px' : '0px' };
    margin-right: ${({mr}) => mr ? mr + 'px' : '0px' };
    margin-bottom: ${({mb}) => mb ? mb + 'px' : '0px' };
`

export const Input = styled.input`
    width: 300px;
    height: 50px;
    border: 1px solid grey;
    padding: 10px;
    outline: none;
    color: grey;
    font-weight: 300;
    font-size: 15px;
`

export const Button = styled.button`
    min-width: 100px;
    height: 40px;
    color: ${({color}) => color ? color : 'black'};
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    cursor: pointer;
    background: ${({bg}) => bg ? bg : 'white' };
    
    margin-top: ${({mt}) => mt ? mt + 'px' : '0px' };
    margin-left: ${({ml}) => ml ? ml + 'px' : '0px' };
    margin-right: ${({mr}) => mr ? mr + 'px' : '0px' };
    margin-bottom: ${({mb}) => mb ? mb + 'px' : '0px' };
`
