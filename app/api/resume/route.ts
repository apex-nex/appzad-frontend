import { NextResponse } from 'next/server';
import resumeData from '@/data/resume.json';

export async function GET() {
  try {
    return NextResponse.json(resumeData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch resume data' },
      { status: 500 }
    );
  }
}
