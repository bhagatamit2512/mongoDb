// find the average of all users.
[
    {
      $group: {
        _id: null,  
        averageAge:{
          $avg:"$age"
        }
      }
    },
  ],

//   o/p {
//   "_id": null,
//   "averageAge": 29.835
// }

//find the average age on the basis of gender

[
    {
      $group: {
        _id: "$gender",  
        averageAge:{
          $avg:"$age"
        }
      }
    },
  ]
