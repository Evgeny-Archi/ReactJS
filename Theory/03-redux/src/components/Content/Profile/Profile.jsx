import s from './Profile.module.scss'
import Title from '../Title/Title'
import ProfileInfo from "./Profileinfo/Profileinfo";
import PostsContainer from "./Posts/PostsContainer";

export default function Profile() {
    return (
        <div>
            <Title title="Profile" />
            <ProfileInfo />
            <PostsContainer />
        </div>
    )
}