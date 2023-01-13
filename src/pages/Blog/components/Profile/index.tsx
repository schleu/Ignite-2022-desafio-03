import { faArchive, faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileImage from '../../../../assets/logo.png'
import { Bio, BioTitle, Container, SocialMedia, SocialMedias } from "./style"
import { Link } from 'react-router-dom'


export const Profile = () => {
    
    

    return (
        <Container>
            <img src={ProfileImage} />
            <Bio>
                <BioTitle>
                    Cameron Williamson
                    <Link to={"#"}>
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={18} height={18}/>
                    </Link>
                </BioTitle>
                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <SocialMedias>
                    <SocialMedia>
                        <FontAwesomeIcon icon={faArchive} width={18} height={18}/>
                        cameronwll
                    </SocialMedia>
                    <SocialMedia>
                        <FontAwesomeIcon icon={faBuilding} width={18} height={18}/>
                        Rocketseat
                    </SocialMedia>
                    <SocialMedia>
                        <FontAwesomeIcon icon={faUserGroup} width={18} height={18}/>
                        32 seguidores
                    </SocialMedia>
                </SocialMedias>
            </Bio>
        </Container>
    )
}