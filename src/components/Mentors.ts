import Mentor from "./Mentor"
import { Flex, MenuButtonProps } from "theme-ui"

import willImg from "@images/will_zahary.jpg"
import yannImg from "@images/yann.jpg"
import aidanImg from "@images/susuwatari.jpg"
import clarenceImg from "@images/clarence.jpg"
import mohamedImg from "@images/mohamed.jpg"


const flexStyle = {
    textAlign: 'center',
    flexWrap: 'wrap',
    maxWidth: '100%'
}

const Mentors = () => {
    return (
        <Flex sx={flexStyle}>
            <Mentor
                name={"Aidan Gomar"}
                pronouns={"He/They"}
                link={"https://www.linkedin.com/in/aidan-gomar-9394211a7"}
                image={aidanImg}
                schoolStatus={"U2 Computer Science"}
                company={"Tech Intern @ Regional Bank"}
                blurb={"Average Haskell enthusiast"}
            />
            <Mentor
                name={"Clarence Leung"}
                pronouns={"He/Him"}
                link={"https://www.linkedin.com/in/clarle/"}
                image={clarenceImg}
                schoolStatus={"McGill alumnus"}
                company={"Engineering Manager @ Netflix"}
            />
            <Mentor
                name={"Magnus Gao"}
                pronouns={"He/Him"}
                link={"https://www.linkedin.com/in/m-m-gao"}
                schoolStatus={"U2 Software Engineering"}
                company={"SWE Intern @ Google"}
                blurb={"I use Java for Leetcode"}
            />
            <Mentor
                name={"Mike Gao"}
                pronouns={"He/Him"}
                link={"#"}
                schoolStatus={"McGill alumnus"}
                company={"SWE @ Google"}
            />
            <Mentor
                name={"Mohamed Mahmoud"}
                image={mohamedImg}
                pronouns={"He/Him"}
                link={"#"}
                schoolStatus={"U2 Software Engineering"}
                company={"Robotics SWE Intern @ Robotics Design"}
            />
            <Mentor
                name={"Liam Scalzulli"}
                pronouns={"He/Him"}
                link={"https://liam.rs"}
                schoolStatus={"U1 Computer Science"}
                company={"SWE Intern @ Matrox"}
            />
            <Mentor
                name={"Wen Wu (Karmie)"}
                pronouns={"They/Them"}
                link={"#"}
                schoolStatus={"McGill Alumnus"}
                company={"Web3 Developer Lead"}
                blurb={"I test in prod"}
            />
            <Mentor
                name={"William Tang"}
                pronouns={"He/Him"}
                link={"https://www.linkedin.com/in/williaamt/"}
                schoolStatus={"U4 Computer Science"}
                company={"SDE Intern @ Amazon"}
                blurb={"Banana"}
            />
            <Mentor
                name={"Will Zahary"}
                pronouns={"He/Him"}
                link={"https://willzahary.com/"}
                image={willImg}
                schoolStatus={"U2 Honors Math and CS"}
                company={"SDE Intern @ Amazon"}
                blurb={"I listen to jazz and punk rock"}
            />
            <Mentor
                name={"Yann Bonzom"}
                pronouns={"He/Him"}
                link={"https://www.linkedin.com/in/yann-bonzom/"}
                image={yannImg}
                schoolStatus={"U3 Computer Science"}
                company={"Web Dev Intern @ Drone des Champs"}
            />
            <Mentor
                name={"Yingjie (Mike) Xu"}
                pronouns={"He/Him"}
                link={"https://www.linkedin.com/in/yingjie-xu-0619/"}
                schoolStatus={"U3 Honors Software Engineering"}
                company={"SDE Intern @ Shopify"}
            />
            <Mentor
                name={"Cryptopaka"}
                pronouns={"They/Them"}
                link={"https://cryptopaka.com"}
                schoolStatus={"McGill Alumnus"}
                company={"Developer @ Cryptopaka"}
            />
        </Flex>
    )
}

export default Mentors