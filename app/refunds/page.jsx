// app/refund-policy/page.jsx

export const metadata = {
  title: "Cancellations & Refunds Policy – FitYou",
};

export default function RefundPolicyPage() {
  return (
    // background same as reference page
    <main className="min-h-screen" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-20 py-16 font-laila">
        {/* MAIN HEADING */}
        <h1
  className="text-4xl sm:text-4xl lg:text-6xl  leading-tight mb-11"
  style={{ color: "#0B2972" }}
>
  {/* Desktop / large view: "Cancellations and refunds" on one line, "policy" on second */}
  <span className="hidden sm:inline-block whitespace-nowrap">
    Cancellations and refunds
  </span>
  <span className="hidden sm:block">
    policy
  </span>

  {/* Mobile view: each word on its own line */}
  <span className="block sm:hidden">
    Cancellations
  </span>
  <span className="block sm:hidden">
    and refunds
  </span>
  <span className="block sm:hidden">
    policy
  </span>
</h1>


        {/* SECTION 1 */}
        <h2
          className="text-3xl sm:text-4xl  mb-6"
          style={{ color: "#0B2972" }}
        >
          How can I cancel my order?
        </h2>

        <div
          className="space-y-2 text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          <p>
            - Cancellation of an order can be requested at any time before the
            order is dispatched.
          </p>
          <p>
            - To cancel your order for any weight loss medication or best weight
            loss product, kindly contact our FitYou Customer Support Team by
            email{" "}
            <a
              href="mailto:care@fityou.co.in"
              className="underline"
              style={{ color: "#0B2972" }}
            >
              care@fityou.co.in
            </a>{" "}
            or by phone on{" "}
            <span style={{ color: "#0B2972", textDecoration: "underline" }}>
              +91 96649 24546
            </span>{" "}
            should you wish to exercise your right to cancel.
          </p>
          <p>
            - Once your cancellation request is approved, the refund will be
            processed to your original source of payment, which will take 5–7
            business days after the refund is initiated.
          </p>
        </div>

        {/* SECTION 2 */}
        <h2
          className="text-3xl sm:text-4xl  mt-16 mb-6"
          style={{ color: "#0B2972" }}
        >
          How will I know the status of my cancellation or refund?
        </h2>

        <div
          className="space-y-2 text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          <p>
            - You will receive a confirmation via Email and/or SMS once your
            cancellation request is successfully processed.
          </p>
          <p>
            - You will also receive a notification via Email and/or SMS once the
            refund reference ID has been shared by our payment partner. Refunds
            generally reflect in your original source of payment within 5–7
            business days after the reference ID is shared.
          </p>
        </div>

        {/* SECTION 3 */}
        <h2
          className="text-3xl sm:text-4xl  mt-16 mb-6"
          style={{ color: "#0B2972" }}
        >
          Can I return my order?
        </h2>

        <div
          className="space-y-2 text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          <p>
            - At FitYou, we do not accept general product returns, including for
            weight loss medication, best medicine to lose weight, or best weight
            loss supplements.
          </p>
          <p>
            - However, in the following rare and exceptional cases, we are happy
            to provide a replacement, provided that the request is raised within
            7 days of delivery:
          </p>
          <p>- Wrong product delivered</p>
          <p>- Missing products in the order</p>
          <p>- Damaged products delivered</p>
          <p>- Expired products delivered</p>
        </div>

        {/* SECTION 4 */}
        <h2
          className="text-3xl sm:text-4xl mt-16 mb-6"
          style={{ color: "#0B2972" }}
        >
          How to raise a replacement request
        </h2>

        <div
          className="space-y-2 text-base sm:text-lg leading-relaxed"
          style={{ color: "#1F3556" }}
        >
          <p>
            - To request a replacement for your weight medication or best to
            lose weight product, please contact us through the following link:{" "}
            <a
              href="https://www.fityou.co.in/contact-us"
              className="underline"
              style={{ color: "#0B2972" }}
            >
              https://www.fityou.co.in/contact-us
            </a>
            .
          </p>
          <p>
            - Our FitYou Customer Care Executives may request additional
            information such as images or order details before processing the
            request.
          </p>
          <p>- Once your replacement request is approved:</p>
          <p>- A new order ID will be generated.</p>
          <p>- The updated order will be visible in your order history page.</p>
        </div>

        {/* SECTION 5 */}
        <h2
          className="text-3xl sm:text-4xl  mt-16 mb-6"
          style={{ color: "#0B2972" }}
        >
          Need help?
        </h2>

        <div
          className="space-y-2 text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "#1F3556" }}
        >
          <p>
            - If you have any questions regarding this Cancellations &amp;
            Refunds Policy, or about your order for the best weight loss
            products or weight loss medication, please reach out to us at{" "}
            <a
              href="https://www.fityou.co.in/contact-us"
              className="underline"
              style={{ color: "#0B2972" }}
            >
              https://www.fityou.co.in/contact-us
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:care@fityou.co.in"
              className="underline"
              style={{ color: "#0B2972" }}
            >
              care@fityou.co.in
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
