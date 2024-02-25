const countItems = (arr) => {
  return arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

export const findPersonalPart = (array) => {
  const counts = countItems(array);
  let maxCount = 0;
  let mostFrequentItems = [];

  for (const item in counts) {
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostFrequentItems = [item];
    } else if (counts[item] === maxCount) {
      mostFrequentItems.push(item);
    }
  }

  //동점일경우
  if (mostFrequentItems.length > 1) {
    const priority = ['ansDE', 'ansPM', 'ansFE', 'ansBE'];
    mostFrequentItems.sort((a, b) => priority.indexOf(a) - priority.indexOf(b));
  }

  return mostFrequentItems[0];
};
