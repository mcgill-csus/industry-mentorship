import SarvasvImg from "@images/sarvasv.jpg"
import SakibImg from "@images/sakib.jpg"
import YoyoImg from "@images/yoyo-power.jpg"

import { Flex } from "theme-ui"
import Organizer from "./Organizer"


const flexStyle = {
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: '100%'
}

const Organizers = () => {
    return (
        <Flex sx={flexStyle}>
            <Organizer
                name={"Sarvasv Arora"}
                pronouns={"He/Him"}
                link={"https://sarvasvarora.me"}
                image={SarvasvImg}
                schoolStatus={"U3 CS and Statistics"}
                blurb={"Trying to make things happen"}
                email={"csus-vpinternal@cs.mcgill.ca"}
            />
            <Organizer
                name={"Yufeng (Yoyo) Peng"}
                pronouns={"She/Her"}
                link={"https://www.linkedin.com/in/yufeng-peng/"}
                image={YoyoImg}
                schoolStatus={"U3 CS and Statistics"}
                blurb={"Likes to enforce unconditional presidential powers on her execs"}
                email={"csus-president@cs.mcgill.ca"}
            />
            <Organizer
                name={"Shadman (Sakib) Asraf"}
                pronouns={"He/Him"}
                link={"https://www.linkedin.com/in/sasraf/"}
                image={SakibImg}
                schoolStatus={"U2 CS and Linguistics"}
                blurb={"Tech bro"}
                email={"csus-vpexternal@cs.mcgill.ca"}
            />
        </Flex>
    )
}

export default Organizers