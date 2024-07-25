// TASK-6
import _ from 'lodash'
import axios from 'axios'


console.log(_);

const naambaars=[1,2,3,4,5,6,7,8,9]
console.log(_.last(naambaars));

// TASK-8
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
