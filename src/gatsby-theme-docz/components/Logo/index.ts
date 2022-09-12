import { Flex, Image } from 'theme-ui'
import { Link } from 'docz'

import * as styles from './styles'

import CSUSLogo from '@images/csus_logo.png'

export const Logo = () => {
    return (
        <Flex alignItems="center" >
            <Link to='/' >
                <Image src={CSUSLogo} alt="McGill CSUS" sx={styles.image} />
            </Link>
        </Flex>
    )
}