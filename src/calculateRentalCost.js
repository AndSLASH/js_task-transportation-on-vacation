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

  const discountPrice = totalCost;

  if (days >= minDays && days < maxDays) {
    return discountPrice - discountMin;
  }

  if (days >= maxDays) {
    return discountPrice - discountMax;
  }

  return discountPrice;
}

module.exports = calculateRentalCost;
