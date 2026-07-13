import { STEPS } from "@/src/lib/data";

export default function Steps() {
  return (
    <section className="py-24" style={{ background: "#F0FDFA" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "#CCFBF1",
              color: "#0F766E",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Jarayon
          </span>
          <h2
            style={{
              color: "#012F33",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            Buyurtma berish jarayoni
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "#64748b", fontSize: 16 }}>
            6 ta sodda qadam — natija sifatli va mustahkam
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="p-7 rounded-3xl bg-white relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                border: "1.5px solid #e2e8f0",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="absolute top-4 right-4 opacity-5"
                style={{
                  fontSize: "5rem",
                  fontWeight: 900,
                  color: "#013B41",
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg, #013B41, #0F766E)" }}
              >
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>
                  {step.num}
                </span>
              </div>
              <h3 style={{ color: "#012F33", fontWeight: 700, marginBottom: 8 }}>
                {step.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
