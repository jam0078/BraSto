function MembersCloud(props) {
    // TODO:ループで複数要素を出力
    return(<ul>{props.members.map(member => <li key={member.id}>{member.name}</li>)}</ul>);
}
function LatestComments(props) {
    return(<ul>{props.latest_comments.map((comment, key) => <li key={key}>{comment.comment}</li>)}</ul>);
}
function KeywordCloud(props) {
    return(<h2>{props.x}</h2>);
}
function BraStoResultCards(props) {
    return(<h4>{props.x}</h4>);
}
function BraStoFeixedWords(props) {
    return(<p>{props.fixed_words}</p>);
}
function BraStoFeixedWords(props) {
    var str = props.fixed_words.join(',')
    return(<p>{str}</p>);
}
function BraStoVolatileWords(props) {
    var str = props.volatile_words.join(',')
    return(<h4>{str}</h4>);
}
function renderAll() {
    var data = load_data();
    //Slack情報：メンバー情報
    ReactDOM.render(
        <MembersCloud members={data.members}/>,
        document.getElementById('members')
    );
    ReactDOM.render(
        <LatestComments latest_comments={data.latest_comments}/>,
        document.getElementById('latest_comments')
    );
    ReactDOM.render(
       <BraStoFeixedWords fixed_words={data.fixed_words}/>,
        document.getElementById('fixed_words')
    );
    ReactDOM.render(
        <BraStoVolatileWords volatile_words={data.volatile_words}/>,
        document.getElementById('volatile_words')
    );
    setTimeout(renderAll, 500);
}
renderAll();