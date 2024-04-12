// who has registered recently
[
    {
      $sort: {
       registered : -1
      }
    },
     {$limit: 4},
     {$project: {
       name:1,
       age:1,
       registered:1
     }}
   ]