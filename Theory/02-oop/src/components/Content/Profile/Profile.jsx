import s from './Profile.module.scss'
import PostsContainer from './Posts/PostsContainer'
import Title from '../Title/Title'
import Profileinfo from "./Profileinfo/Profileinfo";

export default function Profile() {
    return (
        <div>
            <Title title="Profile" />
            <Profileinfo />
            <PostsContainer />
        </div>
    )
}