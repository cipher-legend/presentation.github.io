import { useState, useEffect } from "react";

const sections = [
  { id: "abstract", label: "Abstract", num: 1 },
  { id: "introduction", label: "Introduction", num: 2 },
  { id: "literature", label: "Literature Review", num: 3 },
  { id: "methodology", label: "Methodology", num: 4 },
  { id: "findings", label: "Findings", num: 5 },
  { id: "discussion", label: "Discussion", num: 6 },
  { id: "conclusion", label: "Conclusion", num: 7 },
  { id: "references", label: "References", num: 8 },
  { id: "appendices", label: "Appendices", num: 9 },
];

function HadithBlock({ arabic, text, source }: { arabic?: string; text: string; source: string }) {
  return (
    <div className="hadith-block rounded-r-lg p-4 my-4">
      {arabic && (
        <p className="text-right text-lg font-serif text-amber-800 mb-2 leading-loose" dir="rtl">{arabic}</p>
      )}
      <p className="italic text-slate-700 text-sm leading-relaxed">"{text}"</p>
      <p className="text-xs text-slate-500 mt-2 font-semibold">{source}</p>
    </div>
  );
}

function SectionHeading({ num, title, presenter }: { num: number; title: string; presenter?: string }) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <span className="section-badge mt-0.5">{num}</span>
      <div>
        <h2 className="text-xl font-bold text-emerald-900">{title}</h2>
        {presenter && <p className="text-xs text-amber-600 font-medium mt-0.5">{presenter}</p>}
      </div>
    </div>
  );
}

function SubHeading({ title }: { title: string }) {
  return (
    <h3 className="text-base font-bold text-emerald-800 mt-5 mb-2 flex items-center gap-2">
      <span className="inline-block w-6 h-0.5 bg-amber-400 rounded" />
      {title}
    </h3>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
      {label}
    </span>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-slate-700 leading-relaxed">
      <span className="text-amber-500 mt-1 flex-shrink-0">◆</span>
      <span>{children}</span>
    </li>
  );
}

