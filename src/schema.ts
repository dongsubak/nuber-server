import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools"
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

//import all schema from our api

const allTypes : GraphQLSchema[] = fileLoader(
    path.join(__dirname, "./api/**/*.graphql")
)