import { NextRequest, NextResponse } from "next/server"
import { findAnswer } from "@/lib/askGuruji"

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { question: string }
    const { question } = body

    if (typeof question !== "string" || !question.trim()) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 })
    }

    const result = findAnswer(question)
    return NextResponse.json(result)
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
