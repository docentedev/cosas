import styles from './index.module.css'

const Profile = () => {
    return (
        <div className={styles.containerProfile}>
            <video
                width="320"
                height="240"
                muted={true}
                src="/videos/profile.mp4"
                autoPlay={true}
            />
        </div>
    )
}

export default Profile
