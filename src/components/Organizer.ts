import { Box, Image, Link } from "theme-ui"


const imageStyle = {
    maxWidth: '100%',
    maxHeight: '10em',
    padding: '0.5em',
    borderRadius: '10%',
    '&:hover': {boxShadow: '0 0 1em #24AAE1'}
}

const Organizer = (props) => {
    const { name, pronouns, link, image, schoolStatus, blurb, email } = props

    return (
        <Box p={2} sx={{ flex: '1 1 200px' }}>
            <b>{name} [{pronouns}]</b> <br/>
            <Link href={link}> <Image src={image} sx={imageStyle} /> </Link> <br/>
            {schoolStatus} <br/>
            ({blurb}) <br/>
            <Link sx={{color: '#1FB6FF'}} href={`mailto:${email}?subject=[CSUS%20Industry%20Mentorship]`}>{email}</Link>
        </Box>
    )
}

export default Organizer