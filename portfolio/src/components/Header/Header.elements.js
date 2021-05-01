import styled from 'styled-components'

export const HeaderWrap = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const ToggleThemeDiv = styled.div`
    display: flex;
    align-items: center;
`
export const ThemeLabel = styled.label`
    position: relative;
    display: block;
    width: 38px;
    height: 20px;
    background: transparent;
    border: 2px solid #d5d5e5;
    border-radius: 24px;
    cursor: pointer;
`
export const ThemeSpan = styled.span`
    position: absolute;
    width: 28px;
    height: 28px;
    top: 50%;
    transform: translateY(-50%);
    left: -8px;
    background: #d5d5e5;
    border-radius: 50%;
    transition: left 0.2s ease;
`
export const ThemeSVG = styled.svg`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);
    fill: ${(props) => (props.ThemeColor ? '#d5edff' : '#f6cb49')};
`
export const ThemeInput = styled.input`
    visibility: hidden;
    &:checked + ${ThemeLabel} > ${ThemeSpan} {
        left: 14px;
    }
`
