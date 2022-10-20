import faunadb from "faunadb";
export const q = faunadb.query;

export const getClient = (region) => {
  console.log("region ===>>>>", Deno.env.get("FAUNA_SECRET_US"));
  let config = {
    secret: Deno.env.get("FAUNA_SECRET_US"),
    domain: 'db.us.fauna.com',
  };
  if (region === 'DE' || region === 'FR') {
    config = {
      secret: Deno.env.get("FAUNA_SECRET_EU"),
      domain: 'db.eu.fauna.com',
    }
  }
  return new faunadb.Client(config)
};