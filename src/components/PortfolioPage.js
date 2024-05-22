import React from 'react'
import "./PortfolioPage.css"
import { useParams, Link } from 'react-router-dom'
import { portfolioList } from "../config/portfolio-data"

function PortfolioPage() {
    const { id } = useParams();
    const [project, setProject] = React.useState(null);

    React.useEffect(() => {
        let project = portfolioList.find((project) => project.id === parseInt(id))

        if (project) {
            setProject(project)
        }
    }, []);

    return (
        <div>
            <section className="portfoliopage">
                <div className="container">
                    {project ?
                        (<div className="portfoliopage-wrap">
                            <img src={project.cover} alt="cover" />
                            <h1>{project.title}</h1>
                            <p className='portfoliopage-desc'>{project.description}</p>
                        </div>) :
                        (<div className="empty-list">
                            <img src="/assets/images/13525-empty.gif" alt="empty" />
                        </div>)
                    }
                    <Link className='portfoliopage-goback' to='/portfolio'>
                        <span>&#8592;</span> Go Back
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default PortfolioPage