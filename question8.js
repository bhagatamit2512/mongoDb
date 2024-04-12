// how many users have enim as one of there tags
[
    {$match: {
      tags:"enim"
    }},
    {
      $count: 'numberOfEnim'
    }
    ]