//-------------------SOLUCIÓN FUERZA BRUTA--------------
// function SolveGraph (graph, start, end, visited = []) { 
//   // start='a' end='r' visited=['a']
//   if(visited.includes(start)) return;
//   visited.push(start);

//   for(const node of graph[start]){ // ['c']
//     if(node === end) return true; // 'r' === 'r' ???
//     if(SolveGraph(graph, node, end, visited)) return true;
//   }
//   return false;
// }
// COMPLEJIDAD >>> O(n^n)


//----------------REFACTOR-------------------
function SolveGraph(graph, start, end, visited={}){
  if(visited[start]) return;
  visited[start] = true;

  for(const node of graph[start]){
    if(node === end) return true;
    if(SolveGraph(graph, node, end, visited)) return true;
  }
  return false
}




// const graph = {
//   a: ['c'],
//   b: ['c'],
//   c: ['s', 'r'],
//   d: ['a'],
//   s: ['a', 'c'],
//   r: ['d'],
//   z: ['z']
// }

// SolveGraph(graph, 'a', 'r')

module.exports = SolveGraph;