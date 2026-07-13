import { CheckCircle, Clock, CreditCard, Shield } from "lucide-react";
import { DEADLINES, SITE } from "@/src/lib/data";

export default function Terms() {
  return (
    <section id="terms" className="py-24 bg-white">
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
            Shartlar va kafolatlar
          </span>
          <h2
            style={{
              color: "#012F33",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 4vw, 2.5rem)",
            }}
          >
            Hamkorlik shartlari
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Guarantee */}
          <div
            className="p-8 rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, #012F33, #0F4042)",
              boxShadow: "0 8px 40px rgba(1,47,51,0.25)",
            }}
          >
            <Shield size={48} color="#5EEAD4" className="mx-auto mb-4" />
            <h3
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "1.3rem",
                marginBottom: 12,
              }}
            >
              Kafolat
            </h3>
            <div
              style={{ color: "#5EEAD4", fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}
            >
              {SITE.warrantyYears}
            </div>
            <div style={{ color: "#94a3b8", marginTop: 4, marginBottom: 16 }}>
              yil kafolat muddati
            </div>
            <div
              className="p-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div style={{ color: "#99F6E4", fontWeight: 700, marginBottom: 4 }}>
                Servis xizmati
              </div>
              <div style={{ color: "#cbd5e1" }}>
                {SITE.serviceYears} yil davomida texnik xizmat ko'rsatiladi
              </div>
            </div>
          </div>

          {/* Deadlines */}
          <div
            className="p-8 rounded-3xl"
            style={{
              background: "#F0FDFA",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <Clock size={40} color="#0F766E" className="mb-4" />
            <h3
              style={{
                color: "#012F33",
                fontWeight: 800,
                fontSize: "1.2rem",
                marginBottom: 16,
              }}
            >
              Bajarish muddatlari
            </h3>
            <div className="space-y-3">
              {DEADLINES.map((t) => (
                <div
                  key={t.days}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{ background: "#fff", border: "1px solid #e2e8f0" }}
                >
                  <span style={{ color: "#64748b", fontSize: 14 }}>{t.desc}</span>
                  <span
                    className="px-2.5 py-1 rounded-lg"
                    style={{
                      background: "#CCFBF1",
                      color: "#0F766E",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {t.days}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div
            className="p-8 rounded-3xl"
            style={{
              background: "#F0FDFA",
              border: "1.5px solid #e2e8f0",
              boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
            }}
          >
            <CreditCard size={40} color="#0F766E" className="mb-4" />
            <h3
              style={{
                color: "#012F33",
                fontWeight: 800,
                fontSize: "1.2rem",
                marginBottom: 16,
              }}
            >
              To'lov shartlari
            </h3>
            <div className="space-y-4">
              <div
                className="p-4 rounded-2xl"
                style={{ background: "#fff", border: "1px solid #e2e8f0" }}
              >
                <div
                  style={{
                    color: "#374151",
                    fontWeight: 600,
                    fontSize: 14,
                    marginBottom: 6,
                  }}
                >
                  To'lov usullari
                </div>
                <div className="flex flex-col gap-1.5">
                  {["Naqd pul", "Bank kartasi", "Pul o'tkazish"].map((m) => (
                    <div key={m} className="flex items-center gap-2">
                      <CheckCircle size={13} color="#0F766E" />
                      <span style={{ color: "#64748b", fontSize: 13 }}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="p-4 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #F0FDFA, #CCFBF1)",
                  border: "1px solid #99F6E4",
                }}
              >
                <div style={{ color: "#0F766E", fontWeight: 700, fontSize: 14 }}>
                  To'lov tartibi
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text-center">
                    <div
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        color: "#0F766E",
                      }}
                    >
                      70%
                    </div>
                    <div style={{ color: "#64748b", fontSize: 12 }}>Oldindan</div>
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: 24 }}>+</div>
                  <div className="text-center">
                    <div
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: 900,
                        color: "#059669",
                      }}
                    >
                      30%
                    </div>
                    <div style={{ color: "#64748b", fontSize: 12 }}>Tayyor bo'lgach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free services */}
        <div
          className="mt-10 p-8 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
            border: "1.5px solid #a7f3d0",
          }}
        >
          <h3
            className="text-center mb-6"
            style={{ color: "#065f46", fontWeight: 700, fontSize: "1.2rem" }}
          >
            Quyidagi xizmatlarni ko'rsatamiz
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {["O'lchov olish", "O'rnatish xizmati", "Konsultatsiya"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white"
              >
                <CheckCircle size={22} color="#059669" />
                <span style={{ color: "#065f46", fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
