import './App.css'
import { FollowCard } from './FollowCard'

export function App() {
    return (
        <section className = "App">

            <FollowCard username = "midudev">
                Miguel el dev
            </FollowCard>
            <FollowCard username = "pheralb">
            Pablito
            </FollowCard>
            <FollowCard username = "sindresorhus@gmail.com">
                Gravatar
            </FollowCard>
        </section>
    )
}