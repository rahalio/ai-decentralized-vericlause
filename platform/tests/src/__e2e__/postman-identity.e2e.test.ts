/**
 * Postman-collection 1:1 Vitest tests for identity (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  keyId: "",
  userId: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / identity (1:1 generated)", () => {

  it("listTenantApiKeys", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/api-keys");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("createTenantApiKey", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/api-keys");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"name\": \"Newman Test\",\n  \"scopes\": null,\n  \"expiresAt\": \"\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['tenantApiKeyId'] = j.data.id;
  });

  it("getTenantApiKey", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/api-keys/{{keyId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("revokeTenantApiKey", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/api-keys/{{keyId}}");
    const res = await fetch(url, {
      method: "DELETE",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(204);
  });

  it("listTenantUsers", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/users");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("createTenantUser", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/users");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"email\": \"newman@example.com\",\n  \"displayName\": \"\",\n  \"role\": \"admin\",\n  \"password\": \"\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['tenantUserId'] = j.data.id;
  });

  it("getTenantUser", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/users/{{userId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("updateTenantUser", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/users/{{userId}}");
    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"displayName\": \"\",\n  \"role\": \"admin\",\n  \"password\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("disableTenantUser", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/users/{{userId}}/disable");
    const res = await fetch(url, {
      method: "POST",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("enableTenantUser", async () => {
    const url = sub("{{baseUrl}}/v0/tenants/me/users/{{userId}}/enable");
    const res = await fetch(url, {
      method: "POST",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("operatorLogin", async () => {
    const url = sub("{{baseUrl}}/v0/auth/login");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"email\": \"newman@example.com\",\n  \"password\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("getOperatorMe", async () => {
    const url = sub("{{baseUrl}}/v0/auth/me");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("updateOperatorMe", async () => {
    const url = sub("{{baseUrl}}/v0/auth/me");
    const res = await fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"displayName\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("operatorRefresh", async () => {
    const url = sub("{{baseUrl}}/v0/auth/refresh");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"refreshToken\": \"newman_refreshToken\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("operatorLogout", async () => {
    const url = sub("{{baseUrl}}/v0/auth/logout");
    const res = await fetch(url, {
      method: "POST",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(204);
  });
});
