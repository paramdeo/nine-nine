=begin
You are given a string consisting of the letters x and y, such as xyxxxyxyy.
In addition, you have an operation called flip, which changes a single x to y or vice versa.
Determine how many times you would need to apply this operation to ensure that all x's come before all y's.
In the preceding example, it suffices to flip the second and sixth characters, so you should return 2.
=end

str = "xyxxxyxyy"
str_ = "xyyyxyxyyx"

def flip(string)
  count = 0
  arr = Array.new(string.chars)
  
  arr.each_with_index do |element, index|
    if arr[index] == "y" && arr[index + 1] == "x"
      count += 1
    end
  end

  return count
end

puts flip(str) # 2
puts flip(str_) # 3
