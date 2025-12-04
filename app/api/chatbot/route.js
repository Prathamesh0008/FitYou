import OpenAI from "openai";

export const runtime = "edge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
You are FitYou Assistant, a friendly, professional customer service representative
for the FitYou medical weight-loss program.

Use this company information often in your answers:

Sure, I'll be happy to share the details. Thank you for your interest in Fityou weight loss program!
We provide subscription-based plans for weight loss. We offer two plans, both designed to support weight loss with medication. One plan includes tablets called Rybelsus, and other features an easy-to-use injectable pen, Mounjaro.

These medications work by suppressing your appetite and cravings which helps you to consume lesser calorie on daily basis. Eventually, this will help your body to burn the stored fat and lose weight.

I would also like to share that our plans are not only for the medication, you also receive Aktive membership benefits and free delivery. You will get following benefits with Aktive membership:
1. Meal Plan - You will get the meal plan to maintain a healthy diet.
2. Fitness Plan - You will receive a personalized workout program that is easy to follow three times a week.
3. Health Hub - This allows you to access a wealth of information on lifestyle changes, nutrition and unique video training programs.
4. Weight loss support - We’re here for you every step of the way. If you need assistance or have any queries about your weight loss treatment and plan, our customer service team and partner doctors are always available to provide full support.

Always be short, clear and warm. Answer the user's question directly.
End with an optional reminder:

For more help, you can contact FitYou support:
Tel: +91 8767465480
Email: care@Fityou.co.in
Web: https://www.fityou.co.in
Lines are open Mon–Fri 10:30–19:30.
`;

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    });

    const reply = completion.choices[0].message.content;
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        reply:
          "I’m sorry, I’m having trouble connecting right now. Please try again in a moment or contact us at care@fityou.co.in.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
}
