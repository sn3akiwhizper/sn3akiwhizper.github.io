import JekyllGraph from './jekyll-graph.js';

class JekyllGraphSubClass extends JekyllGraph {

  constructor() {
    super();
    // access graph with 'this.graph'
    // access graph div with 'this.graphDiv'
  }
  
  // ...
}

// var graph = new JekyllGraphSubClass();
// // on page load
// (() => {
//   graph.drawNetWeb();
// });

// // on button click
// this.graphBtn.addEventListener('click', () => {
//   graph.drawTree();
// });
