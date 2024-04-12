// categorize  favorite fruit on the basis of users

[
    {
      $group: {
        _id: "$favoriteFruit",
        users:{$push:"$name"}
      }
    }
  ]