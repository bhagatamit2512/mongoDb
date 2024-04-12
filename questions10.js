// how many users have phone number starting from '+1 (940)'
[
  {$match: {
  "company.phone":/^\+1 \(940\)/
  }},
  {$count: 'numberStartWith'}
]