# Array Binary Search
take in a array and a search key. if the search key is present in the array we return its index value. if not return -1.

# Challenge
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

# Approach & Efficiency
identify the min mid max cut in half and compare the min, mid and max to the key.
run a if statement to figure out if the min, mid and max less than or greater than the key
compare current mid value againest key
if key is less than mid value - cut array in half
if key is greater than mid value - cut again
if key is equal - return index
if key is not found -  return -1

# Solution
<!-- embedded whiteboard image -->
![WhiteBoard](./assest/binarywhiteboard.jpeg)

