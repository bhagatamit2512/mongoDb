// what are the name and ages of the user who are inactive and have 'velit' as there tags
[
    {$match: {
      isActive:false,
      tags:'velit'
    }} ,
    {
      $project: {
        name:1,
        age:1
      }
    }
  ]