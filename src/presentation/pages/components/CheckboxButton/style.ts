import styled from 'styled-components';

interface Props {
    checked: boolean;
}

export const CheckboxContainer = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})<Props>`
    overflow: hidden; 
    white-space: nowrap;
    width: 1px;
    margin: -1px;
    padding: 0;
    background-color: #fff;
`;

export const Text = styled.label`
    font: 400 14px 'Inter';
    color: rgba(5, 59, 75, 1);
    white-space: nowrap;
`;

export const StyledCheckbox = styled.label<Props>`
    box-sizing: border-box;
    width: 17px;
    height: 17px;
    padding: 2px;

    border: 2px solid #406A76;
    border-radius: 3px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;