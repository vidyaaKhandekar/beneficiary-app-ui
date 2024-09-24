export const documentName = [
  {
    documentName: 'Caste Certificate',
    Status: true,
  },
  {
    documentName: 'Income Certificate',
    Status: true,
  },
  {
    documentName: 'Domecile Certificate',
    Status: true,
  },
  {
    documentName: 'Marksheet (10th)',
    Status: true,
  },
  {
    documentName: 'Birth Certificate',
    Status: true,
  },
  {
    documentName: 'Disablitity Certificate',
    Status: true,
  },
  {
    documentName: 'Family Retion Card /BPL Card',
    Status: false,
  },
  {
    documentName: 'Proof of dayscholar/hosteler',
    Status: false,
  },
];

const TrackApplicationList = [
  {
    underReview: [
      { applicationNo: 'Application1234',actionNeeded:true,requiredDocument:['Proof of dayscholar/hostelar']},
      {applicationNo: 'Application1234'},
      {applicationNo: 'Application1234'},
      {applicationNo: 'Application1234'},
    ],
  },
  {
    approved: [
      { applicationNo: 'Application1234'},
      {applicationNo: 'Application1234'},
    ],
  },
  {
    notApproved: [
        { applicationNo: 'Application1234',actionNeeded:true,requiredDocument:['Proof of dayscholar/hostelar'],reason:'duplicate document'},
      {applicationNo: 'Application1234'},
      {applicationNo: 'Application1234'},
      {applicationNo: 'Application1234'},
    ],
  },
];
