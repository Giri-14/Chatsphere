import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";

export const socket = io(URL);


// import { io } from "socket.io-client";

// const URL =
//   process.env.NODE_ENV === "production"
//     ? process.env.PRODUCTION_URL
//     : "http://localhost:3000";

// if (!URL) {
//   throw new Error("URL for Socket.io connection is not defined.");
// }

// export const socket = io(URL);
