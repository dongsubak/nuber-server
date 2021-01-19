export default function cleanNullArg(args: Object) { 
  const notNullargs = {};

  Object.keys(args).forEach(key => {
    if (args[key] !== null) {
      notNullargs[key] = args[key];
    }
  });

  return notNullargs;
}