import { Avatar as Av } from "theme-ui"

const avatarStyle = {
    width: '5em',
    '&:hover': {boxShadow: '0 0 1em #24AAE1'}
}

const Avatar = (props) => {
    const src = props.src
    return (
        <Av sx={avatarStyle} src={src}/>
    )
}

export default Avatar