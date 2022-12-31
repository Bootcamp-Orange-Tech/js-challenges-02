# JS Challenge: Clumsy Factorial

<strong>❯❯:zap: Challenge:</strong>
- Given a positive integer number N, returns the clumsy factorial of N. 

<strong>❯❯:compass: Description:</strong>- Factorial of a positive integer N is the product of all positive integers less than or equal to N. For example, `factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1`.
    
- Instead a clumsy factorial is made using integers in decreasing order and swapping out the multiply operations for a fixed rotation of operations: `multiply (*), divide (/), add (+) and subtract (-)` in this order.

- For example, `clumsy factorial(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 *1 = 12`. However, these operations are still applied using the usual order of operations of arithmetic: we do all multiplication and division steps before any addition or subtraction steps, and multiplication and division steps are processed left to right.

- Additionally, the division that we use is _floor division_ such that `10 * 9 / 8` equals `11`. This guarantees the result is an integer.



