import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import PhotoSlider from "@/components/PhotoSlider";
import CopyBtn from "@/components/CopyBtn";
import { ChevronRight } from "lucide-react";

/* ── データ定義 ── */

const reports = [
  {
    tag: "勉強会",
    date: "2026.02.10",
    title: "深層学習勉強会",
    body: "2/10に深層学習についての勉強会を開催しました。情報理工学科4年の会員が講師となり、「深層学習 上: 基礎と概念」を読み進めました。ニューラルネットワークに対する理解を深める機会となりました。",
    color: "orange" as const,
  },
  {
    tag: "イベント",
    date: "2026.01.24",
    title: "早稲田大学社会人コース（LRC）向け団体紹介",
    body: "1/24に早稲田大学日本橋キャンパスにて、LRCの方々に向けて団体紹介を行いました。生成AIを論文作成にいかに活用するかについての講義を実施。フジテレビの記者の方にも取材いただきました。",
    color: "blue" as const,
  },
  {
    tag: "イベント",
    date: "2025.12.23",
    title: "年末交流会",
    body: "前半ではAI生成画像とリアル画像を見分けるゲームで親睦を深め、後半はLRCの生成AI研究会の方々をお招きし、軽食を囲みながら今年の活動を振り返りました。",
    color: "blue" as const,
  },
  {
    tag: "イベント",
    date: "2025.12.21",
    title: "TORYUMONにて団体紹介",
    body: "U25を対象としたスタートアップイベント「TORYUMON」にて代表が100名ほどの学生の前で団体紹介を行いました。",
    color: "blue" as const,
  },
  {
    tag: "イベント",
    date: "2025.12.15",
    title: "AWSハッカソン優勝者が伴走するAI開発コンテスト",
    body: "株式会社情報戦略テクノロジー様ご協賛のもと、慶應義塾大学のNeurabit・東京理科大学のSpecTechと共同開催。Cursorを用いた開発コンテストで、AWSハッカソン優勝者からフィードバックをいただきました。",
    color: "blue" as const,
  },
  {
    tag: "勉強会",
    date: "2025.11.27",
    title: "定期勉強会：Manusで自動動画編集",
    body: "東大大学院に所属する会員が講師となり、AIを用いた動画編集法を紹介。字幕生成やカット編集の自動化により、従来比で圧倒的な時間短縮を実現しました。",
    color: "orange" as const,
  },
  {
    tag: "勉強会",
    date: "2025.11.11",
    title: "定期勉強会：Cursor & AI Studio",
    body: "Cursor・Google AI Studioでアプリ開発をテーマに実施。各メンバーがオリジナルアプリを開発・発表しました。",
    color: "orange" as const,
  },
  {
    tag: "イベント",
    date: "2025.10.12",
    title: "AI Hack Day",
    body: "慶應義塾大学のNeurabit・東京理科大学のSpecTechと共同開催。30名超の学生が参加し、GoogleのAIツールを体験。早稲田AI研究会からは舟橋がNanoBananaの利用法について登壇しました。",
    color: "blue" as const,
  },
  {
    tag: "イベント",
    date: "2025.09.30",
    title: "1億円ビジネスアイデアソン",
    body: "「1億円ビジネスを作ろう」というテーマでアイデアソンを開催し、早大生を中心に30人ほどが参加しました。AIを活用してリサーチやスライド作成を行ったのち、チームごとに事業案の発表を行いました。ゲストとして実業家のけんすうさんとそらさんにお越しいただき、事業案についての鋭いフィードバックをいただきました。",
    color: "blue" as const,
  },
];

const activities = [
  {
    number: "01",
    title: "講座（対面）",
    schedule: "毎週火曜 19:00〜20:00",
    description:
      "AIの基礎知識から応用例・実装方法まで幅広く学べる講座を提供しています。\n起業家などの外部講師とのコラボ講座もあります。\n研修システムを準備しており、AI初心者でも安心して活動に参加できます。",
    image: "/lecture2.png",
    imageAlt: "講座の様子",
  },
  {
    number: "02",
    title: "交流",
    schedule: "3か月に1回",
    description:
      "AI技術に尖った学生・起業家と食事会やハッカソンを通して自由に交流します。\n他大学の学生団体や企業との共催もしています。",
    image: "/activity-social.png",
    imageAlt: "交流会の様子",
  },
  {
    number: "03",
    title: "開発",
    schedule: "3か月に1回",
    description:
      "ハッカソンやワークショップにて、ビジネス知識・AI技術をフル活用したプロダクト開発に挑戦します。\n開発からピッチプレゼンまで、起業家やエンジニアから直接フィードバックをいただく機会もあります。",
    image: "/dev.png",
    imageAlt: "開発の様子",
  },
];

/* ── ページ本体 ── */

