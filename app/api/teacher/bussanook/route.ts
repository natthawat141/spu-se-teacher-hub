import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const room = searchParams.get("room");

  if (room === "__PING__") {
    return NextResponse.json({ status: "ok", rowCount: 0, sbOkCached: null });
  }

  return NextResponse.json({ status: "ok", rowCount: 0, sbOkCached: null, room });
}

