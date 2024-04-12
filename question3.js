// list the top 5 most common favorite fruits among users
[
    {
      $group: {
        _id: "$favoriteFruit",
       count:{
         $sum:1
       }
      }
    },
    {
      $sort: {
        count: -1
      }
    },
    {
      $limit: 5
    }
  ]