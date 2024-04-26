// import axios from "axios";

// import { setMessage } from "../slices/messages.slice";
// import { setIsLoading } from "../slices/user.slice";

// const fetchUrl = "http://localhost:3001/api";

// export const getMessages = () => async (dispatch) => {
//   try {
//     dispatch(setIsLoading(true));

//     const messages = await axios.get(`${fetchUrl}/chat/get-message`, {
//       withCredentials: true,
//     });

//     if (!messages) {
//       dispatch(setIsLoading(false));
//       return messages;
//     }

//     dispatch(setMessage(messages.data));
//     dispatch(setIsLoading(false));
//     return messages.data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const sendMessage = (data) => async (dispatch) => {
//   try {
//     dispatch(setIsLoading(true));

//     const messageSent = await axios.post(
//       `${fetchUrl}/chat/send-message`,
//       data,
//       {
//         withCredentials: true,
//       }
//     );

//     return messageSent;
//   } catch (err) {
//     console.error(err);
//   }
// };
