function formatDollar(value) {
  if (value < 0) {
    const positiveValue = Math.abs(value);
    return `-$${positiveValue.toLocaleString()}`;
  } else {
    return `$${value.toLocaleString()}`;
  }
}

export default formatDollar;
