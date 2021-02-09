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

function tick() {
  var element = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Time'
    ),
    React.createElement(
      'h2',
      null,
      'It is ',
      new Date().toLocaleTimeString(),
      '.'
    )
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// To minify use: npx terser -c -m -o component.min.js -- component.js
// To preproc JSX use: npx babel --watch src --out-dir . --presets react-app/prod (src/component.js)