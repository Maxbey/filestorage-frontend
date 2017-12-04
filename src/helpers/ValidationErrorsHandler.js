export class ValidationErrorsHandler {
  static parseErrors(errors){
    let parsed = {}
    errors.forEach((error) => {
      parsed[error.field] = error.defaultMessage
    })

    return parsed
  }
}
