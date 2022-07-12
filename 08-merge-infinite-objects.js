function merge(...args) {
  return args.reduce((acm, curr) => {
    return { ...acm, ...curr };
  }, {});
}
