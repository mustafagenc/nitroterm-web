import { NextResponse } from "next/server";
import { fetchCargoMetadata } from "@/lib/version";

export async function GET() {
  try {
    const metadata = await fetchCargoMetadata();

    if (!metadata) {
      return NextResponse.json(
        { error: "Failed to fetch version" },
        { status: 500 }
      );
    }

    return NextResponse.json(metadata, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Version API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
