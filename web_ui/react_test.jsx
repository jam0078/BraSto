class TestComponent extends React.Component {
    render() {
        return (
            // <div dangerouslySetInnerHTML={{__html: '<h1>Hello</h1>'}} />
            <div>
                <h1>Hello,React!</h1>
                <h2>{(new Date()).toString()}</h2>
            </div>
        )
    }
}
ReactDOM.render(
    <TestComponent />,
    document.getElementById('app')
);