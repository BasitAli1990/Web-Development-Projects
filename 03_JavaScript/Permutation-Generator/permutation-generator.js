function permuteString(str, prefix = "", results = []) {
  if (str.lentgth === 0) {
    results.push(prefix);
    return results;
  }

  const used = new Set();
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (used.has(currentChar)) continue;
    used.add(currentChar);


    const remaining = str.slice(0, i) + str.slice(i + 1);
    console.log(remaining);
    permuteString(remaining, prefix + currentChar, results);
    results = 
  }
  return results;
}

console.log(permuteString("cat"));