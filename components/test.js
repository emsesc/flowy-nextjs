document.addEventListener('click', function(event){
    var stepType = event.target.id
    if (stepType == "pull-request") {
        document.getElementById("proplist").innerHTML = '<p className="inputlabel">Title</p><div id="type"><input placeholder="Ex: Ok boomer!"></input></div><p className="inputlabel">Body</p><div id="type"><input placeholder="Please enter markdown"></input></div><p className="inputlabel">Branch to merge</p><div id="type"><input placeholder="Ex: twocatz-frontend"></input></div><p className="inputlabel">Test Files</p><div id="type"><input placeholder="test.1.1.js">'
    } else if (stepType == "issue-comment") {
        document.getElementById("proplist").innerHTML = '<p className="inputlabel">Title</p><div id="type"><input placeholder="Ex: Ok boomer!"></input></div><p className="inputlabel">Body</p><div id="type"><input placeholder="Ex: Please enter markdown"></input></div>'
    } else if (stepType == "feedback") {
        document.getElementById("proplist").innerHTML = '<p className="inputlabel">Title</p><div id="type"><input placeholder="Ex: Ok boomer!"></input></div><p className="inputlabel">Body</p><div id="type"><input placeholder="Please enter markdown"></input></div><p className="inputlabel">Webhook URL</p><div id="type"><input placeholder="Try using Slack webhooks!"></input></div>'
    }
})


