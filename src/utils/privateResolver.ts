const privateResolver = resolverFunction => async (
  _,//parent
  __,//args
  context,
  info
) => {
  if (!context.req.user) {
    throw new Error("No JWT. Refuse to proceed");
  }
  const resolved = await resolverFunction(_,__,context,info);
  return resolved;
};

export default privateResolver;
// authResolver(awesomeResolver);
// authResolver(async() => void);
// authResolverResult(parent, args, context, info);