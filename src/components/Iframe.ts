import { Embed } from "theme-ui"


const iframeStyle = {
    frameBorder: '0',
    width: '100%',
    height: '596px',
    maxWidth: '100%'
}

const Iframe = (props) => {
    const src = props.src
    return (
        <Embed src={src} allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" sx={iframeStyle} />
    )
}

export default Iframe