=begin
Given a number of petals, return a string
which repeats the phrases "Loves me" and
"Loves me not" for every alternating petal,
and return the last phrase in all caps.

Remember to put a comma and space between phrases.
=end

def loves_me(num)
  result = []
  last = num - 1
     
  num.times { |time|
    if time.even?
      result << "Loves me"
    else
      result << "Loves me not"
    end
    }
  
  result[last] = result[last].upcase
  return result.join(", ")
end

# "Loves me, Loves me not, LOVES ME"
loves_me(3)
