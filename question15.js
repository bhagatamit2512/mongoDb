// list all the companies located in us with their corresponding user count
[
    {$match: {
      "company.location.country":"USA"
    }},
    {
      $group: {
        _id: "$company.title",
        userCount: {
          $sum: 1
        }
      }
    }
  ]