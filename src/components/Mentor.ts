import Avatar from "./Avatar"
import { Link, Box } from "theme-ui"
import stockImg from "@images/stock_image.jpg"


const Mentor = (props) => {
    const { name, pronouns, link, image, schoolStatus, company, blurb } = props

    return (
        <Box p={1} m={4} sx={{ flex: '1 1 200px' }}>
            <b>{name} [{pronouns}]</b> <br/>
            <Link href={link}> 
                {(image && <Avatar src={image} />) || <Avatar src={stockImg}/>}
            </Link> <br/>
            {schoolStatus} <br/>
            {company} <br/>
            {blurb && "("}{blurb && blurb}{blurb && ")"}
        </Box>
    )
}

export default Mentor