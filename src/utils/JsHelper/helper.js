export function formatDateString(dateString) {
  // Parse the date string
  const date = new Date(dateString);

  // Define options for formatting the date
  const options = {day: 'numeric', month: 'long', year: 'numeric'};

  // Format the date and return it
  return date.toLocaleDateString('en-GB', options);
}
export const extractMandatoryDocuments = list => {
  if (!Array.isArray(list)) {
    console.error('Expected an array but received:', list);
    return [];
  }

  return list
    .filter(item => item.descriptor.code === 'mandatory-doc')
    .map(item => item.value);
};

export const extractEligibilityValues = data => {
  return data.map(item => item.value);
};
