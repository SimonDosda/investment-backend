export default ({ env }) => {
  const email = {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_FROM_EMAIL"),
        defaultReplyTo: env("SENDGRID_REPLY_TO_EMAIL"),
      },
    },
  };
  return { email };
};
