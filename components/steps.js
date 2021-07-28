import styles from './nav.module.css'
import Block from './block.js'

export default function Nav({ title, repoName }) {

    return (
        <div id="leftcard">
        <div id="closecard">
            <img src="/images/closeleft.svg"></img>
        </div>
        <p id="header">Steps</p>
        <div id="blocklist">
            <Block icon="/images/eye.svg" value="1" blockTitle="Pull Request Merge" blockDesc="Moves on to the next step when the student merges a pull request approved by the CounselorBot once a code check passes."></Block>
            <Block icon="/images/action.svg" value="2" blockTitle="Issue Comment" blockDesc="Moves on to the next step when the student comments on the issue."></Block>
            <Block icon="/images/time.svg" value="3" blockTitle="Feedback" blockDesc="Moves on to the next step when the student comments something on the issue. Provide a webhook url to receive alerts."></Block>
        </div>
    </div>
    )
  }