// find the total number of males and females
[
    {$group: {
      _id: "$gender",
      genderCount:{
        $sum:1
      }
    }}
  ]