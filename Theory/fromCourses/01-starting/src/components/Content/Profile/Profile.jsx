import s from './Profile.module.scss'
import Posts from './Posts/Posts'
import Title from '../Title/Title'

export default function Profile() {
    return (
        <div>
                <Title title="Profile" />
                <p>This first ever State of CSS survey reached 11,307 people in 135 different countries. This obviously only represents a tiny part of the overall CSS developer community, but for a first edition we think it's pretty encouraging.</p>

                <p>And it's fair to assume our survey <a href="/audience">audience</a> leans a bit towards early adopters and the more cutting-edge part of the community, since they are the ones most likely to hear about a survey in the first place. But we like to think this also means our data is a good preview of where the mainstream side of the ecosystem will be a few years from now.</p>

                <p>My posts:</p>

                <Posts />
        </div>
    )
}