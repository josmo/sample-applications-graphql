const Types = `
type Application {
  applicationID: Int
  applicationName: String
  description: String
  applicationURL: String
  status: Status
}

type Status {
  applicationStatus: String
  currentNotes: String
}
`;

export default Types;
