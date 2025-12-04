import { expect, test } from "@playwright/test";

test("Login_user", async ({ request }) => {
  const login = await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/login",
    {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: "zuzka_certifikace",
        password: "1234",
      },
    }
  );

  expect(login.status()).toBe(201);
  const response = await login.json();
  expect(response).toHaveProperty("access_token");
});