export default function Home() {
  return (
    <>
      {/* ────────────────────────── Hero ────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-50 border-b border-gray-100">
        <div className="absolute inset-y-0 right-0 w-[70vw] md:w-[55vw] lg:w-[50vw] pointer-events-none">
          <Image
            src="/brain.png"
            alt=""
            fill
            className="object-cover"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,.05) 8%, rgba(0,0,0,.3) 22%, rgba(0,0,0,.65) 38%, rgba(0,0,0,1) 52%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,.05) 8%, rgba(0,0,0,.3) 22%, rgba(0,0,0,.65) 38%, rgba(0,0,0,1) 52%)",
            }}
            priority
          />
        </div>

        <div className="site-container relative py-16 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              AIで新たな時代を
              <span className="block brand-gradient mt-1">早稲田AI研究会</span>
            </h1>
            <p className="mt-5 text-gray-900 font-medium text-base md:text-xl leading-relaxed">
              早稲田大学登録AIサークル<br className="hidden sm:block" />
              原理、実装、起業まで
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/philosophy"
                className="group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #f97316 100%)", backgroundSize: "200% 200%", animation: "brand-shift 6s ease-in-out infinite" }}
              >
                <span>私たちの理念を読む</span>
                <ChevronRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#about"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-xl border-gray-300 text-gray-900 hover:bg-gray-100"
                )}
              >
                団体紹介を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────── Photo Slider ────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="site-container py-10 md:py-14">
          <PhotoSlider />
        </div>
      </section>

      {/* ────────────────────────── About ────────────────────────── */}
      <section id="about" className="bg-white border-b border-gray-100">
        <div className="site-container py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">団体紹介</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">About Us</p>
          </div>

          <p className="text-gray-900 leading-relaxed max-w-3xl mb-12 text-center mx-auto">
            早稲田大学生を中心に、AIに情熱を注ぐ学生が集まり、<br />勉強会・プロジェクト開発を通じてAIへの理解を深めるサークルです。
            <br className="hidden sm:block" /><br className="hidden sm:block" />
            当会は、イベント開催・共同プロジェクトに協賛していただける企業を募集しています。<br />学生向けのAI関連イベントにご関心のある企業はお気軽にお声がけください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                value: "2023年",
                label: "創設",
                sub: "早稲田大学で最も勢いのあるサークルです",
              },
              {
                value: "7社",
                label: "輩出したスタートアップ数",
                sub: "活動やイベントで得た仲間を契機に、資金調達を経て起業した学生も多数",
              },
            ].map(({ value, label, sub }) => (
              <Card
                key={label}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-100 bg-blue-50/60"
              >
                <CardContent className="pt-8 pb-6">
                  <p className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-br from-blue-500 to-blue-700 text-transparent bg-clip-text mb-2">
                    {value}
                  </p>
                  <p className="font-bold text-blue-700 text-lg mb-3">{label}</p>
                  <p className="text-base text-gray-950 leading-relaxed">{sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── Activities ────────────────────────── */}
      <section id="highlights" className="bg-white border-b border-gray-100">
        <div className="site-container py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">活動内容</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">About Activity</p>
          </div>

          <div className="space-y-8">
            {activities.map(({ number, title, schedule, description, image, imageAlt }) => (
              <div
                key={number}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-center bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex-1 order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-2xl font-black text-orange-500 font-mono">{number}</span>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <span className="text-sm text-gray-900 bg-white px-3 py-1 rounded-full border border-gray-200 font-medium">
                      {schedule}
                    </span>
                  </div>
                  <p className="text-gray-900 leading-relaxed whitespace-pre-line">{description}</p>
                </div>
                <div className="flex-1 order-1 md:order-2 w-full">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md bg-gray-100">
                    <Image src={image} alt={imageAlt} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────── Activity Reports ────────────────────────── */}
      <section id="reports" className="bg-gray-50 border-b border-gray-100">
        <div className="site-container py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">活動報告</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">Activity Reports</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reports.map((r) => {
              const isOrange = r.color === "orange";
              return (
                <Card
                  key={r.title}
                  className={cn(
                    "group flex flex-col hover:-translate-y-1 transition-all duration-300",
                    isOrange
                      ? "hover:shadow-[0_8px_30px_rgba(234,88,12,.25)] hover:border-orange-300"
                      : "hover:shadow-[0_8px_30px_rgba(29,78,216,.2)] hover:border-blue-300"
                  )}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={cn(
                          "text-xs font-semibold",
                          isOrange
                            ? "bg-orange-50 text-orange-700 border-orange-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        )}
                        variant="outline"
                      >
                        {r.tag}
                      </Badge>
                      <span className="text-xs text-gray-950 font-mono">{r.date}</span>
                    </div>
                    <CardTitle
                      className={cn(
                        "text-base leading-snug transition-colors",
                        isOrange ? "group-hover:text-orange-600" : "group-hover:text-blue-600"
                      )}
                    >
                      {r.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-gray-950">
                      {r.body}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────── Philosophy CTA ────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="site-container py-14 md:py-20 text-center">
          <a
            href="/philosophy"
            className="group inline-flex items-center gap-3 rounded-2xl px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #f97316 100%)", backgroundSize: "200% 200%", animation: "brand-shift 6s ease-in-out infinite" }}
          >
            <span>私たちの理念を読む</span>
            <ChevronRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* ────────────────────────── Contact ────────────────────────── */}
      <section id="contact" className="bg-gray-50">
        <div className="site-container py-14 md:py-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">お問い合わせ</h2>
            <p className="text-gray-950 text-xs mt-1 font-mono uppercase tracking-widest">Contact Us</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="https://x.com/waseda_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div className="relative h-8 w-8 shrink-0 rounded-lg overflow-hidden">
                <Image src="/x-logo.jpg" alt="X" fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm group-hover:text-blue-700 transition-colors">X（@waseda_ai）</p>
                <p className="text-xs text-gray-900 mt-0.5">最新情報はこちら</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/waseda_ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-md transition-all duration-200"
            >
              <div className="relative h-8 w-8 shrink-0 rounded-lg overflow-hidden">
                <Image src="/insta-logo.jpg" alt="Instagram" fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm group-hover:text-blue-700 transition-colors">Instagram（@waseda_ai）</p>
                <p className="text-xs text-gray-900 mt-0.5">活動風景・レポートはこちら</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-blue-400 hover:shadow-md transition-all duration-200">
              <div className="relative h-8 w-8 shrink-0 rounded-lg overflow-hidden">
                <Image src="/wasedaai-logo2.png" alt="Email" fill className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">E-mail</p>
                <p className="text-xs text-gray-900 mt-0.5 truncate">waseda.ai.club@gmail.com</p>
              </div>
              <CopyBtn />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
