// which country has highest registered users
[
    {$group: {
      _id: "$company.location.country",
      countryCount: {
        $sum: 1
      }
    }} ,
    {$sort: {
      countryCount: -1
    }},
    {
      $limit: 1
    }
  ]