export function TwitterFollowCard({ formatUserName, userName, name, isFollowing }) {


    return (

        < article className="tw-followCard" >
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt="El avatar de de midu dev"
                    src={`https://unavatar.io/${userName}`} />

                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    {isFollowing}
                </button>
            </aside>
        </article>
    )
}