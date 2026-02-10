export interface ApplicationData {
  fullName: string
  email: string
  role: string
}

export interface ApplicationResponse {
  success: boolean
  applicationId?: string
  error?: string
}

export async function submitApplication(
  data: ApplicationData
): Promise<ApplicationResponse> {
  try {
    const response = await fetch('/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit application')
    }

    return {
      success: true,
      applicationId: result.applicationId,
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred'
    console.error('[v0] Application service error:', errorMessage)
    return {
      success: false,
      error: errorMessage,
    }
  }
}
