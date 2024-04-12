// find users which have both 'id' and 'enim' as tags.
[
    {$match: {
      tags:{$all:["id","enim"]}
    }}
  ]