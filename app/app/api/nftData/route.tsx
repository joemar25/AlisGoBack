import { NextResponse } from "next/server";

const getNftData = async () => {
  try {
    const response = await fetch(
      "https://api-mainnet.magiceden.dev/v2/marketplace/popular_collections",
      { method: "GET" }
    );

    if (!response.ok) {
      throw new Error(`Error fetching NFT data: ${response.statusText}`);
    }

    const nfts = await response.json();
    return nfts;
  } catch (error) {
    console.error("Failed to fetch NFT data:", error);
    throw new Error("Failed to fetch NFT data");
  }
};

export async function GET(request: Request) {
  try {
    const data = await getNftData();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch NFT data, please try again later." },
      { status: 500 }
    );
  }
}
