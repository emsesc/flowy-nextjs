import styles from './nav.module.css'

export default function Nav({ title, repoName }) {

    return (
        <div id="navigation">
        <div id="leftside">
            <div id="details">
            <div id="back"><img src="/images/arrow.svg"></img></div>
            <div id="names">
                <p id="title">{title}</p>
                <p id="subtitle">{repoName}</p>
            </div>
          </div>            
        </div>
        <div id="buttonsright">
            <div id="discard">Discard</div>
            <div id="publish">Publish to Github</div>
      </div>
      </div>
    )
  }