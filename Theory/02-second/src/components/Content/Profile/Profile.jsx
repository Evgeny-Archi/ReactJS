import s from './Profile.module.scss'
import Posts from './Posts/Posts'
import Title from '../Title/Title'
import Profileinfo from "./Profileinfo/Profileinfo";

export default function Profile(props) {
    return (
        <div>
                <Title title="Profile" />
                <Profileinfo />
                <Posts state={props.state} addPost={props.addPost} updateNewPost={props.updateNewPost} />
        </div>
    )
}