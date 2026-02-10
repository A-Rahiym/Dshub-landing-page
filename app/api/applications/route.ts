import { NextRequest, NextResponse } from 'next/server'

interface ApplicationData {
  fullName: string
  email: string
  role: string
  yearsOfExperience?: number
  portfolio?: string
  bio?: string
  timestamp: string
}

// In-memory storage (replace with database in production)
const applications: ApplicationData[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { fullName, email, role } = body

    if (!fullName || !email || !role) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, role' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const applicationData: ApplicationData = {
      fullName,
      email,
      role,
      yearsOfExperience: body.yearsOfExperience || 0,
      portfolio: body.portfolio || '',
      bio: body.bio || '',
      timestamp: new Date().toISOString(),
    }

    // Store application
    applications.push(applicationData)

    // Log application (for debugging)
    console.log('[v0] New internship application received:', applicationData)

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully',
        applicationId: `APP-${Date.now()}`,
        data: applicationData,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] Application submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Admin endpoint to view all applications
  return NextResponse.json({
    totalApplications: applications.length,
    applications: applications.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ),
  })
}
