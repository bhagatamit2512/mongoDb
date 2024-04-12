// what is the average number of tags per user
[
    {$unwind: "$tags"},
    {
      $group: {
        _id: "$_id",
        numberOfTags: {
          $sum: 1
        }
      }
    },
  {
    $group: {
      _id: null,
      averageOfTags: {
        $avg: "$numberOfTags"
      }
    }
  }
  ]


//   2nd approach

[
    {$addFields: {
      numberOfTags: {
        $size:{
          $ifNull:["$tags",[]]
        }
      }
    }},
    {$group: {
      _id: null,
      averageTags: {
        $avg: "$numberOfTags"
      }
    }}
  ]