function TableRow({ stage, failure, tool }: { stage: string; failure: string; tool: string }) {
  return (
    <tr className="border-b border-emerald-100 hover:bg-emerald-50 transition-colors">
      <td className="py-2.5 px-3 font-semibold text-emerald-900 text-sm w-28">{stage}</td>
      <td className="py-2.5 px-3 text-sm text-slate-600">{failure}</td>
      <td className="py-2.5 px-3 text-sm text-emerald-700 font-medium">{tool}</td>
    </tr>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("abstract");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* COVER */}
      <header className="islamic-pattern text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-14 text-center">
          <p className="text-amber-300 text-sm font-semibold tracking-widest uppercase mb-2">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <div className="gold-line h-px mb-6" />

          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-xs text-amber-200 font-medium mb-5">
            Islamic Leadership &amp; Character in Literature · Group Research Paper
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
            Standing by Your Conscience<br />
            <span className="text-amber-300">When the System Says Otherwise</span>
          </h1>
          <p className="text-emerald-100 text-base mb-6">
            The Epistemology of Conscience &amp; the Mechanics of Complicity<br />
            <em>in Thomas Keneally's Bring Larks and Heroes</em>
          </p>

          <div className="gold-line h-px mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
            {[
              { name: "Muhammad Afzaal Bashir", id: "015669BSCSF25" },
              { name: "Mohannad Ajlan Muhammad Ajlan", id: "012193BSCSF25" },
              { name: "Muhammad Bilal Ikhlaq", id: "015730BSCSF25" },
            ].map((m) => (
              <div key={m.id} className="bg-white/10 border border-white/20 rounded-xl px-3 py-3">
                <p className="text-white font-semibold text-sm leading-tight">{m.name}</p>
                <p className="text-amber-200 text-xs mt-1 font-mono">{m.id}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-emerald-200">
            <span>🏛 International Islamic University Islamabad (IIUI)</span>
            <span>💻 BS Computer Science</span>
            <span>📅 May 2026</span>
            <span>👨‍🏫 Supervisor: Sir Hussain</span>
          </div>
        </div>
      </header>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-emerald-100 shadow-sm no-print">
        <div className="max-w-5xl mx-auto px-4">
          <div className="hidden md:flex items-center gap-1 h-12 overflow-x-auto">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap transition-all ${
                  activeSection === s.id
                    ? "bg-emerald-700 text-white"
                    : "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50"
                }`}
              >
                §{s.num} {s.label}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center justify-between h-12">
            <span className="text-sm font-semibold text-emerald-800">
              §{sections.find((s) => s.id === activeSection)?.num} {sections.find((s) => s.id === activeSection)?.label}
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-emerald-700 p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden absolute left-0 right-0 top-12 bg-white border-b border-emerald-100 shadow-md z-50">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-5 py-3 text-sm border-b border-slate-100 ${
                    activeSection === s.id ? "text-emerald-700 font-semibold bg-emerald-50" : "text-slate-600"
                  }`}
                >
                  §{s.num} — {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* SECTION 1: ABSTRACT */}
        <section id="abstract" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={1} title="Abstract" presenter="Presenter 1 · ~5 min" />
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            This paper examines <strong>moral conscience and institutional complicity</strong> in Thomas Keneally's novel
            <em> Bring Larks and Heroes</em> (1967), through the lens of Islamic ethics. Corporal Halloran — an Irish Marine in a
            brutal colonial penal settlement — recognises injustice yet repeatedly fails to act on it.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Two core moral problems are analysed:
            <strong> (1) The epistemology of conscience</strong> — how do we <em>know</em> something is wrong? and
            <strong> (2) The mechanics of complicity</strong> — how do ordinary good people become instruments of injustice
            through small daily compromises?
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-5">
            Islamic teachings on moral courage, accountability, and resistance to wrong are applied throughout — with direct
            relevance to Muslim CS students entering technology careers where similar ethical pressures arise.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Conscience", "Complicity", "Moral Courage", "Islamic Ethics", "Bring Larks & Heroes",
              "Amanah", "Amr bil Ma'ruf", "Professional Ethics", "CS Students"].map((k) => (
              <Tag key={k} label={k} />
            ))}
          </div>
        </section>

        {/* SECTION 2: INTRODUCTION */}
        <section id="introduction" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={2} title="Introduction" presenter="Presenter 1 · ~5 min" />
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Every generation faces the same moral question: <em>What do you do when your institution asks you to participate
            in something you know is wrong?</em> This paper answers through two lenses — <strong>literature</strong> and
            <strong> Islamic ethics</strong>.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-lg my-4">
            <p className="text-sm text-emerald-900 font-semibold mb-1">About the Novel</p>
            <p className="text-sm text-slate-700">
              <em>Bring Larks and Heroes</em> (Keneally, 1967) — winner of Australia's top literary prize — is set in an
              unnamed colonial penal settlement. It follows <strong>Corporal Phelim Halloran</strong>: educated,
              morally sensitive, privately appalled by the cruelty he upholds. He is <em>not a villain</em> — that is
              precisely what makes his story important.
            </p>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Halloran is a good man who becomes complicit in a system he hated. Keneally forces us to ask:
            <em> how does this happen? And what would have needed to be different?</em>
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 my-4">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">CS Relevance</p>
            <p className="text-sm text-slate-700">
              The technology industry produces tools at massive scale — surveillance infrastructure, algorithmic bias,
              insecure code, data sold without consent. The moral pressures Halloran faced —
              <em> oath, loyalty, career, gradual compromise</em> — have direct equivalents in every tech workplace.
              Islam provides the moral framework and spiritual tools to resist them.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-4">
            <p className="text-sm font-bold text-amber-800">Central Argument</p>
            <p className="text-sm text-amber-900 mt-1">
              Conscience alone is not enough. We must understand how conscience <em>fails</em> us — and Islam gives us the tools to prevent that failure.
            </p>
          </div>
        </section>

        {/* SECTION 3: LITERATURE REVIEW */}
        <section id="literature" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={3} title="Literature Review" presenter="Presenter 1 · ~6 min" />

          <SubHeading title="3.1  Islamic Sources on Conscience & Moral Courage" />
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            The core Islamic concept is <strong>Amr bil Ma'ruf wa Nahy 'an al-Munkar</strong> — commanding good and forbidding
            evil. This is a <em>collective obligation (fard kifayah)</em>, not an optional virtue:
          </p>
          <HadithBlock
            arabic="كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ"
            text="You are the best community raised for humanity — you enjoin good and forbid evil, and you believe in Allah."
            source="Quran 3:110"
          />
          <HadithBlock
            text="Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; if he cannot, then with his heart — and that is the weakest of faith."
            source="Sahih Muslim 49 — Abu Sa'id al-Khudri (r.a.) · Three levels of moral response"
          />
          <p className="text-sm text-slate-700 leading-relaxed mb-2">
            <strong>Amanah</strong> (trustworthiness) is equally central. The Prophet ﷺ identified betrayal of amanah as a
            sign of hypocrisy (Bukhari 33). For a Muslim professional, your skills, position, and knowledge are
            <em> trusts</em> — not to be used in service of harm, even when ordered by an employer.
          </p>

          <SubHeading title="3.2  The Novel in Context" />
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Keneally wrote in 1967, anticipating by two decades Robert Hughes' <em>The Fatal Shore</em> (1987) which documented
            the brutality of the convict transportation system. The fictional settlement is deliberately unnamed —
            functioning as a <strong>moral parable</strong>. Scholar Geordie Williamson identifies Keneally's
            "lifelong preoccupation with individual conscience and its agonised relations to institutional authority"
            as the golden thread through all his fiction.
          </p>

          <SubHeading title="3.3  The Epistemology of Conscience" />
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            Halloran <em>knows</em> — he sees Mealey's flogged back, watches an innocent man hanged, sees indigenous people
            dying. His conscience is working. The problem is not knowing; it is <strong>acting on what he knows</strong>.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Ibn al-Qayyim (Madarij al-Salikin) distinguishes between <em>'ilm</em> (knowledge of good) and
            <em> 'amal</em> (action upon it) — knowledge that does not produce action is a <strong>disease of the heart</strong>.
          </p>
          <HadithBlock
            text="Do not mix truth with falsehood or conceal the truth while you know it."
            source="Quran 2:42"
          />

          <SubHeading title="3.4  The Mechanics of Complicity" />
          <p className="text-sm text-slate-700 leading-relaxed">
            Complicity rarely happens through one dramatic choice — it happens through <strong>accumulation</strong>: small
            compromises, convenient silences, rationalised inactions (the "slippery slope of moral disengagement").
            Hearn, Halloran's intellectual sparring partner, challenges him directly:
            <em> "There is no god-forged chain of power... the true God fills no navy's sails."</em>
          </p>
        </section>

        {/* SECTION 4: METHODOLOGY */}
        <section id="methodology" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={4} title="Methodology" presenter="Presenter 2 · ~5 min" />
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            A <strong>qualitative, text-based approach</strong> combining two complementary methods:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <p className="font-semibold text-emerald-900 text-sm mb-2">4.1 Close Literary Reading</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Careful analysis of scenes involving Halloran's conscience — moments of recognition, failure,
                and silence. Key scenes: Mealey's flogged body · unjust hanging · Halloran–Hearn dialogues ·
                the tricked convict · indigenous deaths · the courtroom climax &amp; execution.
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <p className="font-semibold text-amber-900 text-sm mb-2">4.2 Islamic Ethical Framework</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sources in classical priority: Quran → Sahih Bukhari &amp; Sahih Muslim → classical scholarship
                (Ibn al-Qayyim, Ibn Taymiyyah). Applied to each scene: (a) relevant Islamic principle;
                (b) what it requires; (c) where Halloran falls short.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <p className="font-semibold text-slate-800 text-sm mb-2">4.3 CS Professional Context Layer</p>
            <p className="text-xs text-slate-600 leading-relaxed">
              A third analytical layer mapping structural parallels between Halloran's colonial situation and
              modern tech professional environments — pressure to build harmful systems, institutional loyalty
              conflicts, and the gradual erosion of ethical standards through small daily compromises.
            </p>
          </div>
        </section>

        {/* SECTION 5: FINDINGS */}
        <section id="findings" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={5} title="Findings & Results" presenter="Presenter 2 · ~7 min" />
          <p className="text-sm text-slate-500 mb-5">Five core findings from the Islamic ethical analysis of the novel:</p>

          <div className="space-y-5">
            {/* Finding 1 */}
            <div className="border border-emerald-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded">Finding 1</span>
                <p className="font-semibold text-emerald-900 text-sm">Conscience is functional but overridden</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Halloran's conscience (<em>fitra</em> — the innate moral sense Allah placed in every human) works perfectly.
                He is not ignorant. The problem: it is overridden by his oath to the Crown, fear of punishment,
                desire to protect Ann, and rationalisation that one corporal cannot change the system.
              </p>
              <HadithBlock
                text="Everyone is born upon the fitra. His parents then make him Jewish, Christian or Zoroastrian..."
                source="Sahih Bukhari 1358, Sahih Muslim 2658 — Moral sense is innate; it is distorted by environment and habit"
              />
            </div>

            {/* Finding 2 */}
            <div className="border border-emerald-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded">Finding 2</span>
                <p className="font-semibold text-emerald-900 text-sm">Hearn functions as Halloran's moral mirror</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hearn articulates with clarity and force exactly what Halloran knows but cannot bring himself to say.
                <em> "To the true God, the House of Hanover is just a house. Therefore, Corporal Halloran, oath to whom?"</em>
                Halloran uses religious <em>language</em> to justify what is functionally a betrayal of religious <em>principle</em>.
                Hearn, despite being a prisoner with no power, refuses to be an informer — the novel's closest equivalent
                to Islamic moral courage.
              </p>
            </div>

            {/* Finding 3 */}
            <div className="border border-amber-100 bg-amber-50/50 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-amber-600 text-white text-xs font-bold px-2 py-0.5 rounded">Finding 3</span>
                <p className="font-semibold text-amber-900 text-sm">The mechanics of complicity — a clear 4-step pattern</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                {[
                  { step: "1. Recognition", desc: "Sees the wrong; is morally disturbed" },
                  { step: "2. Rationalisation", desc: "Finds reasons he cannot act" },
                  { step: "3. Compliance", desc: "Performs the required action or says nothing" },
                  { step: "4. Normalisation", desc: "Next injustice produces less disturbance" },
                ].map((s) => (
                  <div key={s.step} className="bg-white border border-amber-200 rounded-lg p-2.5 text-center">
                    <p className="text-xs font-bold text-amber-800">{s.step}</p>
                    <p className="text-xs text-slate-500 mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600">
                Islamic interruption tools: <strong>Dhikr &amp; Tawbah</strong> (keep conscience sensitive) ·
                <strong> Shura</strong> (counter rationalisation) · <strong>Hisba</strong> (motivate action) ·
                Reminder of Divine accountability (counter normalisation)
              </p>
            </div>

            {/* Finding 4 */}
            <div className="border border-emerald-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded">Finding 4</span>
                <p className="font-semibold text-emerald-900 text-sm">Systems are maintained by the complicity of good people</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                The colony's cruelty does not depend on evil people — it depends on <em>good people who convinced themselves
                they had no choice</em>. Bureaucrats doing their jobs. Hannah Arendt called this the
                <strong> "banality of evil."</strong>
              </p>
              <HadithBlock
                text="And beware of a trial that will not only strike the wrongdoers among you."
                source="Quran 8:25 — Silence is not neutral; it contributes to the system's continuation"
              />
            </div>

            {/* Finding 5 */}
            <div className="border border-emerald-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded">Finding 5</span>
                <p className="font-semibold text-emerald-900 text-sm">Halloran's final act: too late, but not meaningless</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Halloran finally resists — is caught, sentenced to death, and executed. It does not save the system's
                victims, but it saves something in Halloran himself. Islamic ethics affirms this: even the minimum —
                <em> rejecting wrong in the heart</em> — is the weakest of faith, but it is still faith. The moral act
                retains its value even when its worldly impact is zero.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: DISCUSSION */}
        <section id="discussion" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={6} title="Discussion" presenter="Presenter 3 · ~7 min" />

          <SubHeading title="6.1  What This Means for Muslim CS Students" />
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            The colonial penal settlement and a modern tech company are <em>structurally parallel</em>: hierarchical
            authority, contracts &amp; oaths, bureaucratic language that strips injustice of moral weight, and real
            personal costs for resistance (career, income, relationships).
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "Being asked to build systems that collect user data without genuine consent",
              "Working on dual-use cybersecurity tools that can enable surveillance",
              "Pressure to ship code known to be insecure or inaccessible",
              "Organisations whose practices exploit vulnerable populations",
              "Being asked to stay silent about discrimination in hiring or promotion",
            ].map((item) => <BulletPoint key={item}>{item}</BulletPoint>)}
          </ul>
          <p className="text-sm text-slate-600 italic">
            None of these will announce themselves as moral crises. They arrive as small decisions, routine requests,
            quiet pressures — exactly as they do in Halloran's daily life.
          </p>

          <SubHeading title="6.2  The Islamic Response at Each Stage" />
          <div className="overflow-x-auto rounded-xl border border-emerald-100 mt-3">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-emerald-700 text-white text-xs">
                  <th className="py-2.5 px-3 w-28">Stage</th>
                  <th className="py-2.5 px-3">Halloran's Failure</th>
                  <th className="py-2.5 px-3">Islamic Tool to Interrupt</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  stage="Recognition"
                  failure="Conscience registers wrong but is not consulted regularly"
                  tool="Taqwa — God-consciousness through salah and dhikr keeps conscience sharp"
                />
                <TableRow
                  stage="Rationalisation"
                  failure="Finds reasons he cannot act — oath, rank, futility"
                  tool="Shura — consult scholars & mentors to test reasoning against Islamic principle"
                />
                <TableRow
                  stage="Compliance"
                  failure="Performs unjust orders to protect personal interests"
                  tool="Hisba — duty to uphold right and reject wrong; minimum: rejection in the heart"
                />
                <TableRow
                  stage="Normalisation"
                  failure="Each injustice produces less disturbance than the last"
                  tool="Tawbah — regular repentance reactivates moral sensitivity; prevents hardened heart"
                />
              </tbody>
            </table>
          </div>

          <SubHeading title="6.3  Cybersecurity & Amanah" />
          <p className="text-sm text-slate-700 leading-relaxed">
            Cybersecurity professionals are given access to systems and vulnerabilities that can cause massive harm if
            misused. The entire field rests on <strong>professional amanah</strong> — a trust to protect, not exploit.
          </p>
          <HadithBlock
            text="The leader is a guardian and is responsible for those in his care."
            source="Sahih Bukhari 893 — Every professional with technical power is, in this sense, a leader"
          />

          <SubHeading title="6.4  Duniya &amp; Akhirah: The Two-Horizon View" />
          <p className="text-sm text-slate-700 leading-relaxed">
            Islam evaluates moral choices on <em>two horizons simultaneously</em>. From a duniya perspective, Halloran's
            resistance costs him his life — catastrophic. But on the akhirah horizon, his final act registers as a moral
            choice before Allah. The question is never only <em>"Will this cost me my job?"</em> — it is also:
            <strong> "What will I answer when Allah asks me what I did with the position and knowledge I was given?"</strong>
          </p>
        </section>

        {/* SECTION 7: CONCLUSION */}
        <section id="conclusion" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={7} title="Conclusion" presenter="Presenter 3 · ~5 min" />
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            <em>Bring Larks and Heroes</em> offers no simple hero or villain. Halloran is a good man made complicit through
            a process so gradual and ordinary that it is difficult to identify the precise moment he could have chosen
            differently. <strong>That is the point.</strong>
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            Islam offers, against this, a framework of remarkable precision and practical depth — naming the minimum
            requirement (reject wrong in the heart), the higher obligations (speak with the tongue, act with the hand),
            spiritual tools to maintain moral sensitivity (salah, dhikr, tawbah, shura), and a two-horizon accountability
            that fundamentally changes the risk calculus of moral courage.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 my-5">
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3">Takeaways for Muslim CS Students</p>
            <ul className="space-y-2.5">
              {[
                "Know your red lines before you face pressure — not while you are facing it",
                "Maintain your spiritual practice — it is the engine of your professional ethics, not separate from it",
                "Find colleagues, mentors, and scholars you can consult — Halloran had no one he could fully trust",
                "Remember: your skills are an amanah. The question is not just what you can build, but what you should build",
                "Do not wait for the perfect moment of resistance — the mechanics of complicity work against you with every delay",
              ].map((item) => <BulletPoint key={item}>{item}</BulletPoint>)}
            </ul>
          </div>

          <HadithBlock
            text="Take up good deeds only as much as you are able, for the best deeds are those done regularly, even if they are few."
            source="Sahih Bukhari 6464 — A'ishah (r.a.) · Moral courage is built through consistent small acts — not saved for one dramatic moment"
          />

          <div className="islamic-pattern rounded-xl p-5 text-center mt-5 relative overflow-hidden">
            <p className="text-white text-sm font-medium relative z-10">
              Halloran's story ends in chains and on a scaffold. But Keneally's novel ends with something no system can touch:
              the record of a man who, finally, chose to act on what he knew.
            </p>
            <p className="text-amber-300 text-sm mt-2 font-semibold relative z-10">
              We do not have to wait until the end.
            </p>
          </div>
        </section>

        {/* SECTION 8: REFERENCES */}
        <section id="references" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={8} title="References" presenter="Presenter 3 · Compiled together" />

          <div className="grid sm:grid-cols-3 gap-4 text-xs">
            <div>
              <p className="font-bold text-emerald-800 mb-2 text-sm">Primary Source</p>
              <p className="text-slate-600 leading-relaxed">Keneally, Thomas. <em>Bring Larks and Heroes</em>. Cassell Australia, 1967. (Text Classics ed., 2012.)</p>
            </div>
            <div>
              <p className="font-bold text-emerald-800 mb-2 text-sm">Islamic Sources</p>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>The Holy Quran (Sahih International; Dr. Mustafa Khattab)</li>
                <li>Sahih al-Bukhari — Hadiths 33, 893, 1358, 5641, 6464</li>
                <li>Sahih Muslim — Hadiths 49, 2569, 2658</li>
                <li>Sunan Abi Dawud — Hadith 4941</li>
                <li>Jami' al-Tirmidhi — Hadith 1924</li>
                <li>Ibn al-Qayyim. <em>Madarij al-Salikin</em>. 14th c.</li>
                <li>Ibn Taymiyyah. <em>Al-Amr bil Ma'ruf</em>. 14th c.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-emerald-800 mb-2 text-sm">Secondary Sources</p>
              <ul className="space-y-1.5 text-slate-600 leading-relaxed">
                <li>Williamson, G. Intro to <em>Bring Larks &amp; Heroes</em>. Text Classics, 2012.</li>
                <li>Hughes, R. <em>The Fatal Shore</em>. Knopf, 1987.</li>
                <li>Arendt, H. <em>Eichmann in Jerusalem</em>. Viking, 1963.</li>
                <li>Khadduri, M. <em>The Islamic Conception of Justice</em>. Johns Hopkins, 1984.</li>
                <li>Ramadan, T. <em>In the Footsteps of the Prophet</em>. OUP, 2007.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 9: APPENDICES */}
        <section id="appendices" className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-6 sm:p-8">
          <SectionHeading num={9} title="Appendices" presenter="Presenter 3 · Compiled together" />

          <SubHeading title="Appendix A: Key Quranic Verses" />
          <div className="overflow-x-auto rounded-xl border border-emerald-100 mt-2 mb-6">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-emerald-700 text-white">
                  <th className="py-2 px-3">Reference</th>
                  <th className="py-2 px-3">Translation</th>
                  <th className="py-2 px-3">Theme Connection</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ref: "3:110", text: "You are the best community raised for humanity — you enjoin good and forbid evil.", theme: "Collective duty to resist wrong" },
                  { ref: "2:42", text: "Do not mix truth with falsehood or conceal the truth while you know it.", theme: "Epistemology of conscience" },
                  { ref: "8:25", text: "Beware of a trial that will not only strike the wrongdoers among you.", theme: "Complicity harms the silent too" },
                  { ref: "5:2", text: "Cooperate in righteousness and piety; do not cooperate in sin and aggression.", theme: "Non-complicity obligation" },
                  { ref: "17:70", text: "We have honoured the children of Adam.", theme: "Human dignity as the ground of justice" },
                  { ref: "2:153", text: "Indeed, Allah is with the patient.", theme: "Sabr under institutional pressure" },
                ].map((row) => (
                  <tr key={row.ref} className="border-b border-emerald-50 hover:bg-emerald-50 transition-colors">
                    <td className="py-2 px-3 font-bold text-emerald-800 whitespace-nowrap">Quran {row.ref}</td>
                    <td className="py-2 px-3 text-slate-600 italic">{row.text}</td>
                    <td className="py-2 px-3 text-amber-700 font-medium">{row.theme}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SubHeading title="Appendix B: Presentation Schedule" />
          <div className="grid sm:grid-cols-3 gap-3 mt-2 mb-6">
            {[
              { presenter: "Presenter 1", sections: "Abstract · Introduction · Literature Review", time: "15–18 min", focus: "Islamic framework & novel context" },
              { presenter: "Presenter 2", sections: "Methodology · Findings & Results", time: "12–15 min", focus: "Novel analysis & evidence" },
              { presenter: "Presenter 3", sections: "Discussion · Conclusion · Q&A lead", time: "12–15 min", focus: "Application & synthesis" },
            ].map((p) => (
              <div key={p.presenter} className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="font-bold text-emerald-800 text-sm">{p.presenter}</p>
                <p className="text-xs text-slate-600 mt-1">{p.sections}</p>
                <p className="text-xs text-amber-700 font-semibold mt-2">{p.time}</p>
                <p className="text-xs text-slate-500 mt-0.5 italic">{p.focus}</p>
              </div>
            ))}
          </div>

          <SubHeading title="Appendix C: Glossary of Islamic Terms" />
          <div className="grid sm:grid-cols-2 gap-2 mt-2">
            {[
              { term: "Amanah", def: "Trustworthiness; faithful stewardship of what has been entrusted" },
              { term: "Amr bil Ma'ruf", def: "Commanding good and forbidding evil — a collective Islamic obligation" },
              { term: "Fitra", def: "The innate moral nature placed in every human being by Allah" },
              { term: "Hisba", def: "The practice of upholding moral accountability in society" },
              { term: "Shura", def: "Consultation; collective deliberation on moral and practical questions" },
              { term: "Taqwa", def: "God-consciousness; awareness of Allah in all actions" },
              { term: "Tawbah", def: "Repentance; returning to Allah and moral clarity" },
              { term: "Duniya / Akhirah", def: "This world / the hereafter — the two horizons of Islamic moral evaluation" },
            ].map((item) => (
              <div key={item.term} className="flex gap-2 text-xs">
                <span className="font-bold text-emerald-800 whitespace-nowrap min-w-[90px]">{item.term}</span>
                <span className="text-slate-600">{item.def}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="islamic-pattern text-white mt-12 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-amber-300 text-sm font-semibold mb-1">
            International Islamic University Islamabad (IIUI)
          </p>
          <p className="text-emerald-200 text-xs mb-3">Department of Computer Science · BS Computer Science · May 2026</p>
          <div className="gold-line h-px mb-3" />
          <p className="text-white/70 text-xs">
            Presented to: <strong className="text-white">Sir Hussain</strong> · Course: Islamic Studies / Literature — English
          </p>
          <p className="text-emerald-300 text-xs mt-3">
            Muhammad Afzaal Bashir · Mohannad Ajlan Muhammad Ajlan · Muhammad Bilal Ikhlaq
          </p>
        </div>
      </footer>
    </div>
  );
}
