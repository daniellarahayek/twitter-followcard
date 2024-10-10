import { useState } from "react"

export function FollowCard({ username, children}) {
    const [isfollowing, setisfollowing] = useState(false)

    const text = isfollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isfollowing
    ? 'followcard-button is-following' : 'followcard-button'

    const handleClick = () => {
        setisfollowing(!isfollowing)
    }

    return(
        <article className = 'followcard'>
            <header className = 'followcard-header'>
                <img
                className = 'followcard-header-avatar'
                alt= "avatar de midudev" src ={`https://unavatar.io/${username}`} />
                <div className = 'followcard-header-info'>
                    <strong>{children}</strong>
                    <span
                    className = 'followcard-header-infoUsername'>
                    @{username}</span>
                </div>
            </header>

            <aside>
                <button className = {buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}