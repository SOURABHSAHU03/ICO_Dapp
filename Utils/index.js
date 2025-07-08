// export const convertTime = () => {
//     const date = new Date(time);
//     const formattedDate = `${date.toLocaleDateString()}} ${date.toLocaleTimeString()}`;
//     return formattedDate;
// }

// export const shortenAddress = (address) => {
//    return  `${address.slice(0, 4)}...${address?.slice(address.length - 4)}`;
// }

// Convert a timestamp to a readable date and time
export const convertTime = (time) => {
  const date = new Date(time);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  return formattedDate;
};

// Shorten a long wallet address like 0xAbcd...1234
// Utils/index.js
export const shortenAddress = (address) => {
  `${address?.slice(0,4)}...${address?.slice(address.length - 4)}`;
};

