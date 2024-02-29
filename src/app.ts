import ollama from "ollama";

const args = process.argv.slice(2);

const schema = {
  colors: [
    {
      name: "string",
      hex: "string",
    },
  ],
};

const response = await ollama.chat({
  model: "tinyllama",
  messages: [
    {
      role: "system",
      content: `You are a helpful AI assistant. The user will request colors and you the assistant will return 5 colors in hex format. Output in JSON using the schema: ${JSON.stringify(
        schema
      )}.`,
    },
    { role: "user", content: `What colors are best for ${args}` },
  ],
  format: "json",
});
console.log(response.message.content);
