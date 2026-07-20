import { NextResponse } from "next/server";

const GITHUB_USERNAME = "ramsy97";
const GITHUB_API = "https://api.github.com";

function getHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  try {
    if (type === "profile") {
      const res = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
        headers: getHeaders(),
        next: { revalidate: 3600 },
      });
      if (!res.ok) return NextResponse.json(null);
      return NextResponse.json(await res.json());
    }

    if (type === "repos") {
      const res = await fetch(
        `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { headers: getHeaders(), next: { revalidate: 3600 } }
      );
      if (!res.ok) return NextResponse.json([]);
      return NextResponse.json(await res.json());
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  } catch {
    return NextResponse.json(null);
  }
}
