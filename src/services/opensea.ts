import { mainnet } from "viem/chains";
import { OPENSEA_API_KEY, BASE_URL } from "./utils.js";
import type { Address } from "viem";
import axios from "axios";

let address: Address = "0x524cAB2ec69124574082676e6F654a18df49A048";
let token_id = 19256;

export const fetchNft = async (
  address: Address,
  token_id: number
): Promise<{
  title: string;
  description: string;
  image: string;
  price: string;
  address: Address;
  token_id: number;
}> => {
  let token_url = `${BASE_URL}/chain/${mainnet.name}/contract/${address}/nfts/${token_id}`;

  try {
    const options = {
      method: "GET",
      url: token_url,
      headers: {
        accept: "application/json",
        "x-api-key": "589d37041c214377a3b5c294c988589f",
      },
    };

    const response = await axios.request(options);

    let data = response.data;
    console.log(data);
    return {
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      address: address,
      token_id: token_id,
    };
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

fetchNft(address, token_id);

console.log(OPENSEA_API_KEY);
