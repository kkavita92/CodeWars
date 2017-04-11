=begin 
Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

=end

def string_parse string
  string.is_a?(String) ? string.gsub(/(.)\1(\1+)/,'\1\1[\2]') : "Please enter a valid string"
  #(.)\1 assures that same consecutive characters is being searched for 
  #\1 is a backreference to the first capture group (what's in brackets) 
end
