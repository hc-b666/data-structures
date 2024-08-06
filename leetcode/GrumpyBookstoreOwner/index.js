/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let satisfied = 0;
  let total = 0;
  const n = customers.length;

  for (let i = 0; i < n; i++) {
      total += (1 - grumpy[i]) * customers[i];
  }

  let customersAll = 0;
  let customersPartial = 0;

  for (let i = 0; i < n; i++) {
      customersAll += customers[i];
      customersPartial += (1 - grumpy[i]) * customers[i];
      console.log(`All Customers: ${customersAll}`, `Partial Customers: ${customersPartial}`);

      if (i + 1 >= minutes) {
        console.log(`Total Customers: ${customersAll}`, `Partial Customers: ${customersPartial}`, `Satisfied: ${satisfied}`, `Elapsed Time: ${i+1} minutes`)
        satisfied = Math.max(satisfied, total - customersPartial + customersAll);
        let left = i - minutes + 1;
        customersAll -= customers[left];
        customersPartial -= (1 - grumpy[left]) * customers[left];
        console.log(`Satisfied: ${satisfied}`, `Total Customers after adjustment: ${customersAll}`, `Partial Customers after adjustment: ${customersPartial}`, `Left index: ${left}`, `Elapsed Time: ${i + 1} minutes \n\n\n`)
      }
  }

  return satisfied;
};

maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3);

//  even with the answer i am not abling to solve these problems fck,
// cant become dev ig
// not for me
