import styles from './nav.module.css'
import Block from './block.js'

export default function Nav({ title, repoName }) {

    return (
        <div id="propwrap">
            <div id="properties">
                <div id="close">
                    <img src="/images/close.svg"></img>
                </div>
                <p id="header2">Properties</p>
                <div id="proplist">
                </div>
                <div id="divisionthing"></div>
                <div id="save">Save</div>
                <div id="removeblock">Delete blocks</div>
            </div>
        </div>
    )
  }