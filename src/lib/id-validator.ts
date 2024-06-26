// Credit: https://github.com/jukbot/thai-citizen-id-validator

export default function isValidThaiID(id: string): boolean {
  // Check if the ID is a valid string of 13 digits.
  if (!/^\d{13}$/.test(id)) {
    return false;
  }

  // Calculate the check sum.
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += Number(id[i]) * (13 - i);
  }
  const checkSum = (11 - (sum % 11)) % 10;

  // Check if the check sum is equal to the last digit of the ID.
  return checkSum === Number(id[12]);
}
