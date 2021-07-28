import styles from './nav.module.css'
import Image from 'next/image'

export default function Nav({ blockTitle, blockDesc, value, icon }) {

    return (
            <div class="blockelem create-flowy noselect">
                <input type="hidden" name='blockelemtype' class="blockelemtype" value={ value }></input>
                <div class="grabme">
                    <img src="/images/grabme.svg"></img>
                </div>
                <div class="blockin">
                    <div class="blockico">
                        <span></span>
                        <img src={ icon }></img>
                    </div>
                    <div class="blocktext">
                        <p class="blocktitle">{ blockTitle }</p>
                        <p class="blockdesc">{ blockDesc }</p>
                    </div>
                </div>
            </div>
    )
  }