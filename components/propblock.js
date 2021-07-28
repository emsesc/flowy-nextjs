import styles from './nav.module.css'
import Block from './block.js'

export default function Nav({ field, placeholder }) {

    return (
        <div>
            <p className="inputlabel">{ field }</p>
            <div id="type">
                <input placeholder={ placeholder }></input>
            </div>
        </div>
    )
  }