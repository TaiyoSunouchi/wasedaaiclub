import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Calculator, BookMarked, FlaskConical, Wrench, Blocks, MousePointerClick, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "理念 | 早稲田AI研究会",
  description: "早稲田AI研究会の理念・ミッション・ビジョン",
};

const aiNative = [
  "AIを前提に、研究・開発・組織運営の型を設計できる人",
  "モデルの限界を理解した上で、AIを活用できる人",
  "データ収集→学習→運用→改善のループを回しながら、問題解決を図れる人",
];

const fundamentals = [
  { icon: Monitor, title: "機械学習・深層学習", sub: "を学びます" },
  { icon: BookMarked, title: "AIエンジニアリング", sub: "を学びます" },
  { icon: Calculator, title: "AIの社会実装方法", sub: "を学びます" },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="site-container py-16 md:py-24 text-center">
          <Badge variant="secondary" className="mb-4">Philosophy</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            私たちの<span className="brand-gradient">理念</span>
          </h1>
          <p className="mt-3 text-gray-900 text-sm font-mono uppercase tracking-widest">Our Philosophy</p>
        </div>
      </section>

      {/* AIの特異性 */}
      <section className="bg-white border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg md:text-xl text-gray-950 leading-relaxed">
              AIは、これまでのあらゆる発明とは決定的に違います。<br />なぜならAIは、単なる道具ではなく、自ら考え行動する主体になるからです。
            </p>
            <p className="text-lg md:text-xl text-gray-950 leading-relaxed">
              だからこそ私たちは、<br />
              <span className="font-bold text-blue-700">AIに使われる側ではなく、AIを使う側に立ちます。</span><br />
              そして、社会的に大きな価値を生み出し続けていきます。
            </p>
          </div>
        </div>
      </section>

      {/* シンギュラリティ時代 */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg md:text-xl text-gray-950 leading-relaxed">
              あらゆる知的活動がAIによって代替されうる時代が来ます。<br />そのときに必要なのは、AIに置き換えられる人間ではなく、<br />
              <span className="font-bold text-orange-600">そのAIを操る人間</span>です。
            </p>
            <p className="text-lg md:text-xl text-gray-950 leading-relaxed">
              AI研究会は、シンギュラリティ到達後にも価値を生み出し続けるコミュニティです。<br />私たちの目的は、
              <span className="font-bold">根本原理からAIを理解し、AIネイティブを輩出すること</span>です。
            </p>
          </div>
        </div>
      </section>

      {/* AIネイティブとは */}
      <section className="bg-white border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">AIネイティブとは何か</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">AI Native</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-950 mb-8 text-center">AI研究会が目指すAIネイティブとは、次のような人です。</p>

            <div className="space-y-4">
              {aiNative.map((text, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="flex items-start gap-5 pt-6">
                    <span className="text-2xl font-black text-blue-600 font-mono shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-gray-950 leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AIドメインの全体像 */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">AIドメインの全体像</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">AI Domain Overview</p>
          </div>

          <div className="max-w-lg mx-auto">
            <p className="text-gray-950 text-center mb-8">
              AIの世界は、上流から下流へと4つの層で成り立っています。
            </p>

            <div className="space-y-3">
              {[
                {
                  num: "①",
                  title: "研究",
                  desc: "基盤モデルを生み出す・研究する",
                  note: "最上流",
                  icon: FlaskConical,
                  main: true,
                },
                {
                  num: "②",
                  title: "エンジニアリング",
                  desc: "AIを活用したシステムをゼロから構築する",
                  note: null,
                  icon: Wrench,
                  main: true,
                },
                {
                  num: "③",
                  title: "ノーコード",
                  desc: "既存ツールを組み合わせてAI活用システムを作る",
                  note: null,
                  icon: Blocks,
                  main: false,
                },
                {
                  num: "④",
                  title: "活用",
                  desc: "完成したAIツールを手動で使う",
                  note: "最下流",
                  icon: MousePointerClick,
                  main: false,
                },
              ].map(({ num, title, desc, note, icon: Icon, main }, i, arr) => (
                <div key={num}>
                  <div
                    className={`flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all duration-200 ${
                      main
                        ? "bg-blue-50 border-blue-200 shadow-sm"
                        : "bg-white border-gray-200 opacity-60"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        main ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <Icon className="size-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`font-black font-mono text-sm ${main ? "text-blue-600" : "text-gray-950"}`}>{num}</span>
                        <span className="font-bold text-base">{title}</span>
                        {note && (
                          <span className="text-xs text-gray-950 border border-gray-200 rounded-full px-2 py-0.5">{note}</span>
                        )}
                        {main && (
                          <span className="text-xs text-blue-700 bg-blue-100 rounded-full px-2 py-0.5 font-semibold">主軸</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-950 mt-0.5">{desc}</p>
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex justify-center my-1">
                      <ChevronDown className="size-4 text-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 根本原理 */}
      <section className="bg-white border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">AI研究会で学ぶ「根本原理」</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">Fundamentals</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-950 mb-10 text-center">
              私たちは、流行や表面的なテクニックだけで終わりません。<br />AIを根本原理から理解するために、以下を軸に学びます。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fundamentals.map(({ icon: Icon, title, sub }) => (
                <Card key={title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="size-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{title}</h3>
                    <p className="text-sm text-gray-900">{sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AIが進化した世界で人間がすべきこと */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">AIが進化した世界で人間がすべきこと</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">The Future of AI & Humans</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm text-center">
              <p className="text-base md:text-lg text-gray-950 leading-relaxed">
                近い将来、<span className="font-bold text-orange-600">AIがAIツールを操作する時代</span>が来ます。<br />人間の介在なしにAIが仕事をこなすようになります。
              </p>
            </div>

            <div>
              <p className="text-gray-950 text-center mb-6 font-medium">それでも人間に残る仕事は、次の3つです。</p>
              <div className="space-y-4">
                {[
                  { num: "①", label: "モデルそのものを作る", domain: "研究" },
                  { num: "②", label: "AIツールを作成する", domain: "エンジニアリング" },
                  { num: "③", label: "AIエージェントの仕組みを構築する", domain: "エンジニアリング" },
                ].map(({ num, label, domain }) => (
                  <Card key={num} className="hover:shadow-md transition-shadow duration-200">
                    <CardContent className="flex items-center gap-5 py-5">
                      <span className="text-2xl font-black text-blue-600 font-mono shrink-0">{num}</span>
                      <p className="font-semibold text-gray-950 flex-1">{label}</p>
                      <span className="text-xs text-blue-700 bg-blue-100 rounded-full px-3 py-1 font-semibold shrink-0">{domain}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-gray-950 mt-6">
                これらを学べる場を、早稲田AI研究会で提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 価値の生み出し方 */}
      <section className="bg-white border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">価値の生み出し方</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">Creating Value</p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-950 leading-relaxed">
              学ぶだけでは終わりません。<br />
              <span className="font-bold text-orange-600">AIコーディング</span>を通じてアイデアを形にします。<br />
              企業や他団体との<span className="font-bold text-orange-600">プロジェクト</span>を通じて、手を動かしながら価値を生み出します。
            </p>
          </div>
        </div>
      </section>

      {/* 新入生への提供 */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">新入生への提供</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">For New Students</p>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-lg text-gray-950 leading-relaxed">
              「AIって何？知りたいけど、どこから学べばいいのかわからない」——
            </p>
            <p className="text-lg text-gray-950 leading-relaxed">
              そんな早稲田大学生に向けて、<br />私たちは
              <span className="font-bold text-blue-700">学習のロードマップ</span>と
              <span className="font-bold text-blue-700">共に活動する仲間</span>を提供します。
            </p>
            <p className="text-lg text-gray-950 leading-relaxed">
              特に、<span className="font-bold">専門が情報系でない人でもAIを学ぶ機会を作ります。</span><br />
              最初の一歩を、ひとりで迷わせません。
            </p>
          </div>
        </div>
      </section>

      {/* メンタリング */}
      <section className="bg-white border-b border-gray-100">
        <div className="site-container py-16 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">メンタリング</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">Mentoring</p>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p className="text-lg md:text-xl text-gray-950 leading-relaxed">
              <span className="font-bold text-orange-600">一代前の先輩がメンターになります。</span>
            </p>
            <p className="text-lg text-gray-950 leading-relaxed">
              近い距離の先輩が伴走することで、<br />
              学びを継続しやすい環境をつくります。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="site-container py-16 md:py-20">
          <div className="text-center rounded-3xl bg-white border border-gray-100 shadow-sm py-14 px-6 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">一緒に未来を創りませんか？</h2>
            <p className="text-gray-950 mb-8 leading-relaxed">
              早稲田AI研究会では、AIに興味を持つすべての学生を歓迎しています。<br />
              経験は問いません。一緒に学び、成長しましょう。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
