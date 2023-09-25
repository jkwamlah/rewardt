import { BigNumber } from "ethers";
import { graphQLUrl } from "~~/plugins/common";

interface Bootcamp {
  id: BigNumber;
  externalId: string;
  name: string;
  owner: string;
  description: string;
  status: string;
}

export function convertProgramDataList(dataArray: any[]): Bootcamp[] {
  return Array.from({ length: dataArray.length / 7 }, (_, i) => {
    const startIndex = i * 7;
    return {
      id: BigNumber.from(dataArray[startIndex]),
      externalId: dataArray[startIndex + 1],
      name: dataArray[startIndex + 2],
      owner: dataArray[startIndex + 3],
      description: dataArray[startIndex + 4],
      status: dataArray[startIndex + 6],
    };
  });
}

export const getProgramsCreated = async (address: string) => {
  const query = `
    query getProgramsCreated($address: String) {
      programCreateds(where: { owner: $address }, first: 5) {
        id
        ClassReward_id
        externalId
        name
        status
        timestamp
        description
      }
    }`;

  try {
    const response = await fetch(graphQLUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: address, // Use 'address' instead of 'owner'
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.programCreateds;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

