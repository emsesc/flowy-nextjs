import styles from './nav.module.css'
import Image from 'next/image'

export default function Nav({ blockTitle, blockDesc, value, icon }) {

    return (
            <div className="blockelem create-flowy noselect">
                <input type="hidden" name='blockelemtype' className="blockelemtype" value={ value }></input>
                <div className="grabme">
                    <img src="/images/grabme.svg"></img>
                </div>
                <div className="blockin">
                    <div className="blockico">
                        <span></span>
                        <img src={ icon }></img>
                    </div>
                    <div className="blocktext">
                        <p className="blocktitle">{ blockTitle }</p>
                        <p className="blockdesc">{ blockDesc }</p>
                    </div>
                </div>
            </div>
    )
  }