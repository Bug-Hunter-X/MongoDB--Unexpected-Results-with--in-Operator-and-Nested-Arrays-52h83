```javascript
//Correct usage of $in operator with a nested array
db.collection('myCollection').find({ 'nestedArray': { $elemMatch: { field: { $in: [1,2,3] } } }});
```