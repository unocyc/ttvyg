export async function hashPassword(password, salt) {
  if (!crypto.subtle) throw new Error("Secure password hashing is unavailable. Open this site on localhost or HTTPS.");
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${salt}:${password}`));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function randomSalt() {
  return [...crypto.getRandomValues(new Uint8Array(16))].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function assessPasswordStrength(password) {
  const checks = [
    { label: "At least 8 characters", passed: password.length >= 8 },
    { label: "At least 12 characters", passed: password.length >= 12 },
    { label: "Uppercase and lowercase letters", passed: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: "A number", passed: /\d/.test(password) },
    { label: "A symbol", passed: /[^A-Za-z0-9]/.test(password) }
  ];
  const score = checks.filter((check) => check.passed).length;
  const level = !password ? "" : password.length < 8 || score <= 1 ? "Weak" : score <= 2 ? "Fair" : score <= 4 ? "Strong" : "Very strong";
  return { score, level, checks };
}
