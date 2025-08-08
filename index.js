




// This is required for the test to function properly  

module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

function calculateTax (amount) {
    const taxRate = 0.1;
    const taxValue = amount * taxRate;
    return taxValue
}

function convertToUpperCase (text) {
    const originalString = text
    const uppercaseString = originalString.toUpperCase();
    return uppercaseString
}


function findMaximum (num1, num2) {
    const largestNumber = Math.max(num1, num2)  
    return largestNumber
}


function isPalindrome (word) {
    if (word.length === 1 || 0) {
        return true;
    } else {
        if (word [0] === word[word.length - 1]) {
            let newWord = word.slice(1, -1);
            return isPalindrome(newWord);
        } else {
            return false;
        }
        }
    }


function calculateDiscountedPrice (originalPrice, discountPercentage) {
    let discountedAmount = originalPrice * (discountPercentage / 100)
    let finalPrice = originalPrice - discountedAmount
    return finalPrice


    }
