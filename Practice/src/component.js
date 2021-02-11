'use strict';

// My first react component
// const e = React.createElement;
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked comment number: ' + this.props.commentId;
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
// const domContainer = document.querySelectorAll('.like_btn').forEach(domContainer => {
//     const commentId = parseInt(domContainer.dataset.id, 10);
//     ReactDOM.render(e(LikeButton, { commentId: commentId }), domContainer);
// })

// const name = 'Gohn Doe'
// const title = 'zagolovok'
// function Element() {
//   return (
//     <h1 className={title}>Hello {name}</h1>
//   )
// }
// ReactDOM.render(
//   <Element />,
//   document.getElementById('root')
// )

// function tick() {
//   const element = (
//     <div>
//       <h1>Time</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(tick, 1000)

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>Time</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <FoData date={this.state.date} />
            </div>
        );
    }
}

function FoData(props) {
    return (
        <h2>New time: {props.date.toLocaleString()}</h2>
    )
}

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );



// To minify use: npx terser -c -m -o component.min.js -- component.js
// To preproc JSX use: npx babel --watch src --out-dir . --presets react-app/prod (src/component.js)