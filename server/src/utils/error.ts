class ApiError extends Error {
  public statusCode
  public type

  constructor(message: string | undefined, statusCode: number, type = 'Operational') {
    super(message)

    this.statusCode = statusCode
    this.type = type
  }
}

export default ApiError
