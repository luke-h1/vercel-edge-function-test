import upstash from "@upstash/redis";

const redis = upstash(
  process.env.UPSTASH_REDIS_REST_URL,
  process.env.UPSTASH_REDIS_REST_TOKEN
);

function getShort(url: string): string {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  return [...new Array(8)]
    .map((_) => alpha[Math.floor(Math.random() * alpha.length)])
    .join("");
}

export async function setUrl(url: string) {
  const short = getShort(url);
  await redis.set(`short/${short}`, url);
  return short;
}

export async function getUrl(short: string): Promise<string> {
  const { data } = await redis.get(`short/${short}`);
  return data;
}
