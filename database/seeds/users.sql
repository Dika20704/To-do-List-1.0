INSERT INTO users (name, email, password)
VALUES
  ('Admin', 'admin@example.com', 'hashed_password_placeholder')
ON CONFLICT (email) DO NOTHING;
