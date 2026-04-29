function hashPassword(password) {
  return btoa(password); // base64 encoding (NOT secure, just simulation)
}