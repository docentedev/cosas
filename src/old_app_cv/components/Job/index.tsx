import { useState } from 'react'
import styles from './index.module.css'
import Period from './Period'
const Job = ({ title, start, end, text, imageSrc, company, tags, excerpt }: any) => {
    const [toggleContent, setToggleContent] = useState(false)
    return (
        <div className={styles.Job}>
            <div className="card">
                <Period start={start} end={end} />
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className={`${styles.image} image is-48x48`}>
                                <img src={imageSrc} alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{company}</p>
                        </div>
                    </div>
                    <div className="tags">
                        {tags.map((tag: any) => (
                            <span className="tag" key={tag}>{tag}</span>
                        ))}
                    </div>
                    <div className={`${styles.content} ${!toggleContent ? styles.contentActive : ''}`}>
                        <div className="content" dangerouslySetInnerHTML={{ __html: excerpt }} />
                    </div>
                    <div className={`${styles.content} ${toggleContent ? styles.contentActive : ''}`}>
                        <div className="content" dangerouslySetInnerHTML={{ __html: text }} />
                    </div>
                    <button className="button is-small is-primary is-light mt-4" onClick={() => setToggleContent(!toggleContent)}>
                        {toggleContent ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Job
