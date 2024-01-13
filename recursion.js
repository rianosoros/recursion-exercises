/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) {
    return 1;
  } else {
    return nums[0] * product(nums.slice(1));
  }
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) {
    return 0;
  } else {
    const currentWordLength = words[0].length;
    const remainingLength = longest(words.slice(1));
    return currentWordLength > remainingLength ? currentWordLength : remainingLength;
  }
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return str[0] + everyOther(str.slice(2));
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val) {
  if (arr.length === 0) {
    return -1;
  } else if (arr[0] === val) {
    return 0;
  } else {
    const indexInRest = findIndex(arr.slice(1), val);
    return indexInRest === -1 ? -1 : indexInRest + 1;
  }
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length === 0) {
    return str;
  } else {
    return revString(str.slice(1)) + str[0];
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val) {
  const mid = Math.floor(arr.length / 2);

  if (arr.length === 0) {
    return -1;
  } else if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    const result = binarySearch(arr.slice(mid + 1), val);
    return result === -1 ? -1 : mid + 1 + result;
  } else {
    return binarySearch(arr.slice(0, mid), val);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
