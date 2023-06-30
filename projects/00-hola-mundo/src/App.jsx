import React, { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    // const format = (userName) => `@${userName}`


    return (
        <section className='Tw-app'>
            <TwitterFollowCard
                userName="midudev"
                initialIsFollowing={false}
            >
                Midudev
            </TwitterFollowCard>

            <TwitterFollowCard
                userName="elonmusk"
                initialIsFollowing={true}
            >
                Elon musk
            </TwitterFollowCard>


        </section>
    )

}