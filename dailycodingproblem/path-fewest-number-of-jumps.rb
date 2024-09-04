=begin
Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.
On the ith jump, you may move exactly i places to the left or right.
Find a path with the fewest number of jumps required to get from 0 to N.
=end

# the last element is the integer N, represented by an array of length N
ten = Array.new(10)
eleven = Array.new(11)
two = Array.new(2)
one = Array.new(1)
twenty_one = Array.new(21)
forty_seven = Array.new(47)

def jumps(array)
  # jump from 0 to 1
  if array.length === 1
    return 1
  end

  # jump from 0 to N/2, and then to N
  if array.length % 2 === 0
    return 2
  else
    # jump from 0 to 1, and then to N/2, and then to N
    return 3
  end
end

puts jumps(ten) # 2
puts jumps(eleven) # 3
puts jumps(two) # 2
puts jumps(one) # 1
puts jumps(twenty_one) # 3
puts jumps(forty_seven) # 3
