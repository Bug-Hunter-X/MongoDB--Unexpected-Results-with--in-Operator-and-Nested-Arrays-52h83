```javascript
//Incorrect usage of $in operator with a nested array
db.collection('myCollection').find({ 'nestedArray.field': { $in: [1,2,3] } });
```