import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    const format = (userName) => `@${userName}`
    return (
        <section className='Tw-app'>
            <TwitterFollowCard
                formatUserName={format}
                userName="midudev"
                name="Miguel angel"
                isFollowing="Siguiendo"
            />

            <TwitterFollowCard
                formatUserName={format}
                userName="midudev"
                name="Miguel angel"
                isFollowing="Siguiendo"
            />

            <TwitterFollowCard
                formatUserName={format}
                userName="midudev"
                name="Miguel angel"
                isFollowing="Siguiendo"
            />

        </section>
    )

}