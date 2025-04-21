/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const discountMin = 20;
  const discountMax = 50;

  const minDays = 3;
  const maxDays = 7;

  const totalCost = basePrice * days;

  let discountPrice = 0;

  if (days >= minDays && days < maxDays) {
    discountPrice = totalCost - discountMin;
  } else if (days >= maxDays) {
    discountPrice = totalCost - discountMax;
  } else {
    discountPrice = totalCost;
  }

  return discountPrice;
}

module.exports = calculateRentalCost;
