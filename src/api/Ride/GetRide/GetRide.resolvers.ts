import Ride from "../../../entities/Ride";
import User from "../../../entities/User";
import { GetNearbyRideResponse, GetRideQueryArgs } from "../../../types/graph"
import { Resolvers } from "../../../types/resolvers";
import privateResolvers from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Query: {
    GetRide: privateResolvers(async(_, args: GetRideQueryArgs, { req }): Promise<GetNearbyRideResponse> => {
      const user: User = req.user;
      //user.isTaken = false;
      //user.isRiding = false;
      //user.save();
      //await Ride.delete({});
      try {
        const ride = await Ride.findOne({
          id: args.rideId
        })
        if (ride) {
          if (ride.passengerId === user.id || ride.driverId === user.id) {
            //ride.remove();
            //user.isRiding = false;
            //user.save();
            return {
              ok: true,
              error: null,
              ride
            };
          } else {
            return {
              ok: false,
              error: "Not Authorized",
              ride: null
            };
          }
        } else {
          return {
            ok: false,
            error: "Ride not found",
            ride: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          ride: null
        };
      }
    })
  }
}

export default resolvers;