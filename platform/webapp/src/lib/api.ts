const base = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://127.0.0.1:4000';

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${base}${path}`, {
    headers: {
      'X-API-Key': process.env.NEXT_PUBLIC_API_KEY ?? 'vericlause_demo_local_dev_key',
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json() as Promise<T>;
}
