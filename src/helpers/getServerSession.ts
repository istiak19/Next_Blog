import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

const getServer = async() => await getServerSession(authOptions);

export default getServer;