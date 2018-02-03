class TestComponent extends React.Component {
    constructor() { this.state = {}; }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
        )
    }
}
React.render(
    <TestComponent />,
    document.getElementById('app')
);