let timer = {
  repeat: (milliseconds, actionFn) => setInterval(actionFn, milliseconds)
};

export default timer;
