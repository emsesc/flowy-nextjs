import styles from './nav.module.css'
import Block from './block.js'
import PropBlock from './propblock.js'

export default function Prop() {

    return (
        <div id="propwrap">
            <div id="properties">
                <div id="close">
                    <img src="/images/close.svg"></img>
                </div>
                <p id="header2">Properties</p>
                <div id="proplist">
                    <PropBlock field="Title" placeholder="Ex: Ok Boomer!"></PropBlock>
                </div>
                <div id="divisionthing"></div>
                <div id="save">Save</div>
                <div id="removeblock">Delete blocks</div>
            </div>
        </div>
    )
  }