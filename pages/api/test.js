const testarr = [];

export default function ({ body, query }, response) {
  if (query.add) testarr.push(query.add);
  return response.status(200).json({ body, query, message: "Hello", testarr });
}
