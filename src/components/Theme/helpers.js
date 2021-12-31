const theme = prop => value => props => props.theme[prop][value] || value

export const th = {
    space: theme('spaces'),
    size: theme('fontSizes'),
    color: theme('colors'),
}

export const background = props =>
    props.bg && `background: ${props.theme.colors[props.bg]};`

export const font = props => {
    const color =
        props.color &&
        `color: ${props.theme.colors[props.color] || props.color};`

    const fontSize = props.fontSize ?? null
    const size =
        fontSize !== null && `font-size: ${props.theme.fontSizes[fontSize]}px;`

    return `
        ${color ? color : ''}
        ${size ? size : ''}
    `
}

export const flexbox = props => {
    const display = props.flexbox && 'display: flex'
    const justifyContent = props.justifyContent || (props.center && 'center')
    const alignItems = props.alignItems || (props.center && 'center')

    if (display) {
        return `
            ${display};
            ${props.col ? 'flex-direction: column;' : ''}
            ${props.flex ? `flex: ${props.flex};` : ''}
            ${justifyContent ? `justify-content: ${justifyContent};` : ''}
            ${alignItems ? `align-items: ${alignItems};` : ''}
        `
    }
}

export const margin = props => {
    const mb = props.mb ?? props.my ?? props.m ?? null
    const mt = props.mt ?? props.my ?? props.m ?? null
    const mr = props.mr ?? props.mx ?? props.m ?? null
    const ml = props.ml ?? props.mx ?? props.m ?? null

    return `
        ${mb !== null ? `margin-bottom: ${props.theme.spaces[mb]}px;` : ''}
        ${mt !== null ? `margin-top: ${props.theme.spaces[mt]}px;` : ''}
        ${ml !== null ? `margin-left: ${props.theme.spaces[ml]}px;` : ''}
        ${mr !== null ? `margin-right: ${props.theme.spaces[mr]}px;` : ''}
    `
}

export const padding = props => {
    const pb = props.pb ?? props.py ?? props.p ?? 'unset'
    const pt = props.pt ?? props.py ?? props.p ?? 'unset'
    const pr = props.pr ?? props.px ?? props.p ?? 'unset'
    const pl = props.pl ?? props.px ?? props.p ?? 'unset'

    return `
        ${pb !== 'unset' ? `padding-bottom: ${props.theme.spaces[pb]}px;` : ''}
        ${pt !== 'unset' ? `padding-top: ${props.theme.spaces[pt]}px;` : ''}
        ${pl !== 'unset' ? `padding-left: ${props.theme.spaces[pl]}px;` : ''}
        ${pr !== 'unset' ? `padding-right: ${props.theme.spaces[pr]}px;` : ''}
    `
}